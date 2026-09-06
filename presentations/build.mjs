/**
 * Génère les PDF : un document par commerce, plus le document de groupe,
 * dans chaque format.
 *
 *   npm run decks                          les dix PDF
 *   node presentations/build.mjs bar       un seul document, les deux formats
 *   node presentations/build.mjs --a4      un seul format
 *   node presentations/build.mjs --png     en plus, une image par planche
 *
 * Le rendu passe par Chromium en mode impression : c'est le seul moteur
 * disponible ici qui sache la grille CSS et les polices embarquées, et le
 * format de page vient de la feuille (@page), pas de la ligne de commande.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { DOCS, SECTORS } from './content.mjs';
import { JADORE } from './content-jadore.mjs';
import { renderDeck } from './render.mjs';

/* Les documents de vente, plus les présentations client. Le nouveau document
   vit dans son propre fichier de contenu : ajouter un client ne touche pas
   aux dix PDF existants. */
const ALL = [...DOCS, JADORE];

const HERE = dirname(fileURLToPath(import.meta.url));
const BUILD = join(HERE, 'build');
const PDF = join(HERE, 'pdf');

/* Chromium est fourni par l'image (Playwright), il n'est jamais téléchargé.
   CHROME_PATH permet d'en désigner un autre sur une machine différente. */
const CHROME =
  process.env.CHROME_PATH ??
  ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome', '/opt/pw-browsers/chromium'].find(existsSync) ??
  'chromium';

const FLAGS = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--no-pdf-header-footer',
  '--disable-dbus',
  /* Les polices sont en data: dans la feuille, donc rien à attendre du réseau.
     Le budget couvre la mise en page, pas un chargement. */
  '--virtual-time-budget=3000',
];

/**
 * Les deux formats livrés.
 *
 * `shot` est la taille de fenêtre des images de relecture : Chromium réserve
 * environ 87 px de barre invisible en mode headless, donc la hauteur demandée
 * est celle de la planche PLUS cette barre, faute de quoi le bas est rogné.
 */
const FORMATS = [
  { id: '16-9', label: '16:9', css: '../assets/deck.css', suffix: '', shot: [1280, 807] },
  { id: 'a4', label: 'A4', css: '../assets/deck-a4.css', suffix: '-a4', shot: [794, 1210] },
];

const args = process.argv.slice(2);
const wantPng = args.includes('--png');
const askedFormats = FORMATS.filter((f) => args.includes(`--${f.id}`));
const formats = askedFormats.length ? askedFormats : FORMATS;
const only = args.filter((a) => !a.startsWith('--'));

const targets = only.length ? ALL.filter((d) => only.includes(d.slug)) : ALL;
if (!targets.length) {
  console.error(`Document inconnu. Disponibles : ${ALL.map((d) => d.slug).join(', ')}`);
  process.exit(1);
}

/* --- Garde-fous de contenu ------------------------------------------------
   Deux règles de la charte se vérifient mieux à la génération qu'à la
   relecture : elles arrêtent le build plutôt que de laisser passer un PDF. */

function guard(html, name) {
  if (html.includes('—') || html.includes('–')) {
    throw new Error(`${name} : tiret cadratin ou demi-cadratin détecté. Virgule, deux-points ou parenthèses.`);
  }
  const titles = [...html.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)];
  for (const [, inner] of titles) {
    const marks = (inner.match(/<i>/g) ?? []).length;
    if (marks > 1) {
      throw new Error(`${name} : un titre porte ${marks} mots accentués. Un seul par titre.`);
    }
  }
}

/** Le nombre de pages d'un PDF, lu dans le fichier plutôt que par une dépendance. */
function pageCount(pdfPath) {
  return (readFileSync(pdfPath).toString('latin1').match(/\/Type\s*\/Page(?![sR])/g) ?? []).length;
}

/**
 * Une planche déborde sur une page blanche si sa hauteur dépasse d'un cheveu
 * celle de la page : c'est le piège du 297mm, invisible à l'écran et flagrant
 * à l'impression. Le PDF produit doit porter exactement une page par planche.
 */
function checkPages(pdfPath, expected, name) {
  const pages = pageCount(pdfPath);
  if (pages !== expected) {
    throw new Error(
      `${name} : ${pages} pages pour ${expected} planches. Une planche déborde, vérifiez la hauteur de page.`
    );
  }
}

/**
 * Le débordement de CONTENU, lui, ne se voit pas : la planche est en
 * `overflow: hidden`, donc une ligne de trop est silencieusement rognée sous
 * le pied de page. On réimprime le document avec les planches débridées ; ce
 * qui dépassait crée alors une page de plus, et le compte le dit.
 *
 * Les halos sont masqués pour ce passage : ils débordent par construction et
 * feraient un faux positif.
 */
function checkOverflow(html, expected, name, tmpPath) {
  /* Il ne suffit pas de lever `overflow` : tant que la planche garde sa hauteur
     fixe, le trop-plein déborde À L'INTÉRIEUR sans jamais créer de page. La
     hauteur est donc libérée, et le corps cesse de se comprimer. */
  const debridee = html.replace(
    '</head>',
    '<style>' +
      '.slide{overflow:visible!important;height:auto!important}' +
      '.slide__body{flex:0 0 auto!important;overflow:visible!important}' +
      '.glow{display:none!important}' +
      '</style></head>'
  );
  writeFileSync(tmpPath, debridee);
  const probe = `${tmpPath}.pdf`;
  chrome([`--print-to-pdf=${probe}`, `file://${tmpPath}`]);
  const pages = pageCount(probe);
  if (pages !== expected) {
    throw new Error(
      `${name} : ${pages} pages une fois les planches débridées, pour ${expected} planches. ` +
        `Du contenu passe sous le pied de page et se fait rogner. Raccourcissez le texte ou la mise en page.`
    );
  }
}

rmSync(BUILD, { recursive: true, force: true });
mkdirSync(BUILD, { recursive: true });
mkdirSync(PDF, { recursive: true });

const chrome = (extra) => execFileSync(CHROME, [...FLAGS, ...extra], { stdio: ['ignore', 'ignore', 'pipe'] });

for (const format of formats) {
  for (const doc of targets) {
    const name = `${doc.slug}${format.suffix}`;
    const html = renderDeck(doc, { cssHref: format.css, sectors: SECTORS });
    guard(html, name);

    const htmlPath = join(BUILD, `${name}.html`);
    writeFileSync(htmlPath, html);

    const plates = (html.match(/<section /g) ?? []).length;
    const pdfPath = join(PDF, `fovea-${name}.pdf`);
    chrome([`--print-to-pdf=${pdfPath}`, `file://${htmlPath}`]);
    checkPages(pdfPath, plates, name);
    checkOverflow(html, plates, name, join(BUILD, `${name}.check.html`));
    console.log(
      `${format.label.padEnd(4)} ${doc.label.padEnd(26)} ${String(plates).padStart(2)} planches → ${pdfPath.replace(
        `${HERE}/`,
        ''
      )}`
    );

    if (wantPng) {
      /* Une planche par image, pour relire la mise en page sans ouvrir le PDF.
         Le document est redécoupé sur ses <section> plutôt que capturé d'un
         seul bloc : une capture pleine hauteur ne se relit pas. */
      const shots = join(BUILD, 'png', name);
      mkdirSync(shots, { recursive: true });
      const headEnd = html.indexOf('<body>') + '<body>'.length;
      const headHtml = html.slice(0, headEnd).replace('../assets/', '../../../assets/');
      const sections = html.slice(headEnd).split('<section ').slice(1);
      sections.forEach((sec, i) => {
        const page = join(shots, `${String(i + 1).padStart(2, '0')}.html`);
        writeFileSync(
          page,
          `${headHtml}<style>.slide{margin:0!important;box-shadow:none!important}</style><section ${
            sec.split('</section>')[0]
          }</section></body></html>`
        );
        chrome([
          `--window-size=${format.shot[0]},${format.shot[1]}`,
          '--hide-scrollbars',
          `--screenshot=${page.replace('.html', '.png')}`,
          `file://${page}`,
        ]);
      });
      console.log(`     ${sections.length} images dans ${shots.replace(`${HERE}/`, '')}`);
    }
  }
}
