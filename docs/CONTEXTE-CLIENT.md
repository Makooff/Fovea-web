# Contexte : Fovea et le groupe aux quatre commerces

Document de reprise. Il sert à démarrer une nouvelle session de travail sans
avoir à tout réexpliquer.

**Lisez la section 6 avant d'agir** : elle sépare ce qui est vérifié de ce qui
est supposé. Une partie de ce document repose sur des hypothèses de travail,
pas sur des faits établis, et le confondre serait la première erreur.

---

## 1. Qui vend : Fovea

Agence de communication, spécialisée dans la publicité en ligne. Elle produit
des vidéos publicitaires et gère les campagnes qui les diffusent. Ce sont deux
métiers, tenus par la même équipe.

| | |
|---|---|
| Nom | Fovea |
| Baseline | « L'agence qui augmente votre chiffre d'affaires » |
| Interlocuteur | Redouane Joti |
| Courriel | redouane.joti@fovea-agency.com |
| Téléphone | +32 492 07 68 37 |
| Marchés | Belgique et France |
| Site | ce dépôt, Next.js 14 App Router + TypeScript + Tailwind |

### Ce que Fovea vend, vérifié dans le code

**Production vidéo publicitaire** (`app/services/page.tsx`, `app/process/page.tsx`)
Tournage chez le client ou en studio, en Belgique comme en France. Direction
artistique, montage, étalonnage, sound design, motion design. Deux rounds de
retours clients inclus. Déclinaisons dans tous les formats livrées à la fin.

**Gestion de campagnes publicitaires** (`app/campagne-ads/page.tsx`)
Meta (Reels, Stories, Carrousels), Google (Search, Display, YouTube,
Performance Max), TikTok (TopView, In-Feed, Spark Ads), LinkedIn (Sponsored
Content, Video Ads, Lead Gen). Paramétrage des audiences, stratégie
d'enchères, allocation de budget, tests A/B des créatifs, reporting mensuel.

**Trois types de créations** (maquettes de packs)
UGC (contenu créé par des créateurs), Vidéo Promotion (Reels et TikTok, format
court conçu pour stopper le scroll), Vidéo Communication (informer la clientèle
d'un changement ou d'une nouveauté).

**Le process en quatre temps** (`app/process/page.tsx`)
Stratégie et brief, tournage, montage et formats, diffusion et suivi.

**Les outils annoncés**
Meta Business Suite, TikTok Ads Manager, Google Ads, Google Analytics 4, Figma,
Suite Adobe, Triple Whale, Notion.

**Les packs** (maquettes validées par le client, reprises dans `docs/DESIGN-SYSTEM.md`)

| Pack | Prix mensuel | Inclus |
|---|---|---|
| Starter | 1 000 € | budget ads jusqu'à 500 €, 1 tournage, 2 scripts, 2 vidéos, gestion ads, 1 réunion |
| Growth | 2 000 € | budget ads jusqu'à 1 000 €, 2 tournages, 4 scripts, 4 vidéos, gestion ads, 1 réunion |
| Scale | 3 000 € | budget ads jusqu'à 2 000 €, 3 tournages, 8 scripts, 8 vidéos, gestion ads, 1 réunion |

**Le partenariat Qwillio** (`app/partenaire/page.tsx`)
Fovea revend des agents IA Qwillio, et Qwillio conçoit des sites web sur mesure
**réservés exclusivement aux clients Fovea**, prestation non disponible sur
Qwillio.com. C'est un vrai différenciateur commercial.

> **Attention.** Redouane a demandé explicitement que les documents destinés à
> ses clients ne parlent **pas** de Qwillio ni de la réceptionniste vocale. Ce
> partenariat existe et peut se mentionner en rendez-vous, mais il ne figure
> pas dans les supports écrits, et il ne doit jamais devenir le sujet.

### Les valeurs affichées (`app/apropos/page.tsx`)

Résultats d'abord (chaque décision créative sert un objectif mesurable),
exécution sans compromis (la qualité ne dépend pas du budget), partenariat réel
(le ROAS du client est l'indicateur de succès de l'agence).

---

## 2. À qui l'on vend : le groupe aux quatre commerces

Un même propriétaire détient quatre commerces sans rapport les uns avec les
autres :

1. **Une concession automobile** (vente, atelier, pièces)
2. **Une pâtisserie en trompe-l'œil** (pièces sur mesure, création)
3. **Un bar**
4. **Une parfumerie**

**C'est tout ce qui est connu de source sûre.** Ni le nom du groupe, ni celui
du dirigeant, ni les enseignes, ni la ville, ni la taille, ni le chiffre
d'affaires, ni ce qu'il fait aujourd'hui en communication.

### L'argument central retenu

Aucun de ces quatre commerces ne justifie à lui seul de recruter un poste
créatif ou marketing en interne. Chacun en aurait pourtant besoin. Et ils ne se
ressemblent en rien : ni le public, ni le ton, ni la saison où ils font leur
chiffre. Un contenu mutualisé ne marcherait pas ; une production suivie, oui.

C'est cet argument qui rend Fovea pertinent pour lui, et pas seulement
compétent.

### Ce qui a été supposé pour chaque commerce

Ces hypothèses ont servi à écrire les documents existants. **Elles sont à
confirmer avec le client**, ce ne sont pas des faits.

| Commerce | Saison retenue | Dépense de visibilité supposée | Valeur d'un client supposée |
|---|---|---|---|
| Concession | mars à mai | 600 € par mois | 900 € de marge sur une vente |
| Pâtisserie | mai et juin, puis fin d'année | 250 € par mois | 120 € de panier sur commande |
| Bar | juin à août | 400 € par mois | 180 € d'addition de groupe |
| Parfumerie | novembre et décembre | 350 € par mois | 85 € de panier moyen |

Trois des quatre jouent gros en fin d'année, et ils ne peuvent pas être filmés
la même semaine : c'est ce qui justifie un calendrier de tournage décidé en
amont, commerce par commerce.

---

## 3. Ce qui existe déjà dans ce dépôt

### La direction artistique, figée

`docs/DESIGN-SYSTEM.md` est la référence. En résumé :

- **Couleurs** : fond `#141519` (`--ink`), accent unique `#E5524A` (`--red`).
  Jamais de couleur en dur, toujours `var(--token)`.
- **Typographie** : Poppins pour tout. 800 pour le logo et les titres,
  400 à 13 px pour le corps, **italique** pour les légendes.
- **Logo** : purement typographique, `FOVEA` en Poppins 800 suivi d'un point
  rouge. Aucun fichier image.
- **Formes** : rayons 999 px, 16 px, 22 px. Bordures 1 px. Halos rouges flous
  en arrière-plan.
- **Mouvement** : une seule courbe, `[0.16, 1, 0.3, 1]`, apparition déclenchée
  une fois au scroll.

`CLAUDE.md` et `.claude/skills/fovea-da/` font que cette DA s'applique
automatiquement à toute demande visuelle, sans avoir à la rappeler.

### La chaîne de documents de vente

`presentations/` produit dix PDF (quatre commerces plus un document de groupe,
en 16:9 et en A4) par `npm run decks`.

- `content.mjs` porte **tout le texte**. C'est le seul fichier à ouvrir pour
  changer un argument.
- `render.mjs` est le gabarit, sans aucune phrase de vente ni aucun montant.
- Les chiffres se **calculent** depuis les hypothèses affichées sur la planche.
- Trois garde-fous arrêtent le build : tiret cadratin, titre à plusieurs mots
  accentués, contenu qui déborderait sous le pied de page.

`presentations/README.md` détaille où changer quoi et pourquoi chaque décision
technique a été prise.

### Le site

Routes publiques : accueil, services, campagne-ads, réalisations, process,
à propos, équipe, partenaire, blog, contact, mentions légales, confidentialité.
`app/(fullscreen)/` échappe au header et au footer.

---

## 4. Les pièges à connaître

**Les chiffres de performance du site se contredisent.**

| Sujet | Valeurs trouvées | Où |
|---|---|---|
| ROAS moyen | 4× / 4,2× / 4,5 | `Stats.tsx`, `StatsBand.tsx`, maquettes packs |
| Clients accompagnés | 85+ / 30+ | `Stats.tsx` et `StatsBand.tsx`, maquettes packs |
| Vidéos produites | 120+ | `Stats.tsx` |

Aucun de ces chiffres n'est imprimable dans une proposition signée tant que
Redouane n'a pas tranché. Un chiffre qui se contredit s'effondre au premier
rendez-vous.

**Les témoignages de `app/campagne-ads/page.tsx` sont du contenu de
remplissage.** « Groupe Belux », « TechStart Brussels », « ModeMarket », avec
des photos de banque d'images (Unsplash). Ce ne sont pas des références
réelles : ne jamais les citer.

**Le partenariat Qwillio ne va pas dans les documents clients.** Voir section 1.

**Le nom du destinataire manque.** Les PDF existants affichent
« Groupe à nommer » en pied de page. Bloc `CLIENT` dans
`presentations/content.mjs`.

---

## 5. Les règles de rédaction retenues

Elles viennent de Redouane et ont été tenues jusqu'ici.

- **Aucune statistique inventée.** Pas de pourcentage sans source, pas d'étude.
  Un calcul présenté comme une illustration à remplir avec les chiffres du
  client vaut mieux qu'un chiffre faux : il se vérifie devant lui au lieu de
  s'effondrer.
- **Les montants se calculent dans le code**, depuis les hypothèses du fichier
  de contenu. Jamais un total écrit à la main.
- **Français avec accents**, y compris sur les majuscules. Espaces insécables
  devant `: ; ? !`, dans les guillemets « », entre un nombre et son unité.
  Elles sont posées par une fonction à la génération, pas à la main.
- **Aucun tiret cadratin.** Virgule, deux-points ou parenthèses.
- **Une idée par planche**, deux lignes de texte maximum. Ce qui impressionne
  n'est pas la densité, ce sont deux ou trois moments visuels forts.
- **Pas quatre cartes identiques côte à côte.** Alterner les mises en page
  d'une planche à l'autre.
- **Un seul mot par titre peut être mis en valeur**, et il doit porter le sens.
- **Écrire comme quelqu'un qui connaît le métier** : « la reprise », « le
  trompe-l'œil demande dix jours », « la salle du fond », « le sillage ».
  Le détail juste vaut dix adjectifs.
- **Aucun prix affiché** dans les documents de vente. Le document vend la
  valeur, le tarif se discute en rendez-vous.

---

## 6. Ce qui est vérifié, et ce qui ne l'est pas

**Vérifié dans le code de ce dépôt** : l'offre de Fovea, son process, ses
plateformes, ses outils, ses packs, ses coordonnées, sa direction artistique,
le partenariat Qwillio, et les contradictions chiffrées de la section 4.

**Donné par Redouane, non vérifié** : l'existence du client et ses quatre
commerces, son adresse électronique, son numéro.

**Supposé par déduction métier, à confirmer** : toutes les saisons du
tableau de la section 2, toutes les dépenses et valeurs client supposées, le
délai de trois semaines entre le brief et la première diffusion, et le fait que
le client ne produise aujourd'hui aucun contenu publicitaire.

**Totalement inconnu** : le nom du groupe et du dirigeant, les enseignes, la
ville, la taille des commerces, leur chiffre d'affaires, ce qu'ils font
aujourd'hui en communication, leur présence en ligne existante, et la
concurrence locale.

---

## 7. Les questions à poser avant d'écrire quoi que ce soit

1. Le nom du groupe, celui du dirigeant, les enseignes, la ville.
2. Que fait-il aujourd'hui en communication, et combien il y dépense
   réellement, commerce par commerce.
3. Ses comptes existants : pages, abonnés, contenus déjà publiés.
4. Lequel de ses quatre commerces souffre le plus, et lequel il veut lancer en
   premier.
5. Quels chiffres de Fovea il est prêt à assumer publiquement, une fois les
   contradictions de la section 4 tranchées.
6. Y a-t-il déjà eu une agence avant, et pourquoi ça s'est arrêté.

---

## 8. Où en est le travail

Branche `claude/design-system-pack-5zv9br`, pull request numéro 1 (brouillon).

| Commit | Contenu |
|---|---|
| `68ab9c9` | la DA est figée et appliquée au site |
| `25aad26` | la page packs est retirée du site, la DA reste en documentation |
| `6c76712` | la chaîne de documents de vente en PDF |
| `afbf27e` | les documents vendent l'offre Fovea, et plus un produit tiers |

Commandes utiles :

```bash
npm run dev        # le site en développement
npm run build      # à faire passer avant tout commit
npm run decks      # régénère les dix PDF de vente
npm run decks:png  # une image par planche, pour relire
```
