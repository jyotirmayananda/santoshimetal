/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = path.resolve('public/images/logo/logo-original.jpg');

async function processLogo() {
  console.log('Processing original logo from:', srcPath);
  const metadata = await sharp(srcPath).metadata();
  const { width, height } = metadata;
  
  const { data } = await sharp(srcPath).raw().toBuffer({ resolveWithObject: true });
  
  // Create RGBA buffer with background transparency
  const rgba = Buffer.alloc(width * height * 4);
  
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    
    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const saturation = maxVal - minVal;
    
    // Background detection:
    // Pure white or very near white with low saturation
    let alpha;
    if (minVal >= 253 && saturation < 4) {
      alpha = 0;
    } else if (minVal >= 244 && saturation < 6) {
      // Soft antialiased transition
      alpha = Math.round(255 * (253 - minVal) / 9);
    } else {
      // Keep foreground opaque or smoothly antialiased
      const darkness = 255 - minVal;
      alpha = Math.min(255, Math.max(0, Math.round(darkness * 2.0 + saturation * 1.5)));
      if (minVal < 240) {
        alpha = 255;
      }
    }
    
    if (alpha === 0) {
      rgba[i * 4] = 0;
      rgba[i * 4 + 1] = 0;
      rgba[i * 4 + 2] = 0;
      rgba[i * 4 + 3] = 0;
    } else if (alpha < 255) {
      // De-multiply white background color
      const a = alpha / 255;
      const nr = Math.min(255, Math.max(0, Math.round((r - 255 * (1 - a)) / a)));
      const ng = Math.min(255, Math.max(0, Math.round((g - 255 * (1 - a)) / a)));
      const nb = Math.min(255, Math.max(0, Math.round((b - 255 * (1 - a)) / a)));
      rgba[i * 4] = nr;
      rgba[i * 4 + 1] = ng;
      rgba[i * 4 + 2] = nb;
      rgba[i * 4 + 3] = alpha;
    } else {
      rgba[i * 4] = r;
      rgba[i * 4 + 1] = g;
      rgba[i * 4 + 2] = b;
      rgba[i * 4 + 3] = 255;
    }
  }

  const transparentImg = sharp(rgba, { raw: { width, height, channels: 4 } });
  
  // 1. Full transparent logo trimmed to content
  // Trim bounds: x: 55 to 970 (w: 915), y: 30 to 635 (h: 605)
  await transparentImg
    .clone()
    .extract({ left: 50, top: 30, width: 924, height: 605 })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile('public/images/logo/logo-full.png');
  console.log('✓ Created public/images/logo/logo-full.png');

  // Also create a horizontal version or clean webp
  await sharp('public/images/logo/logo-full.png')
    .webp({ quality: 95 })
    .toFile('public/images/logo/logo-full.webp');
  console.log('✓ Created public/images/logo/logo-full.webp');

  // 2. Emblem mark alone (top circular 3D metal icon)
  // Emblem content bounds: x: 251 to 777 (w: 526), y: 35 to 455 (h: 420)
  const emblemCrop = await transparentImg
    .clone()
    .extract({ left: 245, top: 30, width: 538, height: 430 })
    .png()
    .toBuffer();

  // Place emblem on a square canvas centered
  const emblemSquare = await sharp(emblemCrop)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  await sharp(emblemSquare).toFile('public/images/logo/logo-emblem.png');
  console.log('✓ Created public/images/logo/logo-emblem.png');

  // 3. Next.js App Router icons
  // src/app/icon.png (512x512)
  await sharp(emblemSquare).resize(512, 512).png().toFile('src/app/icon.png');
  console.log('✓ Created src/app/icon.png (512x512)');

  // src/app/apple-icon.png (180x180)
  await sharp(emblemSquare).resize(180, 180).png().toFile('src/app/apple-icon.png');
  console.log('✓ Created src/app/apple-icon.png (180x180)');

  // public/apple-touch-icon.png (180x180)
  await sharp(emblemSquare).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  console.log('✓ Created public/apple-touch-icon.png (180x180)');

  // public/favicon.png (48x48)
  await sharp(emblemSquare).resize(48, 48).png().toFile('public/favicon.png');
  console.log('✓ Created public/favicon.png');

  // 4. Multi-resolution favicon.ico
  // Create 32x32 PNG for ICO container
  const icoPng32 = await sharp(emblemSquare).resize(32, 32).png().toBuffer();
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(1, 4); // 1 image

  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(32, 0); // width
  dirEntry.writeUInt8(32, 1); // height
  dirEntry.writeUInt8(0, 2);  // 0 colors
  dirEntry.writeUInt8(0, 3);  // reserved
  dirEntry.writeUInt16LE(1, 4);  // color planes
  dirEntry.writeUInt16LE(32, 6); // bpp
  dirEntry.writeUInt32LE(icoPng32.length, 8); // size
  dirEntry.writeUInt32LE(22, 12); // offset (6 + 16)

  const icoBuffer = Buffer.concat([header, dirEntry, icoPng32]);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('✓ Created src/app/favicon.ico & public/favicon.ico');
}

processLogo().catch(console.error);
