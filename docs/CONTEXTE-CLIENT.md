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

## 2. Le client : Salim, et Le J'adore lounge bar

**Salim** est le client. Il est **propriétaire de quatre commerces** : une
concession automobile, une pâtisserie en trompe-l'œil, une parfumerie, et
**Le J'adore lounge bar**, à **Soignies** (Hainaut, Belgique).

Le J'adore est donc le bar de ces quatre. Les dix documents de vente de
`presentations/` ne sont pas de la prospection générique : ce sont ses
commerces, et les documents portent son nom.

### Le projet en cours

Un **after movie** pour une soirée du J'adore, et une refonte d'identité.
Ce que Redouane a demandé, dans ses termes :

1. **La préparation de pré-production** de l'after movie.
2. **Une présentation** à remettre à Salim, qui serve aussi à cerner ce qu'il
   veut : propositions de concept et références visuelles.
3. **Des propositions de sons**, choisis pour ce qui fonctionne au moment de la
   publication.
4. **Une retouche technique du logo** du J'adore, plus une **animation** de ce
   logo.

> **Correction.** Une version antérieure de ce document parlait de « refonte du
> logo ». C'est faux : Salim ne veut pas qu'on y touche. Le travail est un
> nettoyage du tracé, une version monochrome et des déclinaisons pour qu'il
> tienne en petit et sur fond sombre, plus l'animation. Le dessin, lui, ne
> bouge pas.

L'objectif tient en une phrase : **gagner en visibilité et en statistiques**.
Les plateformes visées sont **Instagram, Facebook et TikTok**.

### La date, et ce qu'elle commande

**La soirée a lieu le 2 octobre 2026.**

Un after movie se monte à partir d'images tournées **pendant** la soirée. Tout
ce qui précède est donc daté depuis ce 2 octobre :

| Échéance | Ce qui doit être fait |
|---|---|
| avant le 2 octobre | concept validé, plan de tournage écrit, autorisations réglées, équipe et matériel confirmés |
| le 2 octobre | le tournage |
| après le 2 octobre | montage, puis publication |

La recherche de sons se fait **au plus près de la publication**, pas
maintenant : une tendance qui vaut aujourd'hui aura tourné d'ici là.

Ce qui reste à caler avec Salim : la date de publication visée, et donc le
délai de montage dont il accepte de disposer.

### Les sons : à rechercher en direct, jamais de mémoire

Une tendance sonore sur TikTok ou Instagram dure quelques semaines. Aucun
modèle de langage ne peut la connaître de mémoire : ses données d'entraînement
sont toujours en retard. **Toute proposition de son doit venir d'une recherche
faite le jour même**, avec la date de consultation notée à côté de chaque
titre. Un son proposé sans vérification est un son périmé.

Il faut aussi vérifier les droits : un son populaire n'est pas forcément
utilisable sur un compte professionnel. Les bibliothèques commerciales des
plateformes et les licences de type Epidemic Sound ou Artlist sont les voies
sûres, et elles se vérifient au cas par cas.

### Ce qui existe déjà en ligne

Relevé publiquement le 6 septembre 2026, arrondi, et à revérifier avant tout
rendez-vous : ces chiffres bougent.

| Plateforme | État |
|---|---|
| Instagram [@jadorebarlounge](https://www.instagram.com/jadorebarlounge/) | environ 2 057 abonnés, 655 publications |
| Facebook [J'Adore lounge bar](https://www.facebook.com/Jadore.sgs/) | environ 2 844 mentions, **des Reels déjà publiés** |
| TikTok | **aucun compte trouvé**, alors que c'est une des trois plateformes visées |

L'établissement est place Van Zeeland, ouvert de 11 h à 23 h, avec brunchs,
cocktails, chicha et terrasse. Il organise déjà des soirées à thème.

**Conséquence de fond : ce n'est pas une boîte de nuit.** Un after movie de
club, stroboscopes et fosse, serait hors sujet. Le registre est celui d'un
lounge qui sert aussi des brunchs.

### Le fichier du logo manque

Il n'existe nulle part dans le dépôt : aucun SVG, aucune image du J'adore.
Sans le fichier d'origine de Salim, la retouche technique ne peut pas
commencer et l'animation reste au stade du concept. **C'est la première chose
à lui demander.**

### Ce qui reste à établir avec Salim

1. **La date de la soirée**, et le type d'événement (soirée à thème, DJ
   invité, anniversaire du lieu, autre).
2. **Ses comptes existants** : Instagram, Facebook, TikTok du J'adore.
   Combien d'abonnés, quoi de publié, ce qui a déjà marché ou non.
3. **Le logo actuel** et ce qui le dérange dedans.
4. **Ce qu'il attend comme livrables** : un seul after movie, ou un format
   long plus des extraits courts par plateforme.
5. **Qui tourne, avec quel matériel**, et combien de personnes sur place.
6. **Les autorisations** : droit à l'image des clients filmés dans un lieu de
   nuit, affichage à l'entrée, consentement du personnel.
7. **Ce qu'il appelle un succès** : des vues, des abonnés, du monde le samedi
   suivant. Ce ne sont pas les mêmes montages.

### Ce que la propriété des quatre change

Les dix PDF de `presentations/` sont désormais **nominatifs** : le pied de page
porte le nom du client, et le document du bar est celui du J'adore.

Ce qui reste supposé dans ces documents, et qui doit être confirmé avec lui :

- les saisons retenues pour chaque commerce ;
- les dépenses de visibilité mensuelles supposées ;
- la valeur d'un client supposée pour chaque enseigne.

Ce sont les trois nombres de la planche chiffrée. Ils sont présentés comme des
hypothèses à remplacer devant lui, donc ils ne sont pas faux, mais ils ne sont
pas encore les siens.

Ne sont pas non plus connus : le nom commercial du groupe, s'il en existe un,
et les enseignes de la concession, de la pâtisserie et de la parfumerie. Seul
le bar est nommé.

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

### Les trois types de documents

`presentations/` produit maintenant trois types, distingués par le champ `kind`
de l'objet de contenu :

| `kind` | Documents | Fichier de contenu |
|---|---|---|
| `sector` | les quatre commerces | `content.mjs` |
| `group` | le document de groupe | `content.mjs` |
| `shoot` | la présentation de pré-tournage du J'adore | `content-jadore.mjs` |

L'ordre des planches est une table de correspondance dans `render.mjs`. Un
`kind` inconnu échoue en le disant, plutôt que de retomber silencieusement dans
la mise en page d'un autre type.

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

**Sur la soirée**

1. L'horaire, le thème, et qui joue. La date est fixée au 2 octobre 2026.
2. L'affluence attendue, et à quelle heure la salle est pleine.
3. Le lieu : plan, éclairage, zones filmables, zone fumeurs, terrasse.
4. Qui tourne, avec quel matériel, et combien de personnes.
5. Les autorisations : droit à l'image, affichage à l'entrée, accord du
   personnel.

**Sur l'existant**

6. Les comptes Instagram, Facebook et TikTok du J'adore : abonnés, contenus
   publiés, ce qui a déjà bien ou mal marché.
7. Le logo actuel, et ce qui déplaît dedans.
8. Les images des soirées précédentes, s'il y en a.

**Sur l'objectif**

9. Ce que Salim appelle un succès : des vues, des abonnés, ou du monde le
   samedi suivant. Le montage n'est pas le même.
10. Le nombre de livrables attendus, et pour quelle plateforme en priorité.
11. La date de publication visée, qui commande la recherche de sons.

**Sur la relation**

12. Le groupe a-t-il une raison sociale, et quelles sont les enseignes des
    trois autres commerces. Seul le bar est nommé à ce jour.
13. A-t-il déjà travaillé avec un vidéaste, et pourquoi cela s'est arrêté.

---

## 8. L'organisation du dépôt

**Une branche par client, dans ce dépôt.** Pas de dépôt séparé : le travail
client doit garder accès au contexte Fovea, à la direction artistique et à la
chaîne de génération de documents. Un dépôt à part perdrait tout cela.

| Branche | Contenu |
|---|---|
| `main` | le site Fovea et la direction artistique |
| `claude/design-system-pack-5zv9br` | la chaîne de documents de vente et ce brief |
| `client/jadore` | le travail pour Salim et Le J'adore lounge bar |

Une branche client part de `main` (ou du dernier état intégré) et porte tout ce
qui concerne ce client : brief, présentations, pré-production, identité.

### Où en est le travail

| Commit | Contenu |
|---|---|
| `68ab9c9` | la DA est figée et appliquée au site |
| `25aad26` | la page packs est retirée du site, la DA reste en documentation |
| `6c76712` | la chaîne de documents de vente en PDF |
| `afbf27e` | les documents vendent l'offre Fovea, et plus un produit tiers |
| ce commit | le contexte réel du client, et le prompt de la présentation |

La pull request numéro 1 est fusionnée. La numéro 2 porte la chaîne de
documents et ce brief.

Commandes utiles :

```bash
npm run dev        # le site en développement
npm run build      # à faire passer avant tout commit
npm run decks      # régénère les dix PDF de vente
npm run decks:png  # une image par planche, pour relire
```

### Le prompt de la présentation after movie

Il est dans [`docs/PROMPT-AFTERMOVIE.md`](PROMPT-AFTERMOVIE.md). À coller tel
quel dans une nouvelle session ouverte sur la branche `client/jadore`.
