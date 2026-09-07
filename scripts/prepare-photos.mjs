import sharp from "sharp";
import { mkdirSync } from "node:fs";

const OUT = "public/assets/team/operations";
mkdirSync(OUT, { recursive: true });

// Recortes manuais para fotos cuja detecção automática erra o enquadramento.
const manualCrops = {
  "marquinho-marketplace": { left: 210, top: 280, width: 640, height: 800 }
};

const people = [
  ["assets/gustavo-cro.jpg", "gustavo-cro"],
  ["assets/fernando-metaads.jpg", "fernando-metaads"],
  ["assets/gregori-googleads.jpg", "gregori-googleads"],
  ["assets/tauane-emailmarketing.jpg", "tauane-emailmarketing"],
  ["assets/juliana-sucessocliente.jpg", "juliana-sucessocliente"],
  ["assets/joaquim-designer.jpg", "joaquim-designer"],
  ["assets/alana-crm.jpg", "alana-crm"],
  ["assets/marquinho-marketplace.jpg", "marquinho-marketplace"],
  ["assets/maria-socialmidia.png", "maria-socialmidia"]
];

// Cada foto sai em dois tamanhos para o srcset servir o menor quando couber.
const PORTRAIT = [
  { w: 900, h: 1125, suffix: "" },
  { w: 480, h: 600, suffix: "-480" }
];
const AVATAR = [
  { w: 192, h: 192, suffix: "-avatar" },
  { w: 96, h: 96, suffix: "-avatar-96" }
];

const base = (src, key) => {
  const pipeline = sharp(src).rotate();
  const crop = manualCrops[key];
  return crop ? pipeline.extract(crop) : pipeline;
};

for (const [src, key] of people) {
  for (const size of PORTRAIT) {
    await base(src, key)
      .resize(size.w, size.h, { fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: 80, effort: 6 })
      .toFile(`${OUT}/${key}${size.suffix}.webp`);
  }

  for (const size of AVATAR) {
    await base(src, key)
      .resize(size.w, size.h, { fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: 82, effort: 6 })
      .toFile(`${OUT}/${key}${size.suffix}.webp`);
  }

  console.log("ok", key);
}

for (const size of PORTRAIT) {
  await sharp("assets/vinicius-socio-administrador.png")
    .rotate()
    .resize(size.w, size.h, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 80, effort: 6 })
    .toFile(`public/assets/team/vinicius-baldessar${size.suffix}.webp`);
}
console.log("ok vinicius");

for (const [width, suffix] of [[1400, ""], [700, "-700"]]) {
  await sharp("assets/time-etraction.png")
    .rotate()
    .resize(width, Math.round(width * 788 / 1400), { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 80, effort: 6 })
    .toFile(`public/assets/team/time-etraction${suffix}.webp`);
}
console.log("ok time");

// Fotos de time por frente, usadas na área de crescimento.
const squads = ["time-gestores", "time-cro", "time-crm", "time-marketplace", "time-designer"];

for (const key of squads) {
  for (const [width, suffix] of [[1400, ""], [700, "-700"]]) {
    await sharp(`assets/${key}.png`)
      .rotate()
      .resize(width, Math.round(width * 788 / 1400), { fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: 80, effort: 6 })
      .toFile(`public/assets/team/${key}${suffix}.webp`);
  }
  console.log("ok", key);
}
