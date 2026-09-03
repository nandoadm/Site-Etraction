import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const executablePath = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const baseUrl = process.env.PREVIEW_URL || "http://127.0.0.1:4321";
const outputDir = "reports/visual";

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--disable-dev-shm-usage", "--no-sandbox"]
});

const checks = [
  { name: "home-desktop", width: 1440, height: 980, path: "/" },
  { name: "home-mobile", width: 390, height: 844, path: "/" },
  { name: "service-desktop", width: 1280, height: 900, path: "/servicos/cro-para-ecommerce/" },
  { name: "contact-mobile", width: 390, height: 844, path: "/contato/" }
];

for (const check of checks) {
  const page = await browser.newPage({ viewport: { width: check.width, height: check.height } });
  const consoleMessages = [];
  page.on("console", (message) => consoleMessages.push(`${message.type()}: ${message.text()}`));
  page.on("pageerror", (error) => consoleMessages.push(`pageerror: ${error.message}`));
  await page.goto(`${baseUrl}${check.path}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `${outputDir}/${check.name}.png`, fullPage: true });

  const overlapCount = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll("h1, h2, h3, p, a, button, label"));
    let count = 0;

    for (let index = 0; index < elements.length; index += 1) {
      const first = elements[index].getBoundingClientRect();
      if (!first.width || !first.height) continue;

      for (let nextIndex = index + 1; nextIndex < elements.length; nextIndex += 1) {
        const second = elements[nextIndex].getBoundingClientRect();
        if (!second.width || !second.height) continue;
        if (elements[index].contains(elements[nextIndex]) || elements[nextIndex].contains(elements[index])) continue;
        const intersects =
          first.left < second.right &&
          first.right > second.left &&
          first.top < second.bottom &&
          first.bottom > second.top;
        if (intersects && Math.abs(first.top - second.top) > 4) count += 1;
      }
    }

    return count;
  });

  if (overlapCount > 0) {
    console.warn(`${check.name}: possible text overlaps detected: ${overlapCount}`);
  }

  if (check.name === "home-desktop") {
    await page.waitForSelector("canvas", { timeout: 8000 });
    await page.waitForTimeout(1800);
    await page.evaluate(() => {
      const fallback = document.querySelector(".hero-visual-fallback");
      const cookie = document.querySelector("[data-cookie-banner]");
      if (fallback instanceof HTMLElement) fallback.style.opacity = "0";
      if (cookie instanceof HTMLElement) cookie.hidden = true;
    });

    const canvasShot = await page.locator(".hero-visual").screenshot({
      path: `${outputDir}/home-desktop-3d-only.png`
    });
    const { data, info } = await sharp(canvasShot).raw().toBuffer({ resolveWithObject: true });
    let visiblePixels = 0;
    for (let index = 0; index < data.length; index += info.channels) {
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      if (r > 80 || g > 80 || b > 80) visiblePixels += 1;
    }

    if (visiblePixels < 1000) {
      console.warn(consoleMessages.join("\n"));
      throw new Error(`home-desktop: 3D scene appears blank. Visible pixels: ${visiblePixels}`);
    }
  }

  if (check.name === "home-mobile") {
    const mobileCanvasVisible = await page.locator("canvas").isVisible().catch(() => false);
    if (mobileCanvasVisible) throw new Error("home-mobile: 3D canvas should be disabled on mobile");
  }

  await page.close();
}

await browser.close();
console.log(`Visual checks finished. Screenshots saved to ${outputDir}.`);
