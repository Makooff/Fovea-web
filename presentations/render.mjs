/**
 * Le gabarit. Une fonction par type de planche, plus la typographie française.
 *
 * Ce fichier ne contient AUCUN texte de vente : tout vient de content.mjs.
 * Il ne contient pas non plus de montant écrit à la main : les chiffres du
 * manque à gagner se calculent ici, depuis les hypothèses du contenu, pour
 * qu'un total ne puisse jamais contredire les lignes au-dessus.
 */

import { BRAND, CLIENT, COMMON, DOCS, HYPOTHESES } from './content.mjs';

/* -------------------------------------------------------------------------
   Typographie française
   ------------------------------------------------------------------------- */

const NBSP = ' ';

/**
 * Pose les espaces insécables. Appelée à la génération sur chaque chaîne, pour
 * qu'aucun texte de content.mjs n'ait à les porter à la main : une insécable
 * tapée dans une source se perd au premier copier-coller.
 *
 * Couvre la ponctuation haute, les guillemets français, les heures, les
 * nombres et leur unité, et les séparateurs de milliers.
 */
export function fr(text) {
  return String(text)
    .replace(/ ([;:?!])/g, `${NBSP}$1`)
    .replace(/«\s/g, `«${NBSP}`)
    .replace(/\s»/g, `${NBSP}»`)
    .replace(/(\d)\s?h\s?(\d{2})\b/g, `$1${NBSP}h${NBSP}$2`)
    .replace(/(\d) (€|%|h|min|s|j|km|kg|m²)\b/g, `$1${NBSP}$2`)
    .replace(/(\d) (\d{3})\b/g, `$1${NBSP}$2`);
}

/**
 * `toLocaleString` sépare les milliers par une espace fine (U+202F) que
 * certains lecteurs PDF rendent mal. Elle est ramenée à l'insécable ordinaire.
 */
const eur = (n) => `${n.toLocaleString('fr-FR').replace(/ /g, NBSP)}${NBSP}€`;

const nb = (n) => n.toLocaleString('fr-FR').replace(/ /g, NBSP);

/* -------------------------------------------------------------------------
   Le calcul de la dépense de visibilité
   ------------------------------------------------------------------------- */

/**
 * Trois hypothèses fournies par le commerçant, aucune statistique de marché :
 * ce qu'il dépense déjà chaque mois pour se faire voir, le nombre de créatifs
 * réellement testés dans l'année, et ce que vaut un nouveau client.
 *
 * L'argument n'est jamais « dépensez plus » : c'est que cet argent sort déjà
 * et que personne ne sait ce qu'il rapporte.
 */
export function computeCost({ monthlySpend, creatives, value }) {
  const annual = monthlySpend * HYPOTHESES.monthsPerYear;
  return {
    annual,
    perCreative: creatives > 0 ? Math.round(annual / creatives) : null,
    clientsNeeded: Math.round(annual / value),
  };
}

/** Le cumul des quatre commerces, pour la planche d'addition du document de groupe. */
export function computeGroupCost(sectors) {
  const rows = sectors.map((s) => {
    const { annual, clientsNeeded } = computeCost(s.cost);
    return { label: s.label, trade: s.trade, annual, clientsNeeded, monthlySpend: s.cost.monthlySpend };
  });
  return { rows, total: rows.reduce((sum, r) => sum + r.annual, 0) };
}

/* -------------------------------------------------------------------------
   Ossature d'une planche
   ------------------------------------------------------------------------- */

let plateNo = 0;

function slide(kind, inner, { alt = false, dark = false, glow = 'right' } = {}) {
  plateNo += 1;
  /* La planche porte `slide--<kind>`, jamais `<kind>` nu : sinon un nom de
     planche comme `limits` ou `gains` entre en collision avec la classe du
     bloc qu'elle contient, et la grille du bloc s'applique à toute la page. */
  const classes = ['slide', `slide--${kind}`, alt ? 'slide--alt' : '', dark ? 'slide--dark' : '']
    .filter(Boolean)
    .join(' ');
  const glowMark = glow ? `<span class="glow glow--${glow}"></span>` : '';

  return `
<section class="${classes}">
  ${glowMark}
  <header class="slide__head">
    <span class="wordmark">${BRAND.wordmark}<span class="wordmark__dot"></span></span>
    <span class="tiny">${fr(BRAND.baseline)}</span>
  </header>
  <div class="slide__body">${inner}</div>
  <footer class="slide__foot">
    <span>${fr(`${BRAND.name} ${NBSP}·${NBSP} ${CLIENT.name}`)}</span>
    <span>${String(plateNo).padStart(2, '0')}</span>
  </footer>
</section>`;
}

/* -------------------------------------------------------------------------
   Les planches
   ------------------------------------------------------------------------- */

/** 1. Couverture : elle nomme le problème du client, jamais le produit. */
function cover(doc) {
  return slide(
    'cover',
    `
    <p class="cover__client">${fr(doc.coverLabel)}</p>
    <h1>${fr(doc.cover.title)}</h1>
    <p class="lead">${fr(doc.cover.lead)}</p>`,
    { glow: 'corner' }
  );
}

/** 2. Le problème, en quatre moments datés d'une journée ordinaire. */
function pain(doc) {
  const steps = doc.pain.steps
    .map(
      (s) => `
      <li>
        <span class="timeline__mark">${fr(s.mark)}</span>
        <span class="timeline__text">${fr(s.text)}</span>
      </li>`
    )
    .join('');

  return slide(
    'pain',
    `
    <div class="pain__grid">
      <div>
        <span class="eyebrow">${fr(doc.pain.eyebrow)}</span>
        <h2 style="margin:20px 0 16px">${fr(doc.pain.title)}</h2>
        <p class="lead">${fr(doc.pain.lead)}</p>
      </div>
      <ol class="timeline">${steps}</ol>
    </div>`,
    { alt: true, glow: 'corner' }
  );
}

/** 3. Le chiffre. Le calcul est visible, les hypothèses sont celles du client. */
function cost(doc) {
  const { monthlySpend, creatives, value, valueLabel } = doc.cost;
  const { annual, perCreative, clientsNeeded } = computeCost(doc.cost);

  return slide(
    'cost',
    `
    <span class="eyebrow">${fr('Ce que la visibilité vous coûte déjà')}</span>
    <h2 style="margin:18px 0 6px">${fr(doc.cost.title)}</h2>
    <div class="calc">
      <div class="calc__cell">
        <p class="calc__label">${fr('Dépensé chaque mois pour être vu')}</p>
        <p class="calc__value">${eur(monthlySpend)}</p>
        <p class="calc__note">${fr(doc.cost.spendNote)}</p>
      </div>
      <div class="calc__cell">
        <p class="calc__label">${fr("Créatifs testés dans l'année")}</p>
        <p class="calc__value">${creatives}</p>
        <p class="calc__note">${fr(
          creatives > 0
            ? `Soit ${eur(perCreative)} par contenu diffusé, sans comparaison possible.`
            : "Aucun contenu publicitaire produit, donc rien à comparer."
        )}</p>
      </div>
      <div class="calc__cell">
        <p class="calc__label">${fr(valueLabel)}</p>
        <p class="calc__value">${eur(value)}</p>
        <p class="calc__note">${fr(doc.cost.valueNote)}</p>
      </div>
    </div>
    <div class="result">
      <span class="result__value">${eur(annual)}</span>
      <p class="result__text">${fr(
        `C'est ce qui sort déjà de votre trésorerie chaque année pour être vu. ` +
          `Il faudrait ${clientsNeeded} nouveaux clients dans l'année pour que cette dépense se justifie. ` +
          `Personne ne peut vous dire aujourd'hui combien elle en a ramenés.`
      )}</p>
    </div>
    <p class="hypothesis">${fr(
      `Ces trois valeurs sont les vôtres, pas une moyenne de marché : remplacez-les et le total se recalcule. ` +
        `La question n'est pas de dépenser plus, c'est de savoir ce que cette dépense produit.`
    )}</p>`
  );
}

/** 4. Le produit. Une seule planche, sur un fond qui marque la rupture. */
function product() {
  const cols = COMMON.product.columns
    .map((c) => `<div class="product__col"><h3>${fr(c.title)}</h3><p>${fr(c.text)}</p></div>`)
    .join('');

  return slide(
    'product',
    `
    <span class="eyebrow eyebrow--accent">${fr(COMMON.product.eyebrow)}</span>
    <h1>${fr(COMMON.product.title)}</h1>
    <p class="lead" style="margin-bottom:34px">${fr(COMMON.product.lead)}</p>
    <div class="product__cols">${cols}</div>`,
    { dark: true, glow: null }
  );
}

/** 5. La démonstration : une campagne jouée de bout en bout, mécaniques annotées. */
function campaign(doc) {
  const steps = doc.campaign.steps
    .map(
      (st) => `
      <div class="step${st.note ? ' step--marked' : ''}">
        <span class="step__mark">${fr(st.mark)}</span>
        <span class="step__text">${fr(st.text)}</span>
        ${
          st.note
            ? `<span class="line__note"><span class="note__tag">${fr('La mécanique')}</span>${fr(st.note)}</span>`
            : ''
        }
      </div>`
    )
    .join('');

  const notes = doc.campaign.steps
    .filter((st) => st.note)
    .map(
      (st) =>
        `<div><span class="note__tag">${fr(st.mark)}</span><p class="note__text">${fr(st.note)}</p></div>`
    )
    .join('');

  return slide(
    'campaign',
    `
    <span class="eyebrow">${fr(doc.campaign.eyebrow)}</span>
    <h2 style="margin:16px 0 20px">${fr(doc.campaign.title)}</h2>
    <div class="call__grid">
      <div class="dialogue">${steps}</div>
      <div class="notes">${notes}</div>
    </div>`,
    { alt: true, glow: 'corner' }
  );
}

/** 6. Ce qui ne se fait pas seul. Quadrant séparé par des filets. */
function during(doc) {
  const cells = doc.during.items
    .map(
      (it, i) => `
      <div class="quad__cell">
        <p class="quad__num">${String(i + 1).padStart(2, '0')}</p>
        <h3>${fr(it.title)}</h3>
        <p>${fr(it.text)}</p>
      </div>`
    )
    .join('');

  return slide(
    'during',
    `
    <span class="eyebrow">${fr(doc.during.eyebrow)}</span>
    <h2 style="margin:16px 0 20px">${fr(doc.during.title)}</h2>
    <div class="quad">${cells}</div>`
  );
}

/** 7. Ce qui la rend crédible au téléphone. Bento asymétrique. */
function natural() {
  /* Quatre blocs, trois zones : un bloc haut à gauche, deux en haut à droite,
     un qui court sous les deux. C'est ce qui évite quatre cartes identiques
     côte à côte, et ce qui ne laisse aucune case vide. */
  const [first, ...rest] = COMMON.natural.blocks;
  const zones = ['bento__a', 'bento__b', 'bento__c'];
  const tail = rest
    .map((b, i) => `<div class="card ${zones[i]}"><h3>${fr(b.title)}</h3><p>${fr(b.text)}</p></div>`)
    .join('');

  return slide(
    'natural',
    `
    <span class="eyebrow">${fr(COMMON.natural.eyebrow)}</span>
    <h2 style="margin:16px 0 20px">${fr(COMMON.natural.title)}</h2>
    <div class="bento">
      <div class="card card--accent bento__wide">
        <h3>${fr(first.title)}</h3>
        <p>${fr(first.text)}</p>
      </div>
      ${tail}
    </div>`,
    { alt: true }
  );
}

/** 8. Ce que ça change pour ce métier. Quatre gains, en liste numérotée large. */
function gains(doc) {
  const items = doc.gains.items
    .map(
      (g, i) => `
      <li>
        <span class="gains__num">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${fr(g.title)}</h3><p>${fr(g.text)}</p></div>
      </li>`
    )
    .join('');

  return slide(
    'gains',
    `
    <span class="eyebrow">${fr(doc.gains.eyebrow)}</span>
    <h2 style="margin:16px 0 20px">${fr(doc.gains.title)}</h2>
    <ul class="gains">${items}</ul>`
  );
}

/** 9. Ce qui se passe après : ce que vous récupérez. */
function record(doc) {
  const items = COMMON.record.items.map((it) => `<li>${fr(it)}</li>`).join('');

  return slide(
    'record',
    `
    <span class="eyebrow">${fr(COMMON.record.eyebrow)}</span>
    <h2 style="margin:16px 0 22px">${fr(COMMON.record.title)}</h2>
    <div class="record__grid">
      <div>
        <p class="lead" style="margin-bottom:16px">${fr(doc.recordLead)}</p>
        <p class="caption">${fr(COMMON.record.caption)}</p>
      </div>
      <div class="panel"><ul class="dashes">${items}</ul></div>
    </div>`,
    { alt: true, glow: 'corner' }
  );
}

/** 10. La mise en route : trois étapes en escalier, et le délai réel. */
function setup() {
  const steps = COMMON.setup.steps
    .map(
      (s, i) => `
      <div class="stairs__step">
        <span class="stairs__num">${i + 1}</span>
        <h3>${fr(s.title)}</h3>
        <p>${fr(s.text)}</p>
      </div>`
    )
    .join('');

  return slide(
    'setup',
    `
    <span class="eyebrow">${fr(COMMON.setup.eyebrow)}</span>
    <h2 style="margin:16px 0 10px">${fr(COMMON.setup.title)}</h2>
    <div class="stairs">${steps}</div>
    <p class="delay">${fr(COMMON.setup.delay)}</p>`
  );
}

/** 11. Ce que nous ne promettons pas. La planche qui fait gagner la confiance. */
function limits(block = COMMON.limits) {
  const items = block.items
    .map((l) => `<div class="limit"><h3>${fr(l.title)}</h3><p>${fr(l.text)}</p></div>`)
    .join('');

  return slide(
    'limits',
    `
    <span class="eyebrow eyebrow--accent">${fr(block.eyebrow)}</span>
    <h2 style="margin:16px 0 8px">${fr(block.title)}</h2>
    <p class="lead" style="margin-bottom:22px">${fr(block.lead)}</p>
    <div class="limits">${items}</div>`,
    { alt: true }
  );
}

/** 12. Prochaine étape et coordonnées. */
function close(doc) {
  return slide(
    'close',
    `
    <span class="eyebrow">${fr(doc.close?.eyebrow ?? COMMON.close.eyebrow)}</span>
    <h1>${fr(doc.closeTitle)}</h1>
    <p class="lead" style="margin-bottom:26px">${fr(doc.closeLine)}</p>
    <div class="contacts">
      <span class="pill pill--solid">${fr(doc.close?.cta ?? COMMON.close.cta)}</span>
      <span class="pill">${BRAND.phone}</span>
      <span class="pill">${BRAND.email}</span>
    </div>`,
    { glow: 'corner' }
  );
}

/* --- Planches propres au document de groupe ------------------------------ */

/**
 * Pourquoi les quatre ne se ressemblent pas : une voie par commerce, la barre
 * marque la fenêtre où le téléphone sonne le plus. C'est l'argument central du
 * document de groupe rendu visible plutôt qu'écrit.
 */
/**
 * Rend une frise à voies. L'axe vient du contenu et non des hypothèses : la
 * même mécanique sert les mois de l'année pour le document de groupe et les
 * heures d'une soirée pour la présentation de pré-tournage.
 */
function lanes({ eyebrow, title, lead, note, lanes: rows, axis, ticks }) {
  const { from, to } = axis;
  const span = to - from;
  const pct = (v) => ((v - from) / span) * 100;

  const bars = rows
    .map(
      (l) => `
      <div class="lane">
        <div>
          <span class="lane__name">${fr(l.name)}</span>
          <span class="lane__trade">${fr(l.trade)}</span>
        </div>
        <div class="lane__bar">
          <span class="lane__peak" style="left:${pct(l.peakFrom).toFixed(1)}%;width:${(
            pct(l.peakTo) - pct(l.peakFrom)
          ).toFixed(1)}%">${fr(l.peakLabel)}</span>
        </div>
      </div>`
    )
    .join('');

  const scale = ticks.map((t) => `<span>${fr(t)}</span>`).join('');

  return slide(
    'contrast',
    `
    <span class="eyebrow">${fr(eyebrow)}</span>
    <h2 style="margin:16px 0 8px">${fr(title)}</h2>
    <p class="lead" style="margin-bottom:12px">${fr(lead)}</p>
    <div class="lanes">${bars}</div>
    <div class="lanes__scale"><span></span><div class="lanes__ticks">${scale}</div></div>
    ${note ? `<p class="hypothesis">${fr(note)}</p>` : ''}`,
    { alt: true }
  );
}

/** La frise saisonnière du document de groupe, sur l'axe des mois. */
function contrast(doc) {
  return lanes({
    ...doc.contrast,
    axis: HYPOTHESES.monthAxis,
    ticks: HYPOTHESES.monthTicks,
  });
}

/** L'addition des quatre. Chaque ligne vient du calcul de son propre document. */
function groupCost(doc, sectors) {
  const { rows, total } = computeGroupCost(sectors);

  const lines = rows
    .map(
      (r) => `
      <li class="sum__row">
        <div>
          <h3>${fr(r.label)}</h3>
          <p>${fr(`${eur(r.monthlySpend)} par mois, soit ${r.clientsNeeded} clients à ramener dans l'année.`)}</p>
        </div>
        <span class="sum__amount">${eur(r.annual)}</span>
      </li>`
    )
    .join('');

  return slide(
    'cost',
    `
    <span class="eyebrow">${fr('Les quatre, additionnés')}</span>
    <h2 style="margin:16px 0 18px">${fr(doc.groupCost.title)}</h2>
    <ul class="sum">${lines}</ul>
    <div class="result" style="margin-top:16px">
      <span class="result__value">${eur(total)}</span>
      <p class="result__text">${fr(doc.groupCost.text)}</p>
    </div>
    <p class="hypothesis">${fr(
      `Chaque ligne reprend les hypothèses de la fiche du commerce concerné. ` +
        `Changez-en une, le total suit : il est calculé, pas recopié.`
    )}</p>`
  );
}

/* --- Planches propres à la présentation de pré-tournage ------------------ */

/** État des lieux : ce qui existe déjà en ligne, sourcé et daté. */
function audit(doc) {
  const rows = doc.audit.rows
    .map(
      (r) => `
      <li class="sum__row">
        <div>
          <h3>${fr(r.name)}</h3>
          <p>${fr(r.detail)}</p>
        </div>
        <span class="sum__amount${r.gap ? ' sum__amount--gap' : ''}">${fr(r.figure)}</span>
      </li>`
    )
    .join('');

  return slide(
    'audit',
    `
    <span class="eyebrow">${fr(doc.audit.eyebrow)}</span>
    <h2 style="margin:16px 0 14px">${fr(doc.audit.title)}</h2>
    <ul class="sum">${rows}</ul>
    <p class="hypothesis">${fr(doc.audit.source)}</p>`,
    { alt: true }
  );
}

/** Ce que l'after movie doit produire ici. Planche de rupture, sans chiffre promis. */
function intent(doc) {
  const cols = doc.intent.columns
    .map((c) => `<div class="product__col"><h3>${fr(c.title)}</h3><p>${fr(c.text)}</p></div>`)
    .join('');

  return slide(
    'product',
    `
    <span class="eyebrow eyebrow--accent">${fr(doc.intent.eyebrow)}</span>
    <h1>${fr(doc.intent.title)}</h1>
    <p class="lead" style="margin-bottom:34px">${fr(doc.intent.lead)}</p>
    <div class="product__cols">${cols}</div>`,
    { dark: true, glow: null }
  );
}

/**
 * Les trois directions côte à côte. Chacune porte une vignette rendue en CSS :
 * le dépôt n'a aucune règle d'image, et emprunter des vignettes de vidéos
 * tierces poserait une question de droits. La vignette traduit le parti pris
 * (dominante, contraste, grain) plutôt que de le décrire.
 */
function directions(doc) {
  const cells = doc.directions
    .map(
      (d, i) => `
      <div class="dir">
        <span class="dir__swatch dir__swatch--${d.swatch}"></span>
        <p class="dir__num">${fr(d.crowd)}</p>
        <h3>${fr(d.name)}</h3>
        <p class="dir__tone">${fr(d.tone)}</p>
        <p class="dir__line">${fr(d.line)}</p>
      </div>`
    )
    .join('');

  return slide(
    'directions',
    `
    <span class="eyebrow">${fr(doc.directionsIntro.eyebrow)}</span>
    <h2 style="margin:16px 0 10px">${fr(doc.directionsIntro.title)}</h2>
    <p class="lead" style="margin-bottom:20px">${fr(doc.directionsIntro.lead)}</p>
    <div class="dirs">${cells}</div>`
  );
}

/** Une direction développée : signature, ce qu'on filme, ce qu'elle exige. */
function direction(doc, index) {
  const d = doc.directions[index];

  const asks = d.asks.map((a) => `<li>${fr(a)}</li>`).join('');
  const beats = d.beats
    .map(
      (b) => `
      <div class="step">
        <span class="step__mark">${fr(b.mark)}</span>
        <span class="step__text">${fr(b.text)}</span>
      </div>`
    )
    .join('');

  return slide(
    'direction',
    `
    <span class="eyebrow">${fr(`${d.when} ${NBSP}·${NBSP} ${d.crowd}`)}</span>
    <h2 style="margin:16px 0 6px">${fr(d.title)}</h2>
    <p class="lead" style="margin-bottom:18px">${fr(d.lead)}</p>
    <div class="dir__grid">
      <div>
        <span class="dir__swatch dir__swatch--${d.swatch} dir__swatch--tall"></span>
        <p class="caption" style="margin-top:10px">${fr(d.mood)}</p>
      </div>
      <div class="dialogue">${beats}</div>
      <div class="panel">
        <p class="note__tag">${fr('Ce que ce style exige')}</p>
        <ul class="dashes" style="margin-top:10px">${asks}</ul>
      </div>
    </div>`,
    { alt: index % 2 === 1 }
  );
}

/** Le son : d'abord le cadre des droits, ensuite une sélection de départ. */
function sound(doc) {
  const rules = doc.sound.rules
    .map((r) => `<div class="limit"><h3>${fr(r.title)}</h3><p>${fr(r.text)}</p></div>`)
    .join('');

  return slide(
    'sound',
    `
    <span class="eyebrow eyebrow--accent">${fr(doc.sound.eyebrow)}</span>
    <h2 style="margin:16px 0 8px">${fr(doc.sound.title)}</h2>
    <p class="lead" style="margin-bottom:20px">${fr(doc.sound.lead)}</p>
    <div class="limits">${rules}</div>
    <p class="hypothesis">${fr(doc.sound.source)}</p>`,
    { alt: true }
  );
}

/** Les pistes proposées, avec leur statut de droits et la date du relevé. */
function tracks(doc) {
  const rows = doc.tracks.rows
    .map(
      (t) => `
      <li class="sum__row">
        <div>
          <h3>${fr(t.name)}</h3>
          <p>${fr(t.detail)}</p>
        </div>
        <span class="sum__amount sum__amount--tag">${fr(t.status)}</span>
      </li>`
    )
    .join('');

  return slide(
    'tracks',
    `
    <span class="eyebrow">${fr(doc.tracks.eyebrow)}</span>
    <h2 style="margin:16px 0 12px">${fr(doc.tracks.title)}</h2>
    <ul class="sum">${rows}</ul>
    <p class="hypothesis">${fr(doc.tracks.note)}</p>`
  );
}

/** Le logo : ce qu'on ne touche pas, ce qu'on remet d'aplomb. */
function logo(doc) {
  const keep = doc.logo.keep.map((k) => `<li>${fr(k)}</li>`).join('');
  const fix = doc.logo.fix.map((f) => `<li>${fr(f)}</li>`).join('');

  return slide(
    'logo',
    `
    <span class="eyebrow">${fr(doc.logo.eyebrow)}</span>
    <h2 style="margin:16px 0 8px">${fr(doc.logo.title)}</h2>
    <p class="lead" style="margin-bottom:20px">${fr(doc.logo.lead)}</p>
    <div class="record__grid">
      <div class="panel">
        <p class="note__tag">${fr("Ce à quoi nous ne touchons pas")}</p>
        <ul class="dashes" style="margin-top:10px">${keep}</ul>
      </div>
      <div class="panel">
        <p class="note__tag">${fr('Ce que nous remettons d\'aplomb')}</p>
        <ul class="dashes" style="margin-top:10px">${fix}</ul>
      </div>
    </div>
    <p class="hypothesis">${fr(doc.logo.blocker)}</p>`,
    { alt: true }
  );
}

/** Trois concepts d'animation du logo, en escalier. */
function logoMotion(doc) {
  const steps = doc.logoMotion.concepts
    .map(
      (c, i) => `
      <div class="stairs__step">
        <span class="stairs__num">${i + 1}</span>
        <h3>${fr(c.title)}</h3>
        <p>${fr(c.text)}</p>
      </div>`
    )
    .join('');

  return slide(
    'logomotion',
    `
    <span class="eyebrow">${fr(doc.logoMotion.eyebrow)}</span>
    <h2 style="margin:16px 0 10px">${fr(doc.logoMotion.title)}</h2>
    <div class="stairs">${steps}</div>
    <p class="delay">${fr(doc.logoMotion.note)}</p>`
  );
}

/** Le plan de tournage du soir, sur l'axe des heures. */
function shootPlan(doc) {
  return lanes({ ...doc.shootPlan, axis: doc.shootPlan.axis, ticks: doc.shootPlan.ticks });
}

/** Ce qu'il faut de la part du client pour que la soirée soit tournable. */
function needs(doc) {
  const items = doc.needs.items.map((n) => `<li>${fr(n)}</li>`).join('');

  return slide(
    'needs',
    `
    <span class="eyebrow eyebrow--accent">${fr(doc.needs.eyebrow)}</span>
    <h2 style="margin:16px 0 8px">${fr(doc.needs.title)}</h2>
    <div class="record__grid">
      <div>
        <p class="lead" style="margin-bottom:14px">${fr(doc.needs.lead)}</p>
        <p class="caption">${fr(doc.needs.caption)}</p>
      </div>
      <div class="panel"><ul class="dashes">${items}</ul></div>
    </div>`
  );
}

/** Les livrables et le calendrier, datés depuis la soirée. */
function delivery(doc) {
  const items = doc.delivery.items
    .map(
      (d) => `
      <li class="sum__row">
        <div>
          <h3>${fr(d.name)}</h3>
          <p>${fr(d.detail)}</p>
        </div>
        <span class="sum__amount sum__amount--tag">${fr(d.when)}</span>
      </li>`
    )
    .join('');

  return slide(
    'delivery',
    `
    <span class="eyebrow">${fr(doc.delivery.eyebrow)}</span>
    <h2 style="margin:16px 0 12px">${fr(doc.delivery.title)}</h2>
    <ul class="sum">${items}</ul>
    <p class="hypothesis">${fr(doc.delivery.note)}</p>`,
    { alt: true }
  );
}

/** Les questions ouvertes, celles auxquelles le rendez-vous doit répondre. */
function questions(doc) {
  const items = doc.questions.items
    .map(
      (q, i) => `
      <li>
        <span class="gains__num">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${fr(q.title)}</h3><p>${fr(q.text)}</p></div>
      </li>`
    )
    .join('');

  return slide(
    'questions',
    `
    <span class="eyebrow">${fr(doc.questions.eyebrow)}</span>
    <h2 style="margin:16px 0 16px">${fr(doc.questions.title)}</h2>
    <ul class="gains">${items}</ul>`
  );
}

/* -------------------------------------------------------------------------
   Assemblage
   ------------------------------------------------------------------------- */

/**
 * Douze planches pour un commerce, quatorze pour le groupe. Une idée par
 * planche, et jamais deux mises en page identiques à la suite.
 */
export function renderDeck(doc, { cssHref, sectors }) {
  plateNo = 0;

  /**
   * L'ordre des planches, par type de document. Une table plutôt qu'un
   * ternaire : un `kind` inconnu doit échouer en le disant, pas retomber
   * silencieusement dans la mise en page d'un autre type.
   */
  const ORDERS = {
    sector: () => [
      cover(doc),
      pain(doc),
      cost(doc),
      product(),
      campaign(doc),
      during(doc),
      natural(),
      gains(doc),
      record(doc),
      setup(),
      limits(),
      close(doc),
    ],

    group: () => [
      cover(doc),
      pain(doc),
      contrast(doc),
      groupCost(doc, sectors),
      product(),
      campaign(doc),
      during(doc),
      natural(),
      gains(doc),
      record(doc),
      setup(),
      limits(),
      close(doc),
    ],

    /* La présentation de pré-tournage : elle propose des choix au lieu
       d'affirmer des résultats, donc elle ne partage presque aucune planche
       avec les documents de vente. */
    shoot: () => [
      cover(doc),
      audit(doc),
      intent(doc),
      directions(doc),
      ...doc.directions.map((_, i) => direction(doc, i)),
      sound(doc),
      tracks(doc),
      logo(doc),
      logoMotion(doc),
      shootPlan(doc),
      needs(doc),
      delivery(doc),
      limits(doc.limits),
      questions(doc),
      close(doc),
    ],
  };

  const order = ORDERS[doc.kind];
  if (!order) {
    throw new Error(
      `Document « ${doc.slug} » : type « ${doc.kind} » inconnu. ` +
        `Types disponibles : ${Object.keys(ORDERS).join(', ')}.`
    );
  }

  const plates = order();

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>${fr(`${BRAND.name} : ${doc.label}`)}</title>
<link rel="stylesheet" href="${cssHref}">
</head>
<body>${plates.join('\n')}
</body>
</html>`;
}

export { DOCS };
