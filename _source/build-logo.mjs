import { writeFileSync, mkdirSync, readFileSync } from 'fs';
mkdirSync('logo', { recursive: true });

/* Font di-subset & ditanam sebagai base64 supaya logo tampil identik
   di mana pun — termasuk saat dipakai sebagai <img> atau dibuka di HP. */
const b64 = (f) => readFileSync(f).toString('base64');
const FONTS = `<style>
@font-face{font-family:'WK-Ring';font-weight:700;src:url(data:font/woff2;base64,${b64('sg.woff2')}) format('woff2')}
@font-face{font-family:'WK-Word';font-weight:400;src:url(data:font/woff2;base64,${b64('ab.woff2')}) format('woff2')}
</style>`;

/* ── Warkop Kepank · Stamp Ring ──────────────────────────────
   Grid 200×200. Ring luar r88 · pita teks r70–82 · ring dalam r60
   Ikon cangkir di pusat, optical centre y=104
   ─────────────────────────────────────────────────────────── */

const cup = (c) => `
  <g transform="translate(100,103)">
    <path d="M-21 -46 q7 7 0 14 q-7 7 0 14" stroke="${c}" stroke-width="4.4" fill="none" stroke-linecap="round"/>
    <path d="M0 -50 q7 7 0 14 q-7 7 0 14"   stroke="${c}" stroke-width="4.4" fill="none" stroke-linecap="round"/>
    <path d="M21 -46 q7 7 0 14 q-7 7 0 14"  stroke="${c}" stroke-width="4.4" fill="none" stroke-linecap="round"/>
    <path d="M-31 -5 h58 v17 a29 29 0 0 1 -58 0 z" fill="${c}"/>
    <path d="M29 0 a13.5 13.5 0 0 1 0 27" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <rect x="-40" y="31" width="76" height="6.5" rx="3.25" fill="${c}"/>
  </g>`;

const diamond = (cx, cy, c, s = 3.6) =>
  `<path d="M${cx} ${cy - s} L${cx + s} ${cy} L${cx} ${cy + s} L${cx - s} ${cy} Z" fill="${c}"/>`;

/** Badge penuh — ring + teks melingkar + cangkir */
function badge({ mark, bg = 'none', id = 'a' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="Warkop Kepank">
  <title>Warkop Kepank — Bangkalan</title>
  <defs>
    ${FONTS}
    <path id="top-${id}"  d="M100,100 m-70,0 a70,70 0 1,1 140,0"/>
    <path id="bot-${id}"  d="M100,100 m-82,0 a82,82 0 0,0 164,0"/>
  </defs>
  ${bg !== 'none' ? `<circle cx="100" cy="100" r="100" fill="${bg}"/>` : ''}
  <circle cx="100" cy="100" r="88"   fill="none" stroke="${mark}" stroke-width="3"/>
  <circle cx="100" cy="100" r="60.5" fill="none" stroke="${mark}" stroke-width="1.8" opacity=".45"/>
  <g font-family="WK-Ring,'Space Grotesk',ui-sans-serif,sans-serif" font-weight="700" fill="${mark}">
    <text font-size="15" letter-spacing="4.6" text-anchor="middle">
      <textPath href="#top-${id}" startOffset="50%">WARKOP KEPANK</textPath>
    </text>
    <text font-size="10.5" letter-spacing="4.2" text-anchor="middle">
      <textPath href="#bot-${id}" startOffset="50%">BANGKALAN · MADURA</textPath>
    </text>
  </g>
  ${diamond(21.5, 100, mark)}
  ${diamond(178.5, 100, mark)}
  ${cup(mark)}
</svg>`;
}

/** Ikon polos — cangkir + cincin saja, untuk favicon & ukuran mungil */
function icon({ mark, bg = 'none' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="Warkop Kepank">
  ${bg !== 'none' ? `<circle cx="100" cy="100" r="100" fill="${bg}"/>` : ''}
  <circle cx="100" cy="100" r="86" fill="none" stroke="${mark}" stroke-width="9"/>
  <g transform="translate(100,102) scale(1.34) translate(-100,-103)">${cup(mark)}</g>
</svg>`;
}

/** Lockup mendatar — badge + wordmark, untuk header & kop surat */
function lockup({ mark, sub, bg = 'none' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 200" width="620" height="200" role="img" aria-label="Warkop Kepank">
  <title>Warkop Kepank</title>
  <defs>${FONTS}</defs>
  ${bg !== 'none' ? `<rect width="620" height="200" fill="${bg}"/>` : ''}
  <g transform="translate(4,4) scale(.96)">
    <circle cx="100" cy="100" r="88" fill="none" stroke="${mark}" stroke-width="3"/>
    <circle cx="100" cy="100" r="60.5" fill="none" stroke="${mark}" stroke-width="1.8" opacity=".45"/>
    ${diamond(21.5, 100, mark)}${diamond(178.5, 100, mark)}
    ${cup(mark)}
  </g>
  <g fill="${mark}" font-family="WK-Word,'Archivo Black','Arial Black',sans-serif">
    <text x="216" y="98" font-size="55" letter-spacing="-1.6">KEPANK</text>
  </g>
  <text x="219" y="128" fill="${sub}" font-family="WK-Ring,'Space Grotesk',ui-sans-serif,sans-serif"
        font-size="15.5" font-weight="700" letter-spacing="7.6">WARKOP · BANGKALAN</text>
  <path d="M219 148 q26 -11 52 0 t52 0 t52 0 t52 0" stroke="${sub}" stroke-width="4.5" fill="none" stroke-linecap="round" opacity=".8"/>
</svg>`;
}

const GOLD = '#d4a565', CREAM = '#f4ece1', DARK = '#241610', COFFEE = '#2a1a10';

const files = {
  // Utama
  'logo-primary-gold.svg':      badge({ mark: GOLD,  id: 'g' }),
  'logo-primary-dark.svg':      badge({ mark: COFFEE, id: 'd' }),
  'logo-primary-cream.svg':     badge({ mark: CREAM, id: 'c' }),
  // Badge padat — foto profil WA / IG / FB
  'logo-badge-on-dark.svg':     badge({ mark: GOLD,  bg: DARK,  id: 'bd' }),
  'logo-badge-on-gold.svg':     badge({ mark: DARK,  bg: GOLD,  id: 'bg' }),
  'logo-badge-on-cream.svg':    badge({ mark: COFFEE, bg: CREAM, id: 'bc' }),
  // Ikon kecil
  'logo-icon-gold.svg':         icon({ mark: GOLD }),
  'logo-icon-dark.svg':         icon({ mark: COFFEE }),
  'logo-icon-on-gold.svg':      icon({ mark: DARK, bg: GOLD }),
  'favicon.svg':                icon({ mark: GOLD, bg: DARK }),
  // Lockup
  'logo-lockup-dark-bg.svg':    lockup({ mark: CREAM, sub: GOLD }),
  'logo-lockup-light-bg.svg':   lockup({ mark: COFFEE, sub: '#a0763f' }),
};

for (const [n, s] of Object.entries(files)) writeFileSync(`logo/${n}`, s.trim() + '\n');
console.log('✅ ' + Object.keys(files).length + ' SVG dibuat');
