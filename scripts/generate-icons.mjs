// Rasterizes the brand mark into the PNG icon set.
// Run with `node scripts/generate-icons.mjs` after changing icon.svg or avatar.svg.
import sharp from "sharp";

await sharp("src/app/icon.svg", { density: 300 })
  .resize(180, 180)
  .png()
  .toFile("src/app/apple-icon.png");

await sharp("scripts/avatar.svg", { density: 300 })
  .resize(1024, 1024)
  .png()
  .toFile("public/treezio-avatar.png");

console.log("Generated src/app/apple-icon.png and public/treezio-avatar.png");
