/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');

fs.mkdirSync('public/images/products', { recursive: true });

async function createImages() {
  console.log('Generating high-end industrial visual assets...');

  // 1. Hero 3D Metallic Aluminium Monolith (The Centerpiece matching the reference UI!)
  // Sliced cylindrical extrusion profile with concentric fins, brushed metallic chamfers & glowing molten interior
  const heroMonolithSvg = `
  <svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C6924D" stop-opacity="0.35"/>
        <stop offset="50%" stop-color="#EA580C" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#101820" stop-opacity="0"/>
      </linearGradient>

      <!-- Brushed Metal Exterior -->
      <linearGradient id="brushedMetal" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="20%" stop-color="#CBD5E1"/>
        <stop offset="45%" stop-color="#E2E8F0"/>
        <stop offset="70%" stop-color="#64748B"/>
        <stop offset="100%" stop-color="#1E293B"/>
      </linearGradient>

      <!-- Molten Glowing Orange Core -->
      <radialGradient id="moltenCore" cx="48%" cy="48%" r="52%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="15%" stop-color="#FEF08A"/>
        <stop offset="35%" stop-color="#F59E0B"/>
        <stop offset="65%" stop-color="#EA580C"/>
        <stop offset="88%" stop-color="#9A3412"/>
        <stop offset="100%" stop-color="#431407"/>
      </radialGradient>

      <linearGradient id="bevelHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
        <stop offset="40%" stop-color="#E2E8F0" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.9"/>
      </linearGradient>

      <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="30" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
      <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="70" result="blur2"/>
        <feComposite in="SourceGraphic" in2="blur2" operator="over"/>
      </filter>
    </defs>

    <!-- Deep Ambient Glow behind the subject -->
    <circle cx="600" cy="450" r="460" fill="url(#bgGlow)" filter="url(#intenseGlow)" />
    <circle cx="560" cy="430" r="320" fill="#EA580C" opacity="0.4" filter="url(#glow)" />

    <!-- Cast Shadow on Studio Reflection Plane -->
    <ellipse cx="600" cy="760" rx="420" ry="65" fill="#030712" opacity="0.9" filter="url(#glow)"/>

    <!-- Right Complementary Sliced Ingot Block in Background -->
    <path d="M 680 320 L 940 370 L 910 630 L 650 570 Z" 
          fill="url(#brushedMetal)" opacity="0.95" stroke="url(#bevelHighlight)" stroke-width="4" />
    <polygon points="680,320 770,260 1000,290 940,370" fill="#E2E8F0" opacity="0.85"/>
    <polygon points="1000,290 1000,550 910,630 940,370" fill="#334155" opacity="0.98"/>
    <!-- Molten Fiery Reflection on Right Block Edge -->
    <line x1="680" y1="320" x2="650" y2="570" stroke="#F97316" stroke-width="8" filter="url(#glow)" />

    <!-- Left Sliced Half: 3D Precision Aluminium Extrusion Cylinder with Molten Interior -->
    <!-- Outer Cylinder Shell with bevels -->
    <path d="M 370 210 C 520 170, 690 230, 750 380 C 800 500, 750 650, 600 720 C 450 780, 290 710, 250 550 C 210 400, 250 250, 370 210 Z" 
          fill="url(#brushedMetal)" stroke="#F8FAFC" stroke-width="4" filter="drop-shadow(0px 35px 50px rgba(0,0,0,0.85))"/>

    <!-- Inner Core Cut (Gleaming Molten Crucible Chamber) -->
    <ellipse cx="500" cy="460" rx="230" ry="220" fill="url(#moltenCore)" filter="url(#glow)"/>
    
    <!-- Concentric High-Precision Aluminium Fins / Extrusion Cavities -->
    <circle cx="500" cy="460" r="175" fill="none" stroke="#FFFBEB" stroke-width="14" opacity="0.95" />
    <circle cx="500" cy="460" r="120" fill="none" stroke="#FDE047" stroke-width="9" opacity="0.95" />
    <circle cx="500" cy="460" r="65" fill="#FFFFFF" filter="url(#glow)" />

    <!-- Radiant Thermal Spikes / Radial Fins -->
    <g stroke="#FEF3C7" stroke-width="5" opacity="0.85">
      <line x1="500" y1="285" x2="500" y2="340"/>
      <line x1="500" y1="580" x2="500" y2="635"/>
      <line x1="325" y1="460" x2="380" y2="460"/>
      <line x1="620" y1="460" x2="675" y2="460"/>
      <line x1="375" y1="335" x2="415" y2="375"/>
      <line x1="585" y1="545" x2="625" y2="585"/>
      <line x1="375" y1="585" x2="415" y2="545"/>
      <line x1="585" y1="375" x2="625" y2="335"/>
    </g>

    <!-- Specular White Glints on Metallic Edges -->
    <circle cx="370" cy="210" r="8" fill="#FFFFFF" filter="url(#glow)"/>
    <circle cx="750" cy="380" r="9" fill="#FFFFFF" filter="url(#glow)"/>
    <circle cx="770" cy="260" r="6" fill="#FFFFFF"/>
    <circle cx="1000" cy="290" r="8" fill="#FFFFFF"/>
  </svg>
  `;

  await sharp(Buffer.from(heroMonolithSvg))
    .webp({ quality: 95 })
    .toFile('public/images/products/hero-aluminium-monolith.webp');
  console.log('✓ Created public/images/products/hero-aluminium-monolith.webp');

  // 2. Powder Coating Process
  const powderCoatingSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pcBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0A0E14"/>
      </linearGradient>
      <linearGradient id="cloudGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C6924D" stop-opacity="0.85"/>
        <stop offset="50%" stop-color="#F59E0B" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.1"/>
      </linearGradient>
      <filter id="sprayBlur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="25"/>
      </filter>
    </defs>
    <rect width="1200" height="800" fill="url(#pcBg)"/>
    <rect x="0" y="80" width="1200" height="20" fill="#475569"/>
    <line x1="0" y1="100" x2="1200" y2="100" stroke="#F59E0B" stroke-width="3" opacity="0.7"/>

    <g fill="#94A3B8" stroke="#CBD5E1" stroke-width="2">
      <line x1="250" y1="100" x2="250" y2="180" stroke="#64748B" stroke-width="4"/>
      <rect x="210" y="180" width="80" height="520" rx="4" fill="#1E293B" stroke="#A8B4C0"/>
      <line x1="600" y1="100" x2="600" y2="180" stroke="#64748B" stroke-width="4"/>
      <rect x="560" y="180" width="80" height="520" rx="4" fill="#C6924D" stroke="#FDE047" stroke-width="3"/>
      <line x1="950" y1="100" x2="950" y2="180" stroke="#64748B" stroke-width="4"/>
      <rect x="910" y="180" width="80" height="520" rx="4" fill="#18181B" stroke="#3F3F46" stroke-width="2"/>
    </g>

    <path d="M 400 320 L 480 340 L 480 360 L 400 380 Z" fill="#64748B" stroke="#E2E8F0"/>
    <path d="M 400 480 L 480 500 L 480 520 L 400 540 Z" fill="#64748B" stroke="#E2E8F0"/>
    <path d="M 480 350 C 530 310, 560 220, 620 220 C 600 350, 600 420, 480 350 Z" fill="url(#cloudGlow)" filter="url(#sprayBlur)" />
    <path d="M 480 510 C 540 450, 580 580, 620 580 C 600 600, 560 550, 480 510 Z" fill="url(#cloudGlow)" filter="url(#sprayBlur)" />

    <g fill="#FEF08A">
      <circle cx="520" cy="330" r="3"/><circle cx="540" cy="360" r="2"/><circle cx="510" cy="490" r="4"/>
      <circle cx="550" cy="520" r="3"/><circle cx="580" cy="350" r="5"/><circle cx="570" cy="480" r="3"/>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(powderCoatingSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/powder-coating-process.webp');
  console.log('✓ Created public/images/products/powder-coating-process.webp');

  // 3. Anodising Surface
  const anodisingSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="anoBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0B131B"/>
        <stop offset="60%" stop-color="#142435"/>
        <stop offset="100%" stop-color="#0D3352"/>
      </linearGradient>
      <linearGradient id="anodisedSatin" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#64748B"/>
        <stop offset="20%" stop-color="#E2E8F0"/>
        <stop offset="40%" stop-color="#94A3B8"/>
        <stop offset="60%" stop-color="#F8FAFC"/>
        <stop offset="80%" stop-color="#CBD5E1"/>
        <stop offset="100%" stop-color="#475569"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#anoBg)"/>
    <rect x="0" y="380" width="1200" height="420" fill="#0284C7" opacity="0.35"/>
    <line x1="0" y1="380" x2="1200" y2="380" stroke="#38BDF8" stroke-width="4"/>

    <rect x="180" y="100" width="140" height="600" fill="url(#anodisedSatin)" rx="6" stroke="#FFFFFF" stroke-width="2"/>
    <rect x="380" y="60" width="140" height="640" fill="url(#anodisedSatin)" rx="6" stroke="#FFFFFF" stroke-width="2"/>
    <rect x="580" y="120" width="140" height="580" fill="url(#anodisedSatin)" rx="6" stroke="#FFFFFF" stroke-width="2"/>
    <rect x="780" y="80" width="140" height="620" fill="url(#anodisedSatin)" rx="6" stroke="#FFFFFF" stroke-width="2"/>

    <g fill="#E0F2FE" opacity="0.7">
      <circle cx="250" cy="450" r="4"/><circle cx="270" cy="520" r="3"/><circle cx="230" cy="620" r="5"/>
      <circle cx="450" cy="420" r="5"/><circle cx="480" cy="560" r="3"/><circle cx="430" cy="680" r="6"/>
      <circle cx="650" cy="460" r="3"/><circle cx="670" cy="590" r="5"/><circle cx="620" cy="640" r="4"/>
      <circle cx="850" cy="430" r="6"/><circle cx="870" cy="540" r="4"/><circle cx="820" cy="660" r="3"/>
    </g>
    <line x1="180" y1="260" x2="320" y2="260" stroke="#38BDF8" stroke-width="3" opacity="0.8"/>
    <line x1="380" y1="220" x2="520" y2="220" stroke="#38BDF8" stroke-width="3" opacity="0.8"/>
  </svg>
  `;
  await sharp(Buffer.from(anodisingSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/anodising-surface.webp');
  console.log('✓ Created public/images/products/anodising-surface.webp');

  // 4. Stacked Ingots
  const stackedIngotsSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ingotBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E293B"/>
        <stop offset="50%" stop-color="#0F172A"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
      <linearGradient id="ingotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F8FAFC"/>
        <stop offset="30%" stop-color="#CBD5E1"/>
        <stop offset="70%" stop-color="#64748B"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
      <linearGradient id="ingotTop" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#E2E8F0"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#ingotBg)"/>
    <rect x="0" y="600" width="1200" height="200" fill="#0A0E14"/>

    <g transform="translate(180, 480)">
      <polygon points="0,60 60,0 300,0 240,60" fill="url(#ingotTop)"/>
      <polygon points="0,60 240,60 240,140 0,140" fill="url(#ingotGrad)"/>
      <polygon points="240,60 300,0 300,80 240,140" fill="#475569"/>
      <text x="70" y="105" fill="#1E293B" font-family="monospace" font-size="22" font-weight="bold">SMI • AL 99.7</text>
    </g>
    <g transform="translate(460, 480)">
      <polygon points="0,60 60,0 300,0 240,60" fill="url(#ingotTop)"/>
      <polygon points="0,60 240,60 240,140 0,140" fill="url(#ingotGrad)"/>
      <polygon points="240,60 300,0 300,80 240,140" fill="#475569"/>
      <text x="70" y="105" fill="#1E293B" font-family="monospace" font-size="22" font-weight="bold">SMI • AL 99.7</text>
    </g>
    <g transform="translate(740, 480)">
      <polygon points="0,60 60,0 300,0 240,60" fill="url(#ingotTop)"/>
      <polygon points="0,60 240,60 240,140 0,140" fill="url(#ingotGrad)"/>
      <polygon points="240,60 300,0 300,80 240,140" fill="#475569"/>
      <text x="70" y="105" fill="#1E293B" font-family="monospace" font-size="22" font-weight="bold">SMI • AL 99.7</text>
    </g>

    <g transform="translate(320, 360)">
      <polygon points="0,60 60,0 300,0 240,60" fill="url(#ingotTop)"/>
      <polygon points="0,60 240,60 240,140 0,140" fill="url(#ingotGrad)"/>
      <polygon points="240,60 300,0 300,80 240,140" fill="#475569"/>
      <text x="70" y="105" fill="#1E293B" font-family="monospace" font-size="22" font-weight="bold">SMI • AL 99.7</text>
    </g>
    <g transform="translate(600, 360)">
      <polygon points="0,60 60,0 300,0 240,60" fill="url(#ingotTop)"/>
      <polygon points="0,60 240,60 240,140 0,140" fill="url(#ingotGrad)"/>
      <polygon points="240,60 300,0 300,80 240,140" fill="#475569"/>
      <text x="70" y="105" fill="#1E293B" font-family="monospace" font-size="22" font-weight="bold">SMI • AL 99.7</text>
    </g>

    <g transform="translate(460, 240)">
      <polygon points="0,60 60,0 300,0 240,60" fill="url(#ingotTop)"/>
      <polygon points="0,60 240,60 240,140 0,140" fill="url(#ingotGrad)"/>
      <polygon points="240,60 300,0 300,80 240,140" fill="#475569"/>
      <text x="70" y="105" fill="#1E293B" font-family="monospace" font-size="22" font-weight="bold">SMI • AL 99.7</text>
    </g>

    <line x1="560" y1="240" x2="560" y2="620" stroke="#1E293B" stroke-width="8"/>
    <line x1="680" y1="240" x2="680" y2="620" stroke="#1E293B" stroke-width="8"/>
  </svg>
  `;
  await sharp(Buffer.from(stackedIngotsSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/stacked-ingots.webp');
  console.log('✓ Created public/images/products/stacked-ingots.webp');

  // 5. Aluminium Sales & Logistics Warehouse
  const warehouseSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="whBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="100%" stop-color="#1E293B"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#whBg)"/>
    <line x1="150" y1="100" x2="150" y2="750" stroke="#C6924D" stroke-width="16"/>
    <line x1="550" y1="100" x2="550" y2="750" stroke="#C6924D" stroke-width="16"/>
    <line x1="950" y1="100" x2="950" y2="750" stroke="#C6924D" stroke-width="16"/>

    <rect x="80" y="240" width="1040" height="70" fill="#E2E8F0" rx="6" stroke="#94A3B8" stroke-width="3"/>
    <line x1="80" y1="275" x2="1120" y2="275" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="80" y="420" width="1040" height="70" fill="#CBD5E1" rx="6" stroke="#64748B" stroke-width="3"/>
    <line x1="80" y1="455" x2="1120" y2="455" stroke="#94A3B8" stroke-width="2"/>
    <rect x="80" y="600" width="1040" height="70" fill="#94A3B8" rx="6" stroke="#475569" stroke-width="3"/>
    
    <rect x="300" y="235" width="220" height="80" fill="#0284C7" opacity="0.6" rx="4"/>
    <rect x="700" y="415" width="220" height="80" fill="#0284C7" opacity="0.6" rx="4"/>
  </svg>
  `;
  await sharp(Buffer.from(warehouseSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/aluminium-warehouse-supply.webp');
  console.log('✓ Created public/images/products/aluminium-warehouse-supply.webp');

  // 6. Modern Architectural Sky-Scraper Curtain Wall Facade
  const facadeSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0284C7"/>
        <stop offset="50%" stop-color="#38BDF8"/>
        <stop offset="100%" stop-color="#E0F2FE"/>
      </linearGradient>
      <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#0284C7" stop-opacity="0.2"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#skyGrad)"/>

    <g stroke="#1E293B" stroke-width="8">
      <line x1="200" y1="0" x2="100" y2="800"/>
      <line x1="380" y1="0" x2="320" y2="800"/>
      <line x1="560" y1="0" x2="540" y2="800"/>
      <line x1="740" y1="0" x2="760" y2="800"/>
      <line x1="920" y1="0" x2="980" y2="800"/>
      <line x1="1100" y1="0" x2="1200" y2="800"/>

      <line x1="0" y1="120" x2="1200" y2="120" stroke-width="6"/>
      <line x1="0" y1="260" x2="1200" y2="260" stroke-width="6"/>
      <line x1="0" y1="420" x2="1200" y2="420" stroke-width="6"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke-width="6"/>
    </g>

    <polygon points="200,0 380,0 320,800 100,800" fill="url(#glassReflect)"/>
    <polygon points="560,0 740,0 760,800 540,800" fill="url(#glassReflect)"/>
  </svg>
  `;
  await sharp(Buffer.from(facadeSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/architectural-facade.webp');
  console.log('✓ Created public/images/products/architectural-facade.webp');

  // 7. NEW: Foundry Furnace Molten Pour (Molten Aluminium at 700°C pouring into ingot moulds)
  const furnacePourSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="smelterGlow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#FEF08A"/>
        <stop offset="25%" stop-color="#F97316"/>
        <stop offset="60%" stop-color="#9A3412"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </radialGradient>
      <linearGradient id="moltenStream" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="30%" stop-color="#FEF08A"/>
        <stop offset="70%" stop-color="#F97316"/>
        <stop offset="100%" stop-color="#EA580C"/>
      </linearGradient>
      <filter id="furnaceBlur">
        <feGaussianBlur stdDeviation="30"/>
      </filter>
    </defs>
    <rect width="1200" height="800" fill="#0A0F17"/>
    <circle cx="600" cy="450" r="450" fill="url(#smelterGlow)" opacity="0.7" filter="url(#furnaceBlur)"/>

    <!-- Foundry Crucible / Ladle -->
    <path d="M 450 120 L 750 120 L 700 320 C 700 380, 500 380, 500 320 Z" fill="#334155" stroke="#CBD5E1" stroke-width="4"/>
    <ellipse cx="600" cy="120" rx="150" ry="30" fill="#FEF08A"/>

    <!-- Molten Metal Liquid Stream -->
    <path d="M 580 320 C 580 420, 560 520, 560 620 L 640 620 C 640 520, 620 420, 620 320 Z" fill="url(#moltenStream)" filter="drop-shadow(0 0 25px #F97316)"/>

    <!-- Ingot Mould Conveyor Bed -->
    <rect x="250" y="620" width="700" height="120" fill="#1E293B" stroke="#475569" stroke-width="4" rx="8"/>
    <ellipse cx="600" cy="625" rx="180" ry="25" fill="#FEF08A" opacity="0.9"/>

    <!-- Radiant Sparks -->
    <g fill="#FFFBEB">
      <circle cx="530" cy="420" r="4"/><circle cx="670" cy="390" r="3"/><circle cx="510" cy="540" r="5"/>
      <circle cx="690" cy="500" r="4"/><circle cx="480" cy="610" r="3"/><circle cx="720" cy="590" r="5"/>
    </g>
  </svg>
  `;
  await sharp(Buffer.from(furnacePourSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/furnace-casting-pour.webp');
  console.log('✓ Created public/images/products/furnace-casting-pour.webp');

  // 8. NEW: Precision Custom Extrusions Showcase (Architectural & Industrial Profiles)
  const extrusionsSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F8FAFC"/>
        <stop offset="40%" stop-color="#CBD5E1"/>
        <stop offset="80%" stop-color="#64748B"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="#0B131E"/>

    <!-- Profile 1: T-Slot Industrial Framing Extrusion -->
    <g transform="translate(180, 240)">
      <rect x="0" y="0" width="160" height="160" fill="url(#metalGrad)" stroke="#E2E8F0" stroke-width="3" rx="8"/>
      <rect x="45" y="45" width="70" height="70" fill="#0B131E" rx="4"/>
      <rect x="65" y="0" width="30" height="30" fill="#0B131E"/>
      <rect x="65" y="130" width="30" height="30" fill="#0B131E"/>
      <rect x="0" y="65" width="30" height="30" fill="#0B131E"/>
      <rect x="130" y="65" width="30" height="30" fill="#0B131E"/>
    </g>

    <!-- Profile 2: Multi-Fin Solar Heat Sink Profile -->
    <g transform="translate(480, 200)">
      <rect x="0" y="180" width="240" height="40" fill="url(#metalGrad)" rx="4"/>
      <line x1="20" y1="20" x2="20" y2="180" stroke="#CBD5E1" stroke-width="12"/>
      <line x1="60" y1="20" x2="60" y2="180" stroke="#CBD5E1" stroke-width="12"/>
      <line x1="100" y1="20" x2="100" y2="180" stroke="#CBD5E1" stroke-width="12"/>
      <line x1="140" y1="20" x2="140" y2="180" stroke="#CBD5E1" stroke-width="12"/>
      <line x1="180" y1="20" x2="180" y2="180" stroke="#CBD5E1" stroke-width="12"/>
      <line x1="220" y1="20" x2="220" y2="180" stroke="#CBD5E1" stroke-width="12"/>
    </g>

    <!-- Profile 3: Hollow Box Section & Tubes -->
    <g transform="translate(860, 220)">
      <rect x="0" y="0" width="180" height="180" fill="url(#metalGrad)" stroke="#E2E8F0" stroke-width="4" rx="8"/>
      <circle cx="90" cy="90" r="60" fill="#0B131E"/>
    </g>

    <!-- Technical Dimension Annotations -->
    <text x="210" y="440" fill="#C6924D" font-family="monospace" font-size="16">SERIES 4040 • STRUCTURAL</text>
    <text x="500" y="460" fill="#C6924D" font-family="monospace" font-size="16">THERMAL RADIAL FINS</text>
    <text x="870" y="440" fill="#C6924D" font-family="monospace" font-size="16">HOLLOW TUBE • 6063-T6</text>
  </svg>
  `;
  await sharp(Buffer.from(extrusionsSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/extrusion-profiles-bundle.webp');
  console.log('✓ Created public/images/products/extrusion-profiles-bundle.webp');

  // 9. NEW: Registered Office & Corporate Campus in Ganjam, Odisha
  const hqCampusSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hqSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="60%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#hqSky)"/>
    <!-- Ground / Plaza -->
    <rect x="0" y="550" width="1200" height="250" fill="#0A0E14"/>

    <!-- Modern Architectural Aluminium Facade Building -->
    <polygon points="200,550 200,200 700,160 700,550" fill="#1E293B" stroke="#C6924D" stroke-width="3"/>
    <polygon points="700,160 1000,220 1000,550 700,550" fill="#0F172A" stroke="#C6924D" stroke-width="2"/>

    <!-- Metallic Louvers / Aluminium Cladding Panels -->
    <g stroke="#94A3B8" stroke-width="3" opacity="0.6">
      <line x1="220" y1="240" x2="680" y2="200"/><line x1="220" y1="280" x2="680" y2="240"/>
      <line x1="220" y1="320" x2="680" y2="280"/><line x1="220" y1="360" x2="680" y2="320"/>
      <line x1="220" y1="400" x2="680" y2="360"/><line x1="220" y1="440" x2="680" y2="400"/>
    </g>

    <!-- Glowing Entrance Canopy -->
    <polygon points="400,550 400,480 620,470 620,550" fill="#0284C7" opacity="0.3"/>
    <text x="320" y="140" fill="#F8FAFC" font-family="sans-serif" font-size="28" font-weight="bold">SANTOSHI METAL INDUSTRIES</text>
    <text x="360" y="175" fill="#C6924D" font-family="monospace" font-size="16">REGISTERED OFFICE • GANJAM, ODISHA</text>
  </svg>
  `;
  await sharp(Buffer.from(hqCampusSvg))
    .webp({ quality: 92 })
    .toFile('public/images/products/odisha-registered-hq.webp');
  console.log('✓ Created public/images/products/odisha-registered-hq.webp');

  console.log('All industrial visual assets created successfully!');
}

createImages().catch(console.error);
