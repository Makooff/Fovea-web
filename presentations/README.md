# Documents client

Trois types de documents, dans la direction artistique Fovea
(`docs/DESIGN-SYSTEM.md`) et dans deux formats.

| Type (`kind`) | Documents | Contenu |
|---|---|---|
| `sector` | un par commerce | `content.mjs` |
| `group` | le document de groupe | `content.mjs` |
| `shoot` | la présentation de pré-tournage du J'adore | `content-jadore.mjs` |

Les deux premiers **vendent l'offre Fovea**. Le troisième ne vend rien : c'est
un document de pré-production qui sert à découvrir ce que le client aime avant
de tourner. Il propose des choix au lieu d'affirmer des résultats, donc il ne
partage presque aucune planche avec les autres.

| Format | Fichier | Pour quoi |
|---|---|---|
| 16:9 | `pdf/fovea-<slug>.pdf` | À projeter, à dérouler à l'écran, à envoyer en pièce jointe |
| A4 portrait | `pdf/fovea-<slug>-a4.pdf` | À imprimer, à laisser sur un bureau, à joindre à un devis |

```bash
npm run decks                              # les dix PDF, dans presentations/pdf/
npm run decks:png                          # en plus, une image par planche, pour relire
node presentations/build.mjs bar           # un seul document, les deux formats
node presentations/build.mjs --a4          # un seul format
node presentations/build.mjs --16-9 groupe # un document, un format
npm run decks:fonts                        # régénère la police embarquée
```

Le dossier `build/` est jetable (il est ignoré par git) : il ne contient que le
HTML intermédiaire et les images de relecture.

---

## À remplir avant le premier envoi

Le document est **nominatif**. Ouvrez `content.mjs` et renseignez le bloc
`CLIENT` en haut du fichier :

```js
export const CLIENT = {
  name: 'Groupe à nommer',   // apparaît en pied de chaque planche
  contact: 'Nom du dirigeant',
  city: 'Bruxelles',
};
```

Puis, si les enseignes ont des noms propres, remplacez les `label` et
`coverLabel` de chaque commerce dans `SECTORS`. Relancez `npm run decks` : les
dix PDF se réécrivent.

---

## Où changer quoi

| Vous voulez changer | Ouvrez |
|---|---|
| Un argument, une phrase, un titre | `content.mjs` |
| Un chiffre du calcul de la dépense de visibilité | `content.mjs`, bloc `cost` du commerce |
| Les saisons de la frise du groupe | `content.mjs`, `GROUP.contrast.lanes` |
| Les coordonnées, la signature | `content.mjs`, bloc `BRAND` |
| Les limites annoncées | `content.mjs`, `COMMON.limits` |
| La mise en page 16:9 | `assets/deck.css` |
| La mise en page A4 | `assets/deck-a4.css` |
| L'ordre ou le choix des planches | `render.mjs`, fonction `renderDeck` |

`render.mjs` ne contient **aucune phrase de vente et aucun montant**. Si vous y
cherchez un texte, c'est qu'il est dans `content.mjs`.

---

## Ce qu'il y a dans un document

Ces documents vendent **l'offre Fovea** : production vidéo publicitaire et
gestion de campagnes Ads. Rien d'autre.

Douze planches par commerce, treize pour le groupe, toujours dans le même
ordre : couverture, le problème en quatre moments datés du métier, ce que la
visibilité coûte déjà, ce que fait Fovea, une campagne jouée de bout en bout,
ce qui ne se fait pas seul, ce qui nous distingue, ce que ça change pour ce
métier, ce qui vous reste, la mise en route, ce que nous ne promettons pas, la
prochaine étape.

Le document de groupe insère deux planches et remplace le calcul par
l'addition des quatre : **pourquoi les quatre commerces ne jouent pas leur
année aux mêmes mois** (une frise saisonnière à quatre voies) et **les quatre
budgets de visibilité additionnés**.

Cinq planches sur douze portent un contenu commun (ce que fait Fovea, ce qui
nous distingue, ce qui vous reste, la mise en route, les limites). Les sept
autres sont écrites commerce par commerce : c'est là que se joue la différence
entre une plaquette et une proposition.

---

## Ajouter un cinquième commerce

1. Copiez l'objet du **bar** dans `SECTORS` (`content.mjs`), c'est le plus court.
2. Changez `slug`, `label`, `trade`, `coverLabel`, puis réécrivez `cover`,
   `pain`, `cost`, `campaign`, `during`, `gains`, `recordLead`, `closeTitle`
   et `closeLine`.
3. Ajoutez sa voie dans `GROUP.contrast.lanes` (`name`, `trade`, `peakFrom`,
   `peakTo`, `peakLabel`, en numéros de mois de 1 à 13), sinon la frise du
   document de groupe ne le montrera pas.
4. `npm run decks`. Le nouveau document sort, et l'addition du groupe se
   recalcule toute seule.

`<i>` autour d'un mot d'un titre le passe en italique rouge de marque. Un seul
par titre : le build refuse d'aller plus loin.

---

## Ajouter un document d'un type nouveau

L'ordre des planches est une **table de correspondance** dans `renderDeck`
(`render.mjs`), pas un ternaire : un `kind` inconnu lève une erreur qui le
nomme, au lieu de retomber dans la mise en page d'un autre type et de planter
plus loin.

Pour ajouter un type :

1. Un fichier de contenu par document, avec un `kind` neuf.
2. Les fonctions de planche dans `render.mjs`, avant `renderDeck`. Convention
   du fichier : une planche qui lit `COMMON` ne prend pas d'argument, une
   planche propre à un document prend `doc`.
3. Une entrée dans `ORDERS`, et le document ajouté à `ALL` dans `build.mjs`.

Les formats et les trois garde-fous sont agnostiques du type : rien d'autre à
toucher.

### Les blocs réutilisables

`lanes()` rend une frise à voies dont l'axe vient du contenu : elle sert les
mois de l'année pour le document de groupe et les heures d'une soirée pour la
présentation de pré-tournage. `limits()` et `close()` acceptent un bloc pour
que chaque document dise ses propres limites.

### Les vignettes de direction créative

Le dépôt n'a **aucune règle CSS d'image**, et emprunter la vignette d'une vidéo
tierce poserait une question de droits. Les trois directions de la présentation
de pré-tournage sont donc rendues en CSS pur (`.dir__swatch--hard`, `--warm`,
`--raw`).

Elles varient par la **lumière et la matière**, jamais par la teinte : la
charte n'admet qu'un seul accent, donc figurer un look vidéo avec un cyan ou un
magenta la casserait à l'écran. Contraste, grain et vignettage suffisent à
distinguer trois partis pris.

---

## Les décisions, et pourquoi

**Le contenu est séparé du gabarit.** Un fichier de données, un fichier de
rendu. C'est ce qui permet de corriger un argument sans toucher à une ligne de
mise en page, et de relire les arguments d'affilée sans les chercher au milieu
du HTML.

**Les montants se calculent, ils ne se recopient pas.** `computeCost()` dérive
la dépense annuelle, le coût par créatif testé et le nombre de clients à
ramener, depuis trois hypothèses affichées sur la planche. L'addition du
document de groupe additionne les quatre résultats. Un total écrit à la main
finirait par contredire les lignes au-dessus le jour où l'un des chiffres
bouge.

**L'argument n'est jamais « dépensez plus ».** Le calcul part de ce que le
commerçant dépense DÉJÀ pour être vu (posts boostés, flyers, presse locale) et
du nombre de créatifs qu'il a réellement testés. La conclusion n'est pas qu'il
manque un budget, c'est que celui qui sort n'est pas mesuré.

**Aucune statistique de marché, et aucun chiffre de performance.** Le calcul
est une illustration à remplir avec les chiffres du client, jamais une étude.
Les chiffres de performance affichés sur le site (ROAS, nombre de clients) se
contredisent d'un fichier à l'autre : `Stats.tsx` annonce 4×, `StatsBand.tsx`
4,2×, les maquettes de packs 4,5, et le nombre de clients passe de 85 à 30
selon la source. Aucun n'est imprimable dans une proposition signée, donc
aucun n'y figure.

**Les jetons de la charte sont recopiés, pas importés.** `app/globals.css` est
écrit pour Tailwind et pour un build ; un PDF doit se rendre sans outil. Si une
couleur bouge dans la DA, elle bouge aussi dans `assets/deck.css`, et nulle
part ailleurs.

**La police est embarquée en base64.** Un `@import` vers Google Fonts
marcherait le jour du build et laisserait un fichier qui dépend du réseau.
Poppins est dans le CSS, en romaine et en italique, dans les deux jeux latins
(latin et latin-ext) : sans le second, un mot accentué retomberait sur une
police de secours, et ça se voit. Le devanagari, que Poppins embarque aussi,
est écarté : il doublerait le poids du fichier pour rien.

**L'italique est une vraie italique.** Poppins en possède une dessinée, elle est
embarquée. Le navigateur n'a donc jamais à incliner une romaine, ce qui se
verrait à l'impression.

**Un contenu, deux compositions.** Le même HTML sert aux deux formats, seule la
feuille change. Ce n'est pas une mise à l'échelle : en A4 la largeur utile
tombe de 1 152 à 698 px, donc chaque paire de colonnes devient une pile,
l'escalier de la mise en route se décale au lieu de descendre, la colonne
d'annotations de l'appel passe sous chaque réplique, et le corps remonte d'un
cran parce qu'une page A4 se lit de près. La couverture change d'ancrage :
calée en bas dans les deux cas, mais plus resserrée en portrait.

**Les planches portent `slide--<nom>`, jamais `<nom>` nu.** Une planche nommée
`limits` entrait en collision avec la classe `.limits` du bloc qu'elle contient,
et la grille du bloc s'appliquait à la page entière. Le préfixe supprime cette
famille de bug.

**296.7mm et pas 297.** Chromium arrondit, et une planche pile à la hauteur de
page déborde sur une page blanche.

**Aucun prix.** Choix commercial : le document vend le résultat, le tarif se
discute en rendez-vous.

**Aucun tiret cadratin.** Virgule, deux-points ou parenthèses. Le build refuse
de générer s'il en réapparaît un.

**Les espaces insécables sont posées à la génération.** La fonction `fr()` de
`render.mjs` les place devant la ponctuation haute, dans les guillemets
français, entre un nombre et son unité et dans les heures. Une insécable tapée
à la main dans une source se perd au premier copier-coller.

---

## Les trois garde-fous du build

Le build s'arrête plutôt que de livrer un PDF douteux.

1. **Tiret cadratin.** Aucun `—` ni `–` ne passe.
2. **Un seul mot accentué par titre.** Un `<h1>` ou `<h2>` portant deux `<i>`
   arrête la génération.
3. **Débordement.** Le document est réimprimé une seconde fois avec les
   planches débridées (hauteur libre, halos masqués). Ce qui dépassait crée
   alors une page de plus, et le compte le dit. C'est le seul moyen de voir un
   débordement que `overflow: hidden` rendrait invisible, et qui se ferait
   pourtant rogner sous le pied de page.

Ces trois contrôles tournent sur les dix documents à chaque `npm run decks`.
