/**
 * PRÉSENTATION DE PRÉ-TOURNAGE, LE J'ADORE LOUNGE BAR.
 *
 * Ce document n'est ni une vente ni un devis : il sert à découvrir ce que
 * Salim aime avant de tourner la soirée du 2 octobre 2026. Il propose des
 * choix, il n'affirme pas de résultats.
 *
 * Les règles du dépôt s'appliquent : aucune statistique inventée, aucune
 * promesse chiffrée, aucun tiret cadratin, insécables posées par `fr()` à la
 * génération, un seul mot accentué par titre.
 *
 * Toute donnée relevée en ligne porte sa source et sa date. Les comptes
 * sociaux et leurs audiences bougent : ce qui est écrit ici a été relevé le
 * 6 septembre 2026 et se revérifie avant le rendez-vous.
 */

const RELEVE = 'relevé le 6 septembre 2026';

export const JADORE = {
  slug: 'jadore',
  label: "Pré-tournage, Le J'adore",
  trade: 'Soirée du 2 octobre 2026',
  coverLabel: "Le J'adore lounge bar, Soignies",
  kind: 'shoot',

  /* --- 1. Couverture ---------------------------------------------------- */
  cover: {
    title: 'Une soirée qui existe.<br>Et qui ne se <i>voit</i> nulle part.',
    lead:
      "Le 2 octobre, votre salle sera pleine. Voici comment nous comptons en tirer de quoi remplir les suivantes, et ce que nous avons besoin de savoir de vous avant.",
  },

  /* --- 2. État des lieux ------------------------------------------------ */
  audit: {
    eyebrow: 'Ce qui existe déjà',
    title: 'Vous avez une audience. Elle est <i>ailleurs</i> qu\'en vidéo.',
    rows: [
      {
        name: 'Instagram',
        detail: "@jadorebarlounge, environ 655 publications. Une base réelle, construite dans le temps.",
        figure: '2 057 abonnés',
      },
      {
        name: 'Facebook',
        detail: "La page publie déjà des Reels : le réflexe vidéo existe, il n'est pas à créer.",
        figure: '2 844 mentions',
      },
      {
        name: 'TikTok',
        detail: "Aucun compte trouvé. C'est la plateforme où une soirée à thème circule le mieux.",
        figure: 'Absent',
        gap: true,
      },
    ],
    source:
      "Chiffres relevés publiquement le 6 septembre 2026 et arrondis. Ils bougent, nous les revérifions avant le rendez-vous. Aucun n'est une promesse.",
  },

  /* --- 3. Ce que l'after movie doit produire ---------------------------- */
  intent: {
    eyebrow: 'Ce que nous cherchons',
    title: 'Un film qui donne envie d\'être là la <i>prochaine</i> fois.',
    lead:
      "Un after movie ne raconte pas la soirée à ceux qui y étaient. Il la vend à ceux qui l'ont manquée, et il donne à ceux qui y étaient une raison de la partager.",
    columns: [
      {
        title: 'Il montre la salle pleine',
        text:
          "Une terrasse animée et un comptoir occupé se filment. C'est la preuve sociale que ni une photo de cocktail ni une affiche ne donnent.",
      },
      {
        title: 'Il tient sans le son',
        text:
          "Une grande partie des vues se fait en silence. Le montage doit se comprendre sans musique, et la musique doit l'améliorer, pas le porter.",
      },
      {
        title: 'Il resert toute l\'année',
        text:
          "Les rushes d'une soirée alimentent les annonces des suivantes. Un tournage, plusieurs mois de matière.",
      },
    ],
  },

  /* --- 4. Les trois styles ---------------------------------------------- *
   * Ce ne sont pas trois directions artistiques entre lesquelles il faudrait
   * choisir à l'aveugle. Ce sont trois façons de filmer, commandées par le
   * nombre de personnes présentes et par le ton du moment. Elles s'enchaînent
   * dans la même soirée, et la planche du plan de tournage les situe dans le
   * temps.
   */
  directionsIntro: {
    eyebrow: 'Trois styles, pas trois choix',
    title: 'Le style suit la <i>salle</i>, pas l\'inverse.',
    lead:
      "On ne filme pas quinze personnes comme on en filme cent. Ces trois styles s'enchaînent dans la même soirée, au fur et à mesure que la salle se remplit. Dites-nous celui que vous voulez dominant au montage.",
  },

  directions: [
    {
      swatch: 'warm',
      when: 'Début de soirée',
      crowd: 'Salle aux trois quarts vide',
      tone: 'Posé, soigné, appétant',
      name: 'La matière',
      line: "Le lieu, les gestes, les produits. On montre ce qu'on ne peut pas montrer quand c'est plein.",
      title: 'Peu de monde : on filme ce que la foule <i>cache</i>.',
      lead:
        "Une salle vide n'est pas un problème de tournage, c'est une fenêtre. C'est le seul moment où la lumière est maîtrisable et où un plan peut être tenu.",
      mood: 'Lumière douce, contraste doux, grain visible.',
      beats: [
        { mark: 'Cadre', text: 'Serré. Le verre, les mains, la vapeur de la chicha, la texture du comptoir.' },
        { mark: 'Mouvement', text: 'Lent et court. Un travelling de deux secondes vaut mieux qu\'un panoramique.' },
        { mark: 'Champ large', text: 'Rare, et toujours cadré pour que le vide ne se voie pas : de biais, jamais de face.' },
        { mark: 'Au montage', text: 'Ces plans deviennent les respirations, et la matière des annonces suivantes.' },
      ],
      asks: [
        "L'accès une heure avant l'ouverture, quand la lumière est encore réglable",
        'Deux ou trois cocktails préparés pour être filmés',
        'Un comptoir rangé, ce qui ne va plus de soi une fois le service lancé',
      ],
    },
    {
      swatch: 'raw',
      when: 'La montée',
      crowd: 'La salle se remplit',
      tone: 'Vivant, spontané, chaleureux',
      name: 'Les visages',
      line: 'Les gens arrivent, se retrouvent, s\'installent. On filme la reconnaissance, pas la foule.',
      title: 'La salle se remplit : on filme des <i>gens</i>, pas une masse.',
      lead:
        "C'est le moment le plus utile et le plus court. Assez de monde pour que ce soit vivant, assez peu pour qu'on distingue encore les visages.",
      mood: 'Peu de couleur, grain lourd, cadrage libre.',
      beats: [
        { mark: 'Cadre', text: 'Plan moyen. Deux ou trois personnes, jamais une seule, jamais dix.' },
        { mark: 'Mouvement', text: 'On suit au lieu de cadrer. La caméra est à hauteur d\'épaule, elle se déplace.' },
        { mark: 'Champ large', text: 'La terrasse et l\'entrée, là où le monde est le plus dense en premier.' },
        { mark: 'Au montage', text: 'Ces plans portent la preuve sociale : on reconnaît quelqu\'un, donc on y va.' },
      ],
      asks: [
        'Des habitués prévenus à l\'avance, qui acceptent d\'être filmés de près',
        'Une liberté de circulation dans la salle et sur la terrasse',
        "L'accord du personnel, qui sera à l'image",
      ],
    },
    {
      swatch: 'hard',
      when: 'Le pic',
      crowd: 'Salle pleine',
      tone: 'Dense, rythmé, énergique',
      name: "L'énergie",
      line: 'Le moment où la salle bascule. Coupes courtes, lumière franche, densité assumée.',
      title: 'Salle pleine : on filme la <i>densité</i>.',
      lead:
        "C'est ce qui se partage, et c'est aussi le plus fragile : ces plans n'existent que si la salle est vraiment pleine. C'est pourquoi les deux styles précédents ne sont pas optionnels.",
      mood: 'Contraste dur, noirs profonds, éclats de lumière francs.',
      beats: [
        { mark: 'Cadre', text: 'Large, puis très serré. L\'alternance fait l\'énergie, pas la vitesse seule.' },
        { mark: 'Mouvement', text: 'Rapide et assumé. Un plan flou gardé exprès rend le reste crédible.' },
        { mark: 'Champ large', text: 'Enfin possible de face : c\'est le seul moment où le plan d\'ensemble sert.' },
        { mark: 'Au montage', text: 'Coupes sur le temps fort, jamais plus de deux secondes par plan.' },
      ],
      asks: [
        'Un éclairage de salle stable, sans stroboscope permanent',
        "Un moment identifié à l'avance comme le pic de la soirée",
        'Un affichage à l\'entrée sur le droit à l\'image, que nous fournissons',
      ],
    },
  ],

  /* --- 8. Le son : le cadre des droits ---------------------------------- */
  sound: {
    eyebrow: 'Le son, avant de choisir',
    title: 'Le titre à la mode vous est probablement <i>interdit</i>.',
    lead:
      "C'est la contrainte que personne n'annonce et qui fait couper le son des publications. Un compte professionnel n'a pas accès au même catalogue qu'un compte personnel.",
    rules: [
      {
        title: 'Sur TikTok, un compte entreprise ne voit pas la même bibliothèque',
        text:
          "Il accède à la Commercial Music Library, un catalogue libre pour les marques. Les titres des grands labels en sont exclus dès que le contenu promeut un établissement.",
      },
      {
        title: 'Sur Instagram et Facebook, même logique',
        text:
          "Les comptes professionnels sont limités à la Meta Sound Collection. La bibliothèque générale couvre l'usage personnel, pas la promotion d'un commerce.",
      },
      {
        title: 'La sanction est silencieuse',
        text:
          "Le son est coupé, ou la publication retirée. Une vidéo muette après une soirée réussie, c'est le tournage perdu.",
      },
      {
        title: 'La sortie par le haut',
        text:
          "Une licence commerciale achetée une fois couvre toutes les plateformes, et le morceau ne disparaît pas du catalogue au mauvais moment.",
      },
    ],
    source:
      "Sources : documentation TikTok Ads sur la Commercial Music Library et conditions d'usage TikTok, guides spécialisés sur la Meta Sound Collection. Consultées le 6 septembre 2026, et à revérifier : ces règles changent.",
  },

  /* --- 9. Les pistes proposées ------------------------------------------ */
  tracks: {
    eyebrow: 'Une base de départ',
    title: 'Trois pistes à écouter, une à <i>choisir</i>.',
    rows: [
      {
        name: 'Bibliothèque commerciale TikTok',
        detail:
          "Catalogue intégré, libre pour un compte entreprise, sans coût par titre. La licence ne couvre que TikTok.",
        status: 'Libre, TikTok seul',
      },
      {
        name: 'Meta Sound Collection',
        detail:
          "Catalogue intégré à Instagram et Facebook, cleared pour un usage commercial. Plus restreint que la bibliothèque générale.",
        status: 'Libre, Meta seul',
      },
      {
        name: 'Licence commerciale externe',
        detail:
          "Un abonnement de type Epidemic Sound ou Artlist. Le même morceau part sur les trois plateformes, et sur votre site.",
        status: 'Payant, partout',
      },
    ],
    note:
      "Les titres eux-mêmes se choisissent au plus près de la publication, pas aujourd'hui : une tendance dure quelques semaines et la diffusion est postérieure au 2 octobre. Envoyez-nous les sons que vous aimez, nous vérifions leur statut avant de monter.",
  },

  /* --- 10. Le logo ------------------------------------------------------ */
  logo: {
    eyebrow: 'Votre logo',
    title: 'Nous n\'y touchons pas. Nous le rendons <i>utilisable</i>.',
    lead:
      "Vous avez une identité qui fonctionne et que vos clients reconnaissent. Il n'est pas question de la refaire. Il est question qu'elle tienne en petit, sur fond sombre et en mouvement.",
    keep: [
      'Le dessin, les proportions et le caractère',
      'Ce que vos clients reconnaissent déjà en vitrine',
      'La façon dont il est utilisé sur vos supports actuels',
    ],
    fix: [
      'Un tracé vectoriel propre, qui ne pixellise plus à l\'agrandissement',
      'Une version monochrome, lisible sur une image de soirée',
      'Une version qui tient à la taille d\'une icône de profil',
      'Les marges de sécurité, pour qu\'il ne colle plus au bord',
    ],
    blocker:
      "Ce travail demande votre fichier d'origine, vectoriel si vous l'avez. Sans lui, nous ne pouvons ni nettoyer le tracé ni animer proprement : c'est la première chose à nous transmettre.",
  },

  /* --- 11. L'animation du logo ------------------------------------------ */
  logoMotion: {
    eyebrow: 'L\'animation',
    title: 'Trois façons de faire <i>apparaître</i> votre nom.',
    concepts: [
      {
        title: 'La révélation par la lumière',
        text:
          "Le logo se dévoile comme s'il était éclairé par un projecteur qui passe. Discret, il fonctionne en fin de vidéo sans casser le rythme.",
      },
      {
        title: 'Le tampon',
        text:
          "Il apparaît d'un coup, calé sur un temps fort de la musique. C'est le plus efficace en fin de format court, et le plus mémorisable.",
      },
      {
        title: 'Le tracé',
        text:
          "Le dessin se construit trait par trait. Le plus long, donc réservé à l'ouverture d'un format de vingt secondes ou plus.",
      },
    ],
    note:
      "Ces trois concepts se décident sur écran, pas sur papier. Nous en produisons un essai animé dès que nous avons votre fichier.",
  },

  /* --- 12. Le plan de tournage ------------------------------------------ */
  shootPlan: {
    eyebrow: 'Le 2 octobre, heure par heure',
    title: 'Les trois styles, posés sur la <i>soirée</i>.',
    lead:
      "Chaque style a sa fenêtre, et elle ne se rattrape pas. Les plans de salle pleine n'existent qu'au pic, ceux de la matière qu'avant l'ouverture.",
    axis: { from: 17, to: 24 },
    ticks: ['17 h', '19 h', '21 h', '23 h'],
    lanes: [
      {
        name: 'La matière',
        trade: 'Salle aux trois quarts vide',
        peakFrom: 17,
        peakTo: 19.5,
        peakLabel: 'Lieu, gestes, produits',
      },
      {
        name: 'Les visages',
        trade: 'La salle se remplit',
        peakFrom: 19.5,
        peakTo: 21.5,
        peakLabel: 'Arrivées et terrasse',
      },
      {
        name: "L'énergie",
        trade: 'Salle pleine',
        peakFrom: 21,
        peakTo: 23,
        peakLabel: 'Densité et rythme',
      },
    ],
    note:
      "Ces plages sont une proposition fondée sur vos horaires d'ouverture. Vous seul savez à quelle heure votre salle bascule vraiment, et combien de monde chaque moment rassemble : c'est la première chose à corriger ensemble.",
  },

  /* --- 13. Ce qu'il nous faut de vous ----------------------------------- */
  needs: {
    eyebrow: 'De votre côté',
    title: 'Six choses, et la soirée est <i>tournable</i>.',
    lead:
      "Rien qui demande du travail. Ce sont des accès et des accords, à régler avant le 2 octobre plutôt que le soir même.",
    caption: 'La première de la liste conditionne tout le volet identité.',
    items: [
      "Votre fichier de logo d'origine, vectoriel si vous l'avez",
      "L'accès au lieu une heure avant l'ouverture, pour la lumière",
      "Un affichage à l'entrée sur le droit à l'image, que nous fournissons",
      "L'accord du personnel qui apparaîtra à l'image",
      "Le thème de la soirée et le nom de qui joue, pour écrire l'accroche",
      "Les identifiants de vos comptes, ou un accès délégué pour publier",
    ],
  },

  /* --- 14. Livrables et calendrier -------------------------------------- */
  delivery: {
    eyebrow: 'Ce que vous recevez',
    title: 'Un film, ses déclinaisons, et les <i>rushes</i>.',
    items: [
      {
        name: 'Le format vertical',
        detail: "Vingt à trente secondes, pour les Reels, TikTok et les stories. C'est celui qui circule.",
        when: 'J+7',
      },
      {
        name: 'Le format long',
        detail: 'Une minute environ, pour la page Facebook et le site. Le film que l\'on regarde en entier.',
        when: 'J+10',
      },
      {
        name: 'Les extraits courts',
        detail: 'Trois coupes de moins de dix secondes, pour annoncer la soirée suivante.',
        when: 'J+10',
      },
      {
        name: 'Les rushes',
        detail: 'Toute la matière tournée, à vous, sans limite d\'usage.',
        when: 'J+14',
      },
    ],
    note:
      "Les dates courent depuis le 2 octobre. Le format vertical sort en premier parce qu'une soirée se partage dans la semaine qui suit, pas trois semaines après.",
  },

  /* --- 15. Ce que nous ne promettons pas -------------------------------- */
  limits: {
    eyebrow: 'Ce que nous ne promettons pas',
    title: 'Quatre choses dites <i>avant</i>, pas après.',
    lead:
      "Une proposition qui ne dit que le bien se retourne au premier bilan. Voici ce sur quoi nous ne nous engageons pas.",
    items: [
      {
        title: 'Aucun chiffre de vues',
        text:
          "Personne ne peut promettre une audience avant d'avoir publié. Nous nous engageons sur le tournage, le montage et la livraison, pas sur un résultat.",
      },
      {
        title: 'Une soirée creuse se verra',
        text:
          "Nous filmons ce qui a lieu. Si la salle ne se remplit pas, aucun montage ne fera croire le contraire, et nous ne le tenterons pas.",
      },
      {
        title: 'Le son se décide en dernier',
        text:
          "Les titres proposés aujourd'hui seront à revérifier avant publication. Ce n'est pas de la prudence excessive, c'est le rythme réel des catalogues.",
      },
      {
        title: 'Nous ne gérons pas vos comptes',
        text:
          "Nous livrons les fichiers et le calendrier de publication. Publier, répondre aux commentaires et animer la communauté restent chez vous, sauf accord séparé.",
      },
    ],
  },

  /* --- 16. Les questions ouvertes --------------------------------------- */
  questions: {
    eyebrow: 'Ce que nous devons apprendre de vous',
    title: 'Six questions, et nous pouvons <i>écrire</i>.',
    items: [
      { title: 'Le thème du 2 octobre', text: 'Ce qui est prévu, qui joue, et ce qui rend cette soirée différente des autres.' },
      { title: 'L\'heure de bascule', text: 'Quand la salle est vraiment pleine, et combien de personnes cela représente chez vous.' },
      { title: 'Le style dominant', text: 'Lequel des trois doit peser le plus au montage, et ce qui vous gêne dans les autres.' },
      { title: 'Ce que vous appelez réussi', text: 'Des vues, des abonnés, ou du monde le samedi suivant. Le montage n\'est pas le même.' },
      { title: 'Le compte TikTok', text: 'Vous voulez l\'ouvrir, ou nous restons sur Instagram et Facebook.' },
      { title: 'Votre fichier de logo', text: 'Sous quelle forme vous l\'avez, et qui l\'a dessiné.' },
    ],
  },

  close: {
    eyebrow: 'La suite',
    cta: 'Un rendez-vous avant le 2 octobre',
  },

  closeTitle: 'Dites-nous ce que vous <i>gardez</i>.',
  closeLine:
    "Une heure ensemble suffit à trancher la direction, l'heure de tournage et le son. Ensuite nous écrivons le plan définitif et nous n'avons plus qu'à filmer.",
};

export { RELEVE };
