# Documents de vente

Un PDF par commerce, plus un document de groupe, dans la direction artistique
Fovea (`docs/DESIGN-SYSTEM.md`) et dans deux formats.

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
| Un chiffre du calcul du manque à gagner | `content.mjs`, bloc `cost` du commerce |
| Le nombre de semaines d'activité retenu | `content.mjs`, `HYPOTHESES.weeksPerYear` |
| Les coordonnées, la signature | `content.mjs`, bloc `BRAND` |
| Les limites annoncées | `content.mjs`, `COMMON.limits` |
| La mise en page 16:9 | `assets/deck.css` |
| La mise en page A4 | `assets/deck-a4.css` |
| L'ordre ou le choix des planches | `render.mjs`, fonction `renderDeck` |

`render.mjs` ne contient **aucune phrase de vente et aucun montant**. Si vous y
cherchez un texte, c'est qu'il est dans `content.mjs`.

---

## Ce qu'il y a dans un document

Douze planches par commerce, treize pour le groupe, toujours dans le même
ordre : couverture, le problème en quatre moments datés, le calcul du manque à
gagner, ce que nous installons, un appel joué de bout en bout, ce qu'elle fait
pendant l'appel, ce qui la rend crédible au téléphone, ce que ça change pour ce
métier, ce que vous récupérez après, la mise en route, ce que nous ne
promettons pas, la prochaine étape.

Le document de groupe insère deux planches en plus et remplace le calcul par
l'addition des quatre : **pourquoi les quatre téléphones ne sonnent pas aux
mêmes heures** (une frise à quatre voies) et **les quatre manques à gagner
additionnés**.

Cinq planches sur douze portent un contenu commun (le produit, la crédibilité,
ce qui reste, la mise en route, les limites). Les sept autres sont écrites
commerce par commerce : c'est là que se joue la différence entre une plaquette
et une proposition.

---

## Ajouter un cinquième commerce

1. Copiez l'objet du **bar** dans `SECTORS` (`content.mjs`), c'est le plus court.
2. Changez `slug`, `label`, `trade`, `coverLabel`, puis réécrivez `cover`,
   `pain`, `cost`, `call`, `during`, `gains`, `recordLead`, `closeTitle` et
   `closeLine`.
3. Ajoutez sa voie dans `GROUP.contrast.lanes` (`name`, `trade`, `peakFrom`,
   `peakTo`, `peakLabel`), sinon la frise du document de groupe ne le montrera
   pas.
4. `npm run decks`. Le nouveau document sort, et l'addition du groupe se
   recalcule toute seule.

`<i>` autour d'un mot d'un titre le passe en italique rouge de marque. Un seul
par titre : le build refuse d'aller plus loin.

---

## Les décisions, et pourquoi

**Le contenu est séparé du gabarit.** Un fichier de données, un fichier de
rendu. C'est ce qui permet de corriger un argument sans toucher à une ligne de
mise en page, et de relire les arguments d'affilée sans les chercher au milieu
du HTML.

**Les montants se calculent, ils ne se recopient pas.** `computeCost()` dérive
les occasions perdues et le total depuis trois hypothèses affichées sur la
planche. L'addition du document de groupe additionne les quatre résultats. Un
total écrit à la main finirait par contredire les lignes au-dessus le jour où
l'un des chiffres bouge.

**Aucune statistique de marché.** Le calcul est présenté comme une illustration
à remplir avec les chiffres du client, jamais comme une étude. Une source
inventée se retourne contre vous au premier rendez-vous. Les hypothèses sont
volontairement basses (48 semaines d'activité, pas 52) : une hypothèse basse se
défend, une hypothèse haute se conteste.

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
