/**
 * TOUT LE TEXTE DES DOCUMENTS EST ICI.
 *
 * C'est le seul fichier à ouvrir pour changer un argument, un chiffre ou un
 * nom. `render.mjs` ne contient aucune phrase de vente, et aucun montant :
 * les totaux se calculent depuis les hypothèses ci-dessous.
 *
 * Deux règles tenues dans ce fichier :
 *   1. Aucune statistique inventée. Les nombres du calcul sont présentés comme
 *      des hypothèses à remplacer devant le client, jamais comme une étude.
 *   2. Aucun tiret cadratin. Virgule, deux-points ou parenthèses.
 *      `build.mjs` refuse de générer si un tiret cadratin réapparaît.
 *
 * Les espaces insécables ne se tapent pas ici : `fr()` les pose à la
 * génération (voir render.mjs).
 *
 * `<i>` autour d'un mot d'un titre le passe en italique rouge de marque.
 * Un seul par titre, et il doit porter le sens.
 */

/* -------------------------------------------------------------------------
   Signature
   ------------------------------------------------------------------------- */

export const BRAND = {
  name: 'Fovea',
  wordmark: 'FOVEA',
  baseline: "L'agence qui augmente votre chiffre d'affaires",
  phone: '+32 492 07 68 37',
  email: 'redouane.joti@fovea-agency.com',
};

/* -------------------------------------------------------------------------
   Le destinataire
   ------------------------------------------------------------------------- *
 * À REMPLIR. Ces trois valeurs, plus les `label` de chaque commerce plus bas,
 * sont tout ce qui rend le document nominatif. Changez-les et relancez
 * `npm run decks` : les cinq documents se réécrivent.
 */

export const CLIENT = {
  /** Le groupe, tel qu'il doit apparaître en pied de page. */
  name: 'Groupe à nommer',
  /** La personne à qui le document est remis. */
  contact: 'Nom du dirigeant',
  /** La ville, pour la couverture. */
  city: 'Bruxelles',
};

/* -------------------------------------------------------------------------
   Les hypothèses du calcul
   ------------------------------------------------------------------------- */

export const HYPOTHESES = {
  /** Le calcul de la planche « le chiffre » raisonne en mois pleins. */
  monthsPerYear: 12,

  /**
   * L'axe de la frise du document de groupe. Pour une agence de
   * communication, ce qui distingue quatre commerces n'est pas l'heure de la
   * journée mais le mois de l'année : c'est là que se décide le calendrier de
   * tournage.
   */
  monthAxis: { from: 1, to: 13 },
  monthTicks: ['Janv.', 'Mars', 'Mai', 'Juil.', 'Sept.', 'Nov.'],
};

/* -------------------------------------------------------------------------
   Ce qui ne change pas d'un commerce à l'autre
   ------------------------------------------------------------------------- *
 * Cinq planches sur douze portent ce contenu commun : ce que fait Fovea, ce
 * qui fait la différence, ce qui vous reste, la mise en route et les limites.
 * Les sept autres sont écrites commerce par commerce, et c'est là que se joue
 * la différence entre une plaquette et une proposition.
 *
 * Tout ce qui est affirmé ici est adossé au site (app/services, app/process,
 * app/campagne-ads, components/sections/ServicesBlock). Aucun chiffre de
 * performance n'y figure : ceux du site se contredisent d'un fichier à
 * l'autre, donc ils ne sont pas imprimables dans une proposition signée.
 */

export const COMMON = {
  product: {
    eyebrow: 'Ce que nous faisons',
    title: 'Nous filmons, nous diffusons, nous <i>ajustons</i>.',
    lead:
      "Fovea est une agence de communication. Nous produisons vos vidéos publicitaires et nous gérons vos campagnes. Les deux au même endroit, parce que séparés, ils se ratent.",
    columns: [
      {
        title: 'Nous produisons',
        text:
          "Tournage chez vous ou en studio, direction artistique, montage, étalonnage, sound design, motion design. Deux rounds de retours inclus.",
      },
      {
        title: 'Nous diffusons',
        text:
          "Meta, Google, TikTok, LinkedIn. Audiences, budgets et enchères paramétrés, et chaque vidéo déclinée au format de sa plateforme.",
      },
      {
        title: 'Nous ajustons',
        text:
          "Tests A/B des créatifs, arbitrage des budgets, reporting mensuel. Ce qui ne marche pas est coupé sans attendre la fin du mois.",
      },
    ],
  },

  natural: {
    eyebrow: 'Ce qui nous distingue',
    title: 'Le créatif et la diffusion, sous le même <i>toit</i>.',
    blocks: [
      {
        title: 'Celui qui monte lit les chiffres',
        text:
          "Un monteur qui ne voit jamais les résultats refait les mêmes erreurs. Ici, la personne qui coupe la vidéo sait ce que la version précédente a donné.",
      },
      {
        title: 'Un format par plateforme',
        text:
          "Un Reel n'est pas un YouTube raccourci. Chaque plateforme reçoit un montage fait pour elle, pas un recadrage de dernière minute.",
      },
      {
        title: 'Des versions faites pour être comparées',
        text:
          "Un tournage sort plusieurs accroches. On ne devine pas laquelle fonctionne, on les met en concurrence sur votre audience.",
      },
      {
        title: 'Une équipe qui se déplace',
        text:
          "Nous tournons chez vous, en Belgique comme en France. Votre commerce est le décor, et c'est ce qui rend la vidéo crédible.",
      },
    ],
  },

  record: {
    eyebrow: 'Ce qui vous reste',
    title: 'Tout ce que nous produisons vous <i>appartient</i>.',
    caption: "Le jour où vous arrêtez, vous partez avec l'ensemble.",
    items: [
      'Les vidéos montées, déclinées dans tous les formats',
      "Les fichiers sources, à vous, sans limite d'usage",
      'Votre compte publicitaire, ouvert à votre nom',
      'Les audiences constituées pendant la campagne',
      'Le reporting mensuel, chiffre par chiffre',
      'Ce qui a été testé, et ce qui a été coupé',
    ],
  },

  setup: {
    eyebrow: 'La mise en route',
    title: 'Trois étapes, une seule journée chez <i>vous</i>.',
    steps: [
      {
        title: 'Brief et audit',
        text:
          "Un rendez-vous pour cerner votre cible, votre angle et vos objectifs. Nous auditons ce qui a déjà été diffusé, s'il y en a.",
      },
      {
        title: 'Tournage et montage',
        text:
          "Notre équipe se déplace. Direction artistique, tournage, montage et déclinaisons de format. Deux rounds de retours.",
      },
      {
        title: 'Lancement et arbitrage',
        text:
          "Mise en ligne, paramétrage des audiences, tests A/B des accroches. À partir de là, ce qui ne marche pas est coupé chaque semaine.",
      },
    ],
    delay:
      "Comptez trois semaines entre le brief et la première diffusion, dont une journée de tournage dans votre commerce.",
  },

  limits: {
    eyebrow: 'Ce que nous ne promettons pas',
    title: 'Les quatre choses que nous ne ferons <i>pas</i>.',
    lead:
      "Une proposition qui ne dit que le bien se retourne au premier mois. Voici ce sur quoi nous ne nous engageons pas, dit avant de signer.",
    items: [
      {
        title: 'Aucun chiffre garanti',
        text:
          "Personne ne peut promettre un retour avant d'avoir testé vos créatifs sur votre audience. Nous nous engageons sur la production, la diffusion et la mesure, pas sur un multiple.",
      },
      {
        title: 'Le budget de diffusion est plafonné',
        text:
          "Chaque formule inclut une enveloppe publicitaire jusqu'à un plafond. Au-delà, la dépense média est la vôtre, et elle se décide avec vous, pas à votre place.",
      },
      {
        title: 'Deux rounds de retours, pas davantage',
        text:
          "Un montage se corrige deux fois. Au-delà, c'est une nouvelle prestation. C'est ce qui fait sortir la vidéo au lieu de la faire tourner en rond.",
      },
      {
        title: 'Nous ne réécrivons pas votre offre',
        text:
          "Nous filmons et nous diffusons ce que vous vendez. Si le prix ou le produit ne convainc pas en boutique, une campagne ne le corrigera pas : elle le fera savoir plus vite.",
      },
    ],
  },

  close: {
    eyebrow: 'La suite',
    cta: 'Un audit de votre visibilité, sans engagement',
  },
};

export const SECTORS = [
  /* ---------------------------------------------------------------------- */
  {
    slug: 'concession-automobile',
    label: 'Concession automobile',
    trade: 'Vente, atelier et pièces',
    coverLabel: 'Concession automobile',
    kind: 'sector',

    cover: {
      title: 'Vos occasions se vendent en photo.<br>Les leurs se <i>filment</i>.',
      lead:
        "Un acheteur compare six annonces avant de se déplacer. Celles qui bougent retiennent son attention, les autres défilent sans qu'il s'arrête.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: 'Vos véhicules sont photographiés entre deux <i>clients</i>.',
      lead:
        "Ce n'est pas un défaut de sérieux. C'est qu'un véhicule rentre le matin et doit être en ligne l'après-midi, et que personne n'a une demi-journée à y consacrer.",
      steps: [
        { mark: '8 h 30', text: "Un véhicule rentre en stock. Photos rapides sur le parc, avec la lumière qu'il y a." },
        { mark: '10 h 00', text: "L'annonce part en ligne. Douze photos plates, aucun plan de l'habitacle, aucun son." },
        { mark: 'Samedi', text: "L'acheteur compare six annonces depuis son canapé. La vôtre ne se distingue d'aucune autre." },
        { mark: 'Fin de mois', text: "Le véhicule est toujours au parc. Il coûte, et personne ne sait ce qui a manqué pour le vendre." },
      ],
    },

    cost: {
      title: 'Ce que votre visibilité vous coûte, <i>calculé</i> devant vous.',
      monthlySpend: 600,
      creatives: 1,
      value: 900,
      valueLabel: 'Marge sur une vente',
      valueNote: "Votre marge moyenne sur une occasion, à corriger avec la vôtre.",
      spendNote: "Portails d'annonces, posts boostés, presse locale, sponsoring du club.",
    },

    campaign: {
      eyebrow: 'Une campagne jouée, de bout en bout',
      title: 'Trois véhicules filmés, une accroche qui <i>gagne</i>.',
      steps: [
        {
          mark: 'J+0',
          text: "Brief sur votre stock : quels modèles tournent, lesquels dorment, quel acheteur vous manque.",
          note: "On choisit trois véhicules, pas le parc entier. Une campagne ne se juge que sur des cas comparables.",
        },
        { mark: 'J+4', text: "Repérage et scripts. Trois accroches différentes pour le même véhicule." },
        {
          mark: 'J+8',
          text: "Tournage sur le parc, une demi-journée. Extérieur, habitacle, démarrage, départ en essai.",
          note: "Le son du moteur et la fermeture de portière font plus pour la crédibilité que douze photos.",
        },
        { mark: 'J+14', text: "Montage et déclinaisons : vertical pour les Reels, carré pour le feed, large pour YouTube." },
        { mark: 'J+18', text: "Mise en ligne sur Meta et Google, ciblage sur votre zone de chalandise." },
        {
          mark: 'J+32',
          text: "Premier arbitrage. L'accroche qui ne retient pas est coupée, son budget passe sur celle qui amène au parc.",
          note: "On ne rallonge jamais le budget d'un créatif faible, on le déplace sur celui qui travaille.",
        },
      ],
    },

    during: {
      eyebrow: 'Ce qui ne se fait pas seul',
      title: 'Quatre choses hors de portée d\'une application de <i>montage</i>.',
      items: [
        {
          title: 'Faire tenir un véhicule en neuf secondes',
          text: "Un trois quarts, un habitacle, un démarrage. L'ordre et le rythme se décident au montage, pas au tournage.",
        },
        {
          title: 'Décliner un tournage en quatre formats',
          text: "Vertical, carré, large, et la version qui se comprend sans le son. Chaque plateforme refuse le format des autres.",
        },
        {
          title: 'Faire concourir deux accroches',
          text: "Deux versions diffusées sur la même audience, et un verdict chiffré au bout de dix jours au lieu d'une intuition.",
        },
        {
          title: 'Cibler ceux qui cherchent vraiment',
          text: "Une zone, un budget, une intention d'achat. Un post boosté parle à vos clients actuels, pas à vos futurs acheteurs.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour une concession',
      title: 'Quatre choses qui changent dès le premier <i>tournage</i>.',
      items: [
        { title: 'Vos annonces cessent de se ressembler', text: "Une vidéo au milieu de douze séries de photos, c'est le seul écart qui se voit sur un écran de téléphone." },
        { title: 'Le parc tourne plus vite', text: "Un véhicule qui se montre en mouvement se décide plus vite. Le coût de portage baisse avec le délai." },
        { title: "L'atelier profite du même déplacement", text: "La même journée de tournage sert la révision, le contrôle et la carrosserie, sans repayer une équipe." },
        { title: 'Vous savez ce qui fait venir', text: "Chaque accroche a son chiffre. Le samedi matin cesse d'être une impression et devient une ligne." },
      ],
    },

    recordLead:
      "Vous gardez les rushes, les montages dans tous les formats et le compte publicitaire ouvert à votre nom, avec les audiences constituées pendant la campagne.",

    closeTitle: 'Filmons <i>trois</i> véhicules.',
    closeLine:
      "Une demi-journée sur votre parc, trois accroches, deux semaines de diffusion. Vous jugez sur les chiffres de votre propre stock, pas sur un exemple.",
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: 'patisserie-trompe-loeil',
    label: "Pâtisserie en trompe-l'œil",
    trade: 'Pièces sur mesure',
    coverLabel: "Pâtisserie en trompe-l'œil",
    kind: 'sector',

    cover: {
      title: 'Vous fabriquez du spectacle.<br>Personne ne le <i>voit</i>.',
      lead:
        "Une pièce en trompe-l'œil demande dix jours de travail, part en une heure et ne laisse qu'une photo floue prise au comptoir.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: 'Votre plus belle pièce quitte la boutique sans être <i>filmée</i>.',
      lead:
        "Le trompe-l'œil ne se raconte pas, il se montre. Et il se montre au moment de la découpe, quand vous êtes déjà sur la commande suivante.",
      steps: [
        { mark: '6 h 00', text: "Vous montez la pièce. Moulage, aérographe, finitions : dix jours de travail arrivent à leur terme." },
        { mark: '11 h 00', text: "La cliente découvre son sac à main en gâteau. Elle filme, verticalement, en trois secondes." },
        { mark: '14 h 00', text: "La vidéo part sur son compte à elle. Trente vues, aucun lien vers vous." },
        { mark: 'Décembre', text: "Vous refusez des commandes faute de temps, et vous n'avez rien à montrer pour vendre les créneaux qui restent." },
      ],
    },

    cost: {
      title: 'Ce que votre visibilité vous coûte, <i>calculé</i> devant vous.',
      monthlySpend: 250,
      creatives: 0,
      value: 120,
      valueLabel: 'Panier sur commande',
      valueNote: 'Une pièce sur mesure de taille moyenne, hors pièce montée.',
      spendNote: 'Posts boostés, flyers, présence dans la presse locale, salons.',
    },

    campaign: {
      eyebrow: 'Une campagne jouée, de bout en bout',
      title: 'Dix jours de travail, une vidéo qui remplit le <i>carnet</i>.',
      steps: [
        {
          mark: 'J+0',
          text: "Brief sur vos commandes : ce qui se vend, ce qui impressionne, ce que vous voudriez vendre davantage.",
          note: "Le sujet du tournage n'est pas la plus belle pièce, c'est celle que vous voulez reproduire vingt fois.",
        },
        { mark: 'J+5', text: "Script du montage : le geste, le doute, la découpe. C'est la découpe qui vend." },
        {
          mark: 'J+9',
          text: "Tournage au laboratoire, sur une pièce réelle en cours de fabrication. Une demi-journée, sans arrêter la production.",
          note: "On filme votre calendrier, pas une mise en scène : une pièce commandée qui part vraiment le lendemain.",
        },
        { mark: 'J+15', text: "Montage et déclinaisons : Reel vertical, TikTok, et une version longue pour votre page." },
        { mark: 'J+19', text: "Mise en ligne sur Meta et TikTok, ciblage local, avec un formulaire de demande de devis." },
        {
          mark: 'J+33',
          text: "Premier arbitrage. On garde l'accroche qui déclenche des demandes, pas celle qui fait le plus de vues.",
          note: "Les vues ne remplissent pas un carnet de commandes. On optimise sur la demande de devis.",
        },
      ],
    },

    during: {
      eyebrow: 'Ce qui ne se fait pas seul',
      title: 'Quatre choses hors de portée d\'un tournage au <i>comptoir</i>.',
      items: [
        {
          title: 'Filmer sans arrêter la production',
          text: "Une équipe qui sait se placer dans un laboratoire, à la bonne heure, sans vous faire perdre une fournée.",
        },
        {
          title: 'Tenir la lumière sur un glaçage',
          text: "Un trompe-l'œil se joue sur la matière. Mal éclairé, votre sac à main ressemble à un gâteau, et l'effet tombe.",
        },
        {
          title: 'Garder le suspense jusqu\'à la découpe',
          text: "Le montage décide du moment où l'on comprend que c'est un gâteau. Trois secondes trop tôt, il n'y a plus de surprise.",
        },
        {
          title: 'Transformer une vue en devis',
          text: "Une vidéo sans formulaire ni ciblage fait des vues. Avec les deux, elle fait des demandes datées et chiffrées.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour une pâtisserie de création',
      title: 'Quatre choses qui changent avant la prochaine <i>saison</i>.',
      items: [
        { title: 'Votre savoir-faire devient visible', text: "Ce que vous fabriquez est spectaculaire par nature. Filmé correctement, il se vend sans argumentaire." },
        { title: 'Les créneaux creux se remplissent', text: "Une campagne se lance sur les semaines vides, pas sur celles où vous refusez déjà du monde." },
        { title: 'Vous vendez le sur-mesure, pas la vitrine', text: "Le panier d'une commande n'a rien à voir avec celui d'un passage. C'est lui que la vidéo va chercher." },
        { title: 'La fin d\'année se prépare en septembre', text: "Les demandes arrivent avec deux mois d'avance, et le calendrier de production se tient." },
      ],
    },

    recordLead:
      "Vous gardez les rushes de vos pièces, les montages dans tous les formats et une bibliothèque qui grossit à chaque tournage, réutilisable saison après saison.",

    closeTitle: 'Filmons votre prochaine <i>pièce</i>.',
    closeLine:
      "Dites-nous quelle commande part la semaine prochaine. Une demi-journée au laboratoire, et vous voyez ce que la découpe donne en vidéo.",
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: 'bar',
    label: 'Bar',
    trade: 'Soirées et privatisations',
    coverLabel: 'Bar',
    kind: 'sector',

    cover: {
      title: 'On choisit son bar sur un <i>écran</i>,<br>vingt minutes avant d\'y aller.',
      lead:
        "La décision se prend sur un téléphone, dans la rue, entre deux adresses. Ce qui se voit à ce moment-là décide de votre soirée.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: 'Votre meilleure soirée n\'existe sur aucun <i>écran</i>.',
      lead:
        "Le samedi où la salle est pleine, personne n'a le temps de filmer. Et le mardi où vous auriez le temps, il n'y a rien à montrer.",
      steps: [
        { mark: '21 h 30', text: "La salle est pleine, le service tourne, l'ambiance est exactement celle que vous vendez." },
        { mark: '21 h 32', text: "Personne ne filme. Tout le monde travaille, et c'est bien normal." },
        { mark: 'Mardi', text: "Vous postez une photo de cocktail sur une salle vide. Quarante vues, aucune réservation." },
        { mark: 'Juin', text: "La terrasse ouvre. Douze semaines pour faire l'année, et rien de prêt pour l'annoncer." },
      ],
    },

    cost: {
      title: 'Ce que votre visibilité vous coûte, <i>calculé</i> devant vous.',
      monthlySpend: 400,
      creatives: 1,
      value: 180,
      valueLabel: 'Addition de groupe',
      valueNote: 'Une tablée de six à douze, boissons et planches. À corriger avec votre ticket.',
      spendNote: 'Posts boostés, affiches, partenariats de soirées, plateformes de sortie.',
    },

    campaign: {
      eyebrow: 'Une campagne jouée, de bout en bout',
      title: 'Une soirée filmée, douze semaines de <i>terrasse</i>.',
      steps: [
        {
          mark: 'J+0',
          text: "Brief sur vos soirées : ce qui remplit, ce qui reste vide, quel public vous voudriez faire venir en semaine.",
          note: "On ne filme pas le bar, on filme une soirée précise : celle que vous voulez rejouer douze fois.",
        },
        { mark: 'J+3', text: "Repérage à l'heure du service, pour savoir où se met la caméra sans gêner la salle." },
        {
          mark: 'J+7',
          text: "Tournage un soir de service, avec l'équipe et les clients en place. Deux heures, sans couper le service.",
          note: "L'ambiance ne se reconstitue pas à vide. On tourne quand la salle est pleine, c'est le seul moment crédible.",
        },
        { mark: 'J+13', text: "Montage et déclinaisons : Reel vertical, TikTok, story de rappel le jour même." },
        { mark: 'J+17', text: "Mise en ligne sur Meta et TikTok, ciblage dans un rayon serré autour de l'adresse." },
        {
          mark: 'J+31',
          text: "Premier arbitrage. On garde l'accroche qui fait pousser la porte, et on programme la diffusion aux heures de décision.",
          note: "La diffusion se concentre en fin d'après-midi et en début de soirée : c'est là que le choix se fait.",
        },
      ],
    },

    during: {
      eyebrow: 'Ce qui ne se fait pas seul',
      title: 'Quatre choses impossibles pendant le <i>service</i>.',
      items: [
        {
          title: 'Filmer une salle pleine sans la gêner',
          text: "Une équipe qui se place, cadre et repart, sans ralentir un service ni braquer un projecteur sur vos clients.",
        },
        {
          title: 'Rendre le bruit et la lumière',
          text: "Un bar se filme dans une lumière difficile. Sans étalonnage ni son travaillé, l'ambiance devient une salle sombre.",
        },
        {
          title: 'Diffuser au bon moment',
          text: "Une vidéo publiée à 11 h du matin ne rencontre personne. La programmation horaire fait autant que le montage.",
        },
        {
          title: 'Séparer les groupes du passage',
          text: "Une privatisation et un afterwork ne se vendent pas au même public. Deux ciblages, deux accroches, deux budgets.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour un bar',
      title: 'Quatre choses qui changent dès le premier <i>vendredi</i>.',
      items: [
        { title: 'La salle du fond se remplit', text: "Les groupes voient à quoi elle ressemble avant de choisir. Une table de douze ne se réserve pas à l'aveugle." },
        { title: 'Les soirées creuses trouvent un public', text: "Le mardi et le mercredi se travaillent à part, avec leur propre accroche et leur propre budget." },
        { title: 'Votre équipe reste au comptoir', text: "Plus personne ne s'improvise vidéaste entre deux tournées, et il y a quand même du contenu." },
        { title: 'La saison de terrasse se lance à l\'heure', text: "Le tournage se fait en mai pour diffuser en juin, pas l'inverse." },
      ],
    },

    recordLead:
      "Vous gardez les rushes de vos soirées, les montages dans tous les formats et une réserve de contenu qui tient jusqu'à la saison suivante.",

    closeTitle: 'Filmons un <i>vendredi</i>.',
    closeLine:
      "Deux heures un soir de service, sans rien changer à votre organisation. Vous voyez ensuite ce que la salle pleine donne à l'écran.",
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: 'parfumerie',
    label: 'Parfumerie',
    trade: 'Conseil et marques de niche',
    coverLabel: 'Parfumerie',
    kind: 'sector',

    cover: {
      title: 'Un parfum ne se voit pas.<br>Il se <i>raconte</i>.',
      lead:
        "Votre métier est le conseil, et le conseil ne passe pas dans une photo de flacon. Il passe dans une voix, un geste, un sillage décrit.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: 'Vous vendez du conseil, et vous montrez des <i>flacons</i>.',
      lead:
        "Les visuels de marque arrivent tout faits et se ressemblent tous. Rien n'y distingue votre boutique de la chaîne d'à côté.",
      steps: [
        { mark: '10 h 00', text: "Vous recevez les visuels de la marque. Les mêmes que toutes les parfumeries du pays." },
        { mark: '15 h 00', text: "Vous conseillez une cliente pendant dix minutes. C'est ce moment-là qui fait la vente, et il n'est filmé nulle part." },
        { mark: 'Samedi', text: "Une passante hésite devant la vitrine. Rien ne lui dit qu'ici, on prend le temps d'expliquer." },
        { mark: 'Décembre', text: "Vous faites une part énorme de l'année en six semaines, avec les visuels que tout le monde a." },
      ],
    },

    cost: {
      title: 'Ce que votre visibilité vous coûte, <i>calculé</i> devant vous.',
      monthlySpend: 350,
      creatives: 2,
      value: 85,
      valueLabel: 'Panier moyen',
      valueNote: 'Un flacon de taille courante, hors coffret et hors fêtes.',
      spendNote: 'Posts boostés, vitrines, presse locale, opérations de marque.',
    },

    campaign: {
      eyebrow: 'Une campagne jouée, de bout en bout',
      title: 'Votre conseil filmé, six semaines avant <i>décembre</i>.',
      steps: [
        {
          mark: 'J+0',
          text: "Brief sur vos marques : ce que vous défendez, ce qui ne se trouve pas ailleurs, quelle cliente vous voulez faire entrer.",
          note: "L'angle n'est jamais le flacon, c'est vous. Ce qui ne se copie pas, c'est votre façon de conseiller.",
        },
        { mark: 'J+4', text: "Scripts : trois conseils courts, une famille olfactive par vidéo, une cliente et une question." },
        {
          mark: 'J+8',
          text: "Tournage en boutique, une demi-journée. Le geste, les touches, le sillage expliqué à voix haute.",
          note: "On filme un vrai conseil, pas un texte récité. C'est ce qui fait la différence avec un visuel de marque.",
        },
        { mark: 'J+14', text: "Montage et déclinaisons : Reel vertical, TikTok, et une série courte pour vos coffrets." },
        { mark: 'J+18', text: "Mise en ligne sur Meta, ciblage local, avec une montée en budget avant les fêtes." },
        {
          mark: 'J+32',
          text: "Premier arbitrage avant le pic. On garde le conseil qui fait entrer en boutique, et on charge le budget en décembre.",
          note: "Le calendrier compte autant que le créatif : la campagne se règle pour être au maximum le premier week-end de décembre.",
        },
      ],
    },

    during: {
      eyebrow: 'Ce qui ne se fait pas seul',
      title: 'Quatre choses hors de portée des visuels de <i>marque</i>.',
      items: [
        {
          title: 'Filmer un sillage',
          text: "Un parfum ne se photographie pas. Il se rend par un geste, un regard, une hésitation et un mot juste.",
        },
        {
          title: 'Tenir la lumière sur un verre',
          text: "Un flacon est un objet réfléchissant. Sans éclairage maîtrisé, il devient une tache blanche au milieu de l'image.",
        },
        {
          title: 'Sortir du visuel de la marque',
          text: "Les images fournies sont les mêmes partout. Ce qui vous appartient, c'est votre boutique et votre conseil.",
        },
        {
          title: 'Charger le budget au bon moment',
          text: "Décembre pèse une part énorme de votre année. La montée en budget se prépare six semaines avant, pas le 1er du mois.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour une parfumerie',
      title: 'Quatre choses qui changent avant les <i>fêtes</i>.',
      items: [
        { title: 'Votre conseil devient votre publicité', text: "Ce que vous faites déjà toute la journée devient le contenu qui vous distingue de la chaîne." },
        { title: 'Les coffrets se vendent avant la vitrine', text: "La cliente sait ce qu'elle vient chercher, et elle entre décidée au lieu d'hésiter dehors." },
        { title: 'Vous existez à côté des marques', text: "Les visuels de marque continuent d'arriver, mais ils ne sont plus votre seule voix." },
        { title: 'Décembre se pilote au lieu de se subir', text: "Le budget monte quand la demande monte, et vous voyez ce que chaque semaine rapporte." },
      ],
    },

    recordLead:
      "Vous gardez les rushes tournés en boutique, les montages dans tous les formats et une bibliothèque de conseils réutilisable d'une saison à l'autre.",

    closeTitle: 'Filmons <i>trois</i> conseils.',
    closeLine:
      "Une demi-journée en boutique, trois familles olfactives, deux semaines de diffusion. Vous jugez sur ce qui entre, pas sur ce que nous écrivons.",
  },
];

export const GROUP = {
  slug: 'groupe',
  label: 'Les quatre commerces',
  trade: 'Document de groupe',
  coverLabel: 'Document de groupe',
  kind: 'group',

  cover: {
    title: 'Quatre commerces.<br>Quatre publics qui ne se <i>croisent</i> jamais.',
    lead:
      "Aucun de vos quatre commerces ne justifie d'embaucher une équipe créative à lui seul. Chacun en mérite une, et aucun ne peut se contenter des vidéos d'un autre.",
  },

  pain: {
    eyebrow: 'Le problème',
    title: "Le même manque, quatre fois, à quatre <i>saisons</i> différentes.",
    lead:
      "Mutualiser un contenu ne marcherait pas : vos quatre commerces ne parlent ni au même public, ni au même moment de l'année. C'est précisément ce qui rend le poste impossible à créer en interne.",
    steps: [
      { mark: 'Mars', text: "La concession sort ses occasions de printemps. Personne ne filme les véhicules, les annonces partent avec des photos de téléphone." },
      { mark: 'Juin', text: "Le bar ouvre sa terrasse. La saison se joue en douze semaines, et rien n'est prêt pour l'annoncer." },
      { mark: 'Septembre', text: "La pâtisserie prépare les commandes de fin d'année. Les pièces les plus spectaculaires ne seront jamais filmées." },
      { mark: 'Décembre', text: "La parfumerie fait son année. Trois de vos quatre commerces jouent gros le même mois, et vous ne pouvez pas les tourner la même semaine." },
    ],
  },

  contrast: {
    eyebrow: 'Pourquoi un seul contenu ne suffirait pas',
    title: 'Vos quatre commerces ne jouent pas leur année aux mêmes <i>mois</i>.',
    lead:
      "Chaque barre marque la période où le commerce fait son chiffre. C'est elle qui commande la date de tournage, et elle ne se déplace pas.",
    lanes: [
      { name: 'Concession', trade: 'Rentrée et printemps', peakFrom: 3, peakTo: 6, peakLabel: 'Mars à mai' },
      { name: 'Bar', trade: 'La terrasse, puis les fêtes', peakFrom: 6, peakTo: 9, peakLabel: 'Juin à août' },
      { name: 'Pâtisserie', trade: 'Communions, puis fin d\'année', peakFrom: 5, peakTo: 7, peakLabel: 'Mai et juin' },
      { name: 'Parfumerie', trade: "Décembre pèse l'année", peakFrom: 11, peakTo: 13, peakLabel: 'Novembre et décembre' },
    ],
    note:
      "Ces périodes sont à confirmer avec vous : elles viennent de la logique de chaque métier, pas d'une mesure.",
  },

  groupCost: {
    title: 'Quatre budgets de visibilité, un seul <i>total</i>.',
    text:
      "Pris séparément, aucun de ces montants ne justifie de créer un poste. Additionnés, ils financent largement une production suivie pour les quatre, et il reste de la marge.",
  },

  campaign: {
    eyebrow: 'Une journée de tournage, quatre commerces',
    title: 'Un déplacement, <i>quatre</i> bibliothèques de contenu.',
    steps: [
      { mark: 'J+0', text: "Un seul brief pour les quatre : cibles, angles, calendrier de saison commerce par commerce.", note: "C'est là que se décide l'ordre des tournages, en fonction du mois où chacun joue son chiffre." },
      { mark: 'J+7', text: "Repérage et scripts. Chaque commerce reçoit ses propres accroches, écrites pour son public." },
      { mark: 'J+12', text: "Tournage groupé sur deux journées, une équipe qui se déplace d'une adresse à l'autre.", note: "Le déplacement est mutualisé, la direction artistique ne l'est pas : chaque enseigne garde son registre." },
      { mark: 'J+18', text: "Montage et déclinaisons. Chaque vidéo sort au format de la plateforme qui la portera." },
      { mark: 'J+21', text: "Mise en ligne des quatre campagnes, avec un compte publicitaire par commerce." },
      { mark: 'J+35', text: "Premier arbitrage. Les accroches qui ne prennent pas sont coupées, les autres reçoivent le budget.", note: "Les quatre comptes se lisent au même endroit, mais chacun garde son budget et ses audiences." },
    ],
  },

  during: {
    eyebrow: 'Ce que le groupe y gagne',
    title: 'Quatre enseignes, une seule <i>lecture</i>.',
    items: [
      {
        title: 'Chaque commerce garde son identité',
        text: "Son registre, ses couleurs, son public. Rien n'indique au client final que les quatre partagent une agence.",
      },
      {
        title: 'Un seul déplacement pour plusieurs tournages',
        text: "L'équipe enchaîne les adresses sur une même venue. Ce qui coûte cher dans un tournage, c'est de le monter quatre fois.",
      },
      {
        title: 'Vous lisez les quatre au même endroit',
        text: "Un reporting par commerce, et une vue d'ensemble. Vous voyez enfin lequel de vos quatre budgets travaille le mieux.",
      },
      {
        title: 'Un cinquième commerce entre sans repartir de zéro',
        text: "La méthode, les formats et les audiences existent déjà. Une nouvelle enseigne démarre sur ce qui a été appris ailleurs.",
      },
    ],
  },

  gains: {
    eyebrow: 'Pour le groupe',
    title: 'Quatre décisions que ça vous <i>évite</i>.',
    items: [
      {
        title: "Ne pas recruter un poste créatif",
        text: "Un vidéaste salarié coûterait plus que les quatre accompagnements réunis, et ne saurait pas gérer la diffusion.",
      },
      {
        title: 'Ne pas arbitrer entre vos enseignes',
        text: "Aucune n'attend son tour : le calendrier de tournage suit les saisons, pas les priorités du mois.",
      },
      {
        title: 'Ne pas mutualiser ce qui ne se mutualise pas',
        text: "Le public, le ton et la saison restent propres à chaque commerce. Seule la logistique se partage.",
      },
      {
        title: "Ne pas piloter à l'aveugle",
        text: "La dépense de visibilité de chaque commerce devient un chiffre lisible, comparable d'un mois à l'autre.",
      },
    ],
  },

  recordLead:
    "Chaque mois, vous ouvrez une seule page : ce qui a été tourné, ce qui est diffusé, ce que chaque commerce a dépensé et ce que chaque accroche a produit.",

  closeTitle: 'Commençons par <i>un</i> commerce.',
  closeLine:
    "Choisissez celui dont la saison arrive en premier, nous le tournons dans les trois semaines. Les trois autres suivent une fois que vous avez vu les premiers résultats.",
};

/** Les cinq documents produits, dans l'ordre de génération. */
export const DOCS = [...SECTORS, GROUP];
