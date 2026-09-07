import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const executablePath = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const baseUrl = process.env.PREVIEW_URL || "http://127.0.0.1:4321";
const outputDir = "reports/visual";

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--disable-dev-shm-usage", "--no-sandbox"]
});

const homeChecks = [
  { name: "home-360", width: 360, height: 760 },
  { name: "home-390", width: 390, height: 844 },
  { name: "home-768", width: 768, height: 960 },
  { name: "home-1024", width: 1024, height: 900 },
  { name: "home-1240", width: 1240, height: 900 },
  { name: "home-1440", width: 1440, height: 980 }
];

async function inspectHome(page, check) {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outputDir}/${check.name}.png`, fullPage: true });

  return page.evaluate(() => {
    const images = Array.from(document.images);
    const horizontalOverflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    const visibleLogoCount = Array.from(document.querySelectorAll("[data-logo-node]")).filter((node) => {
      const rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }).length;
    const visibleServiceCarousel = Boolean(
      document.querySelector('[data-embla-carousel="services"]')?.getBoundingClientRect().height
    );
    const visibleDesktopServices = Boolean(
      document.querySelector("[data-services-desktop]")?.getBoundingClientRect().height
    );

    return {
      base64Images: images.filter((image) => image.currentSrc.startsWith("data:image")).length,
      clientLogoCount: document.querySelectorAll("[data-logo-node]").length,
      horizontalOverflow,
      heroVisible: Boolean(document.querySelector("[data-home-hero] h1")?.textContent?.trim()),
      localAssetImages: images.filter((image) => image.currentSrc.includes("/assets/")).length,
      remoteEtractionImages: images.filter((image) => image.currentSrc.includes("etraction.com.br")).length,
      serviceButtonCount: document.querySelectorAll("[data-service-nav]").length,
      testimonialCount: document.querySelectorAll(".testimonial-card").length,
      visibleDesktopServices,
      visibleLogoCount,
      visibleServiceCarousel
    };
  });
}

for (const check of homeChecks) {
  const page = await browser.newPage({ viewport: { width: check.width, height: check.height } });
  const consoleMessages = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleMessages.push(`${message.type()}: ${message.text()}`);
  });
  page.on("pageerror", (error) => consoleMessages.push(`pageerror: ${error.message}`));

  const result = await inspectHome(page, check);

  if (consoleMessages.length) {
    throw new Error(`${check.name}: console errors\n${consoleMessages.join("\n")}`);
  }
  if (!result.heroVisible) throw new Error(`${check.name}: hero title is not visible`);
  if (result.horizontalOverflow > 1) {
    throw new Error(`${check.name}: horizontal overflow ${result.horizontalOverflow}px`);
  }
  if (result.base64Images > 0) throw new Error(`${check.name}: found base64 placeholder images`);
  if (result.remoteEtractionImages > 0) {
    throw new Error(`${check.name}: found image hotlinks to etraction.com.br`);
  }
  if (result.clientLogoCount !== 13) {
    throw new Error(`${check.name}: expected 13 client logos, got ${result.clientLogoCount}`);
  }
  if (result.serviceButtonCount !== 8) throw new Error(`${check.name}: expected 8 service nav buttons, got ${result.serviceButtonCount}`);
  if (result.testimonialCount !== 3) throw new Error(`${check.name}: expected 3 testimonials`);
  if (check.width <= 980 && !result.visibleServiceCarousel) {
    throw new Error(`${check.name}: mobile service carousel is not visible`);
  }
  if (check.width > 980 && !result.visibleDesktopServices) {
    throw new Error(`${check.name}: desktop service experience is not visible`);
  }

  if (check.width <= 980) {
    await page.locator('[data-embla-carousel="services"] [data-embla-next]').click();
    await page.waitForTimeout(250);
    const selectedServiceDot = await page.locator('[data-embla-carousel="services"] [data-embla-dot][aria-current="true"]').evaluate((dot) => dot.getAttribute("data-embla-index"));
    if (selectedServiceDot !== "1") throw new Error(`${check.name}: service carousel next button did not advance`);
  } else {
    await page.locator('[data-service-nav][data-service-index="3"]').click();
    await page.waitForTimeout(700);
    const currentService = await page.locator('[data-service-nav][aria-current="true"]').evaluate((button) => button.getAttribute("data-service-index"));
    if (currentService !== "3") throw new Error(`${check.name}: desktop service navigation did not update`);
  }

  await page.close();
}

const logoPage = await browser.newPage({ viewport: { width: 1440, height: 980 } });
await logoPage.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
await logoPage.waitForTimeout(500);
// rola até o fim do trecho fixado, onde o mural já está inteiro revelado
const logoTarget = await logoPage.locator("[data-clients-logos]").evaluate(
  (element) => element.getBoundingClientRect().top + window.scrollY + 900
);
await logoPage.evaluate((target) => window.scrollTo(0, target), logoTarget);
await logoPage.waitForTimeout(1100);
await logoPage.screenshot({ path: `${outputDir}/clients-final.png`, fullPage: false });

const logoResult = await logoPage.evaluate(() => {
  const stage = document.querySelector("[data-logo-stage]");
  if (!stage) return { visible: 0, outside: ["missing stage"] };

  const stageRect = stage.getBoundingClientRect();
  const nodes = Array.from(document.querySelectorAll("[data-logo-node]"));

  const visible = nodes.filter((node) => Number(window.getComputedStyle(node).opacity) > 0.5).length;
  const outside = nodes
    .filter((node) => {
      const rect = node.getBoundingClientRect();
      return (
        rect.left < stageRect.left - 1 ||
        rect.right > stageRect.right + 1 ||
        rect.top < stageRect.top - 1 ||
        rect.bottom > stageRect.bottom + 1
      );
    })
    .map((node) => node.textContent?.trim() ?? "");

  return { visible, outside };
});

if (logoResult.visible !== 13) throw new Error(`clients-final: expected 13 visible logos, got ${logoResult.visible}`);
if (logoResult.outside.length) throw new Error(`clients-final: logos outside the stage: ${logoResult.outside.join(", ")}`);
await logoPage.close();

const interactionPage = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true
});
await interactionPage.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
await interactionPage.waitForTimeout(500);

const serviceCarousel = interactionPage.locator('[data-embla-carousel="services"]');
await serviceCarousel.scrollIntoViewIfNeeded();
await interactionPage.waitForTimeout(300);
const serviceViewport = serviceCarousel.locator("[data-embla-viewport]");
const serviceBox = await serviceViewport.boundingBox();
if (!serviceBox) throw new Error("mobile interactions: service carousel viewport not found");
await interactionPage.mouse.move(serviceBox.x + serviceBox.width * 0.82, serviceBox.y + serviceBox.height * 0.45);
await interactionPage.mouse.down();
await interactionPage.mouse.move(serviceBox.x + serviceBox.width * 0.18, serviceBox.y + serviceBox.height * 0.45, {
  steps: 8
});
await interactionPage.mouse.up();
await interactionPage.waitForTimeout(500);
let selectedServiceDot = await serviceCarousel
  .locator('[data-embla-dot][aria-current="true"]')
  .evaluate((dot) => dot.getAttribute("data-embla-index"));
if (selectedServiceDot === "0") throw new Error("mobile interactions: service carousel swipe did not advance");

await serviceCarousel.locator("[data-embla-next]").focus();
await interactionPage.keyboard.press("Enter");
await interactionPage.waitForTimeout(400);
selectedServiceDot = await serviceCarousel
  .locator('[data-embla-dot][aria-current="true"]')
  .evaluate((dot) => dot.getAttribute("data-embla-index"));
if (selectedServiceDot === "0") throw new Error("mobile interactions: service carousel keyboard did not advance");

const testimonialCarousel = interactionPage.locator('[data-embla-carousel="testimonials"]');
await testimonialCarousel.scrollIntoViewIfNeeded();
await interactionPage.waitForTimeout(300);
await testimonialCarousel.locator("[data-embla-next]").focus();
await interactionPage.keyboard.press("Enter");
await interactionPage.waitForTimeout(400);
const selectedTestimonialDot = await testimonialCarousel
  .locator('[data-embla-dot][aria-current="true"]')
  .evaluate((dot) => dot.getAttribute("data-embla-index"));
if (selectedTestimonialDot !== "1") {
  throw new Error("mobile interactions: testimonial carousel keyboard did not advance");
}

const selectedSummary = testimonialCarousel.locator(".testimonial-card.is-selected summary");
await selectedSummary.focus();
await interactionPage.keyboard.press("Enter");
await interactionPage.waitForTimeout(200);
const detailOpen = await testimonialCarousel
  .locator(".testimonial-card.is-selected details")
  .evaluate((details) => details.hasAttribute("open"));
if (!detailOpen) throw new Error("mobile interactions: testimonial details did not expand by keyboard");

await interactionPage.close();

const reducedPage = await browser.newPage({
  viewport: { width: 390, height: 844 },
  reducedMotion: "reduce"
});
await reducedPage.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
await reducedPage.waitForTimeout(300);
const reducedResult = await reducedPage.evaluate(() => ({
  reducedClass: document.documentElement.classList.contains("reduced-motion"),
  visibleLogoCount: Array.from(document.querySelectorAll("[data-logo-node]")).filter((node) => {
    const rect = node.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }).length,
  firstMetric: document.querySelector("[data-count-value]")?.textContent?.trim()
}));

if (!reducedResult.reducedClass) throw new Error("reduced-motion: class was not applied");
if (reducedResult.visibleLogoCount !== 13) throw new Error("reduced-motion: not all logos are rendered");
if (reducedResult.firstMetric !== "+100") throw new Error("reduced-motion: metric did not stay at final value");
await reducedPage.close();

await browser.close();
console.log(`Visual checks finished. Screenshots saved to ${outputDir}.`);
