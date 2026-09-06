/**
 * Régénère assets/fonts.css : Poppins en base64, embarquée dans la feuille.
 *
 * Les PDF sont rendus par Chromium en local puis relus n'importe où. Un
 * `@import` vers Google Fonts marcherait le jour du build et laisserait un
 * fichier qui dépend du réseau ; ici la fonte est DANS le CSS, donc le rendu
 * est le même hors ligne, et Chromium l'embarque dans le PDF.
 *
 *   node presentations/fetch-fonts.mjs
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

/* Poppins porte la DA Fovea : 800 pour le logo et les titres, 600 pour les
   pilules, 400 pour le corps. L'italique 400 sert aux légendes et au mot
   accentué des titres : c'est une VRAIE italique dessinée, pas une romaine
   inclinée par le moteur, ce qui se verrait à l'impression. */
const FACES = [
  { weight: 400, style: 'normal' },
  { weight: 500, style: 'normal' },
  { weight: 600, style: 'normal' },
  { weight: 700, style: 'normal' },
  { weight: 800, style: 'normal' },
  { weight: 400, style: 'italic' },
];

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36';

const spec = FACES.map((f) => `${f.style === 'italic' ? '1' : '0'},${f.weight}`)
  .sort()
  .join(';');
const SRC = `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@${spec}&display=swap`;

const css = await (await fetch(SRC, { headers: { 'User-Agent': UA } })).text();

/* Google renvoie plusieurs faces par graisse, une par plage de caractères.
   Poppins couvre aussi le devanagari : cette plage-là est écartée, elle ne
   servirait à rien ici et pèse le double du latin dans le fichier final.
   Les DEUX jeux latins, eux, sont gardés, plage comprise : le français de ces
   planches mêle accents courants (latin) et caractères qui vivent dans
   latin-ext, et n'en embarquer qu'un ferait retomber un mot sur la fonte de
   secours, ce qui se voit à l'impression. */
const DEVANAGARI = 'U+0900';

const faces = [...css.matchAll(/@font-face\s*\{([\s\S]*?)\}/g)]
  .map(([, body]) => ({
    weight: /font-weight:\s*(\d+)/.exec(body)?.[1],
    style: /font-style:\s*(\w+)/.exec(body)?.[1] ?? 'normal',
    url: /src:\s*url\(([^)]+)\)/.exec(body)?.[1],
    range: /unicode-range:\s*([^;]+);/.exec(body)?.[1],
  }))
  .filter((f) => !f.range?.includes(DEVANAGARI));

if (faces.length !== FACES.length * 2 || faces.some((f) => !f.weight || !f.url)) {
  throw new Error(`Faces latines inattendues : ${faces.length}, attendu ${FACES.length * 2}`);
}

const blocks = [];
for (const { weight, style, url, range } of faces) {
  const buf = Buffer.from(await (await fetch(url, { headers: { 'User-Agent': UA } })).arrayBuffer());
  blocks.push(
    `@font-face {\n  font-family: 'Poppins';\n  font-style: ${style};\n  font-weight: ${weight};\n` +
      `  font-display: block;\n` +
      (range ? `  unicode-range: ${range};\n` : '') +
      `  src: url(data:font/woff2;base64,${buf.toString('base64')}) format('woff2');\n}`
  );
}

const HERE = dirname(fileURLToPath(import.meta.url));
writeFileSync(
  join(HERE, 'assets', 'fonts.css'),
  `/* Généré par fetch-fonts.mjs. Ne pas éditer à la main. */\n${blocks.join('\n')}\n`
);
console.log(`assets/fonts.css : ${faces.length} faces Poppins embarquées`);
