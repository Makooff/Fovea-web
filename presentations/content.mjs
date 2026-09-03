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
  /**
   * 48 et non 52 : congés, jours fériés et fermetures annuelles. Une hypothèse
   * basse se défend en rendez-vous, une hypothèse haute se conteste.
   */
  weeksPerYear: 48,

  /** L'axe de la frise horaire du document de groupe. */
  dayAxis: { from: 7, to: 24 },
  dayTicks: ['7 h', '10 h', '13 h', '16 h', '19 h', '22 h'],
};

/* -------------------------------------------------------------------------
   Ce qui ne change pas d'un commerce à l'autre
   ------------------------------------------------------------------------- *
 * Cinq planches sur douze portent ce contenu commun : le produit, ce qui le
 * rend crédible au téléphone, ce qui reste après l'appel, la mise en route et
 * les limites. Les sept autres sont écrites commerce par commerce, et c'est là
 * que se joue la différence entre une plaquette et une proposition.
 */

export const COMMON = {
  product: {
    eyebrow: 'Ce que nous installons',
    title: 'Une voix qui décroche à la <i>première</i> sonnerie.',
    lead:
      "Une réceptionniste qui répond à votre place, jour et nuit, sur votre numéro actuel. Nous l'installons, nous la réglons sur votre métier, et nous la suivons.",
    columns: [
      {
        title: 'Elle décroche',
        text:
          "Sept jours sur sept, y compris pendant le service, pendant un essai, pendant une vente. L'appelant ne tombe jamais sur un répondeur.",
      },
      {
        title: 'Elle agit',
        text:
          "Elle pose le rendez-vous dans votre agenda, note la demande, qualifie l'appelant, et passe la ligne à un humain quand la situation le demande.",
      },
      {
        title: 'Elle vous rend compte',
        text:
          "Chaque appel laisse un résumé écrit, une fiche client et une trace de ce qui a été promis. Rien ne dépend de la mémoire de qui a décroché.",
      },
    ],
  },

  natural: {
    eyebrow: 'Au téléphone',
    title: 'Ce qui fait qu\'on ne raccroche <i>pas</i>.',
    blocks: [
      {
        title: "Elle se laisse couper",
        text:
          "Un appelant qui l'interrompt reprend la main tout de suite. Une toux ou un « mhm » ne coupe pas la phrase en cours, et une hésitation n'est jamais prise pour un accord.",
      },
      {
        title: 'Elle connaît votre maison',
        text:
          "Vos horaires, vos tarifs, vos règles et vos réponses habituelles sont dans sa fiche. Une question posée autrement trouve quand même sa réponse.",
      },
      {
        title: 'Elle reconnaît un habitué',
        text:
          "Un numéro déjà venu est salué par son prénom, avec le motif du dernier appel. On ne lui redemande pas ce qu'elle a déjà dit.",
      },
      {
        title: 'Elle sait passer la main',
        text:
          "Quand il faut un humain, elle résume la situation à voix haute à celui qui prend la ligne, puis transfère. Personne ne reprend l'appel à zéro.",
      },
    ],
  },

  record: {
    eyebrow: 'Après l\'appel',
    title: 'Ce que vous <i>récupérez</i>, appel par appel.',
    caption: 'Tout est consultable depuis un navigateur, sans rien installer.',
    items: [
      "Le résumé écrit de l'échange, en trois lignes",
      "Le nom, le numéro et le motif de l'appelant",
      "Le rendez-vous posé dans votre agenda, avec sa confirmation",
      "Ce qui a été promis, et par qui",
      "L'humeur de l'appelant, quand elle change la suite à donner",
      "L'enregistrement, annoncé au décroché comme la loi l'exige",
    ],
  },

  setup: {
    eyebrow: 'La mise en route',
    title: 'Trois étapes, et vous n\'en faites <i>qu\'une</i>.',
    steps: [
      {
        title: 'Vous nous racontez la maison',
        text:
          "Une heure au téléphone ou sur place : vos horaires, vos prestations, ce que vous refusez, ce qui doit remonter tout de suite. C'est votre seule vraie tâche.",
      },
      {
        title: 'Nous la configurons',
        text:
          "Nous écrivons sa fiche, branchons votre agenda, réglons sa voix et ses formules, puis nous l'appelons nous-mêmes jusqu'à ce que ce soit juste.",
      },
      {
        title: 'Vous écoutez, puis vous ouvrez',
        text:
          "Vous relisez les appels de test et vous corrigez ce qui vous gêne. Le renvoi de ligne se fait le jour où vous le décidez, et se retire aussi vite.",
      },
    ],
    delay: 'Comptez dix jours entre le premier rendez-vous et le premier appel réel, dont un pour vous.',
  },

  limits: {
    eyebrow: 'Ce que nous ne promettons pas',
    title: 'Les quatre choses qu\'elle ne fait <i>pas</i>.',
    lead:
      "Une proposition qui ne dit que le bien se retourne au premier mois. Voici ce que nous savons de ses limites, vérifié dans le produit, pas dans une plaquette.",
    items: [
      {
        title: "L'hébergement n'est pas européen",
        text:
          "Les serveurs sont aux États-Unis, en Oregon. Si vos données doivent rester en Europe, ce n'est pas le bon outil aujourd'hui, et nous vous le disons avant de signer.",
      },
      {
        title: "Elle ne pose un rendez-vous que si l'agenda est branché",
        text:
          "Sans agenda connecté, elle prend la demande, le nom et le créneau souhaité, mais c'est vous qui posez le rendez-vous. La différence est réelle, elle se règle en dix minutes.",
      },
      {
        title: 'Les rappels de la veille ne sont pas sur toutes les formules',
        text:
          "Le message qui rappelle son rendez-vous au client la veille existe sur les deux formules hautes seulement. Sur les deux premières, il n'y a pas de rappel automatique.",
      },
      {
        title: 'Elle ne remplace pas votre meilleur vendeur',
        text:
          "Elle décroche, elle qualifie, elle note et elle transfère. Elle ne négocie pas un prix, ne conclut pas une vente et ne prend pas de décision à votre place.",
      },
    ],
  },

  close: {
    eyebrow: 'La suite',
    cta: 'Un appel de démonstration, sur votre métier',
  },
};

/* -------------------------------------------------------------------------
   Les quatre commerces
   ------------------------------------------------------------------------- *
 * Champs obligatoires : slug, label, trade, coverLabel, cover, pain, cost,
 * call, during, gains, recordLead, closeTitle, closeLine.
 * Pour ajouter un cinquième commerce, copiez l'objet du bar, qui est le plus
 * court, et ajoutez sa voie dans GROUP.contrast.lanes.
 */

export const SECTORS = [
  /* ---------------------------------------------------------------------- */
  {
    slug: 'concession-automobile',
    label: 'Concession automobile',
    trade: 'Vente, atelier et pièces',
    coverLabel: 'Concession automobile',
    kind: 'sector',

    cover: {
      title: 'Vente, atelier, pièces.<br>Un seul <i>téléphone</i>.',
      lead:
        "Tous vos appels arrivent sur la même ligne, aux heures où votre équipe est en showroom ou sous un capot. Voici ce qu'une réceptionniste qui décroche vraiment change à votre semaine.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: "Le samedi à 11 h, personne n'est libre pour <i>répondre</i>.",
      lead:
        "Ce n'est pas un défaut d'organisation. C'est le moment où vos clients sont disponibles, donc celui où ils appellent, donc celui où vous êtes tous en clientèle.",
      steps: [
        {
          mark: '0 s',
          text: "Le téléphone sonne à l'accueil. Deux clients attendent au comptoir, un troisième part en essai.",
        },
        {
          mark: '25 s',
          text: "L'appelant tombe sur la messagerie. Il ne laisse pas de message : il a trois autres annonces ouvertes.",
        },
        {
          mark: '2 min',
          text: 'Le même modèle est en vente à trente kilomètres. Là-bas, quelqu\'un décroche.',
        },
        {
          mark: 'Lundi',
          text: "Vous rappelez. L'essai est déjà réservé ailleurs, et rien dans votre semaine ne dira que cet appel valait une vente.",
        },
      ],
    },

    cost: {
      title: 'Ce que le samedi matin vous coûte, <i>calculé</i> devant vous.',
      missed: 5,
      oneIn: 10,
      value: 900,
      valueLabel: 'Marge sur une vente',
      valueNote: 'Votre marge moyenne sur un véhicule d\'occasion, à corriger avec la vôtre.',
      outcome: 'ressort',
    },

    call: {
      eyebrow: 'Un appel, samedi 11 h 04',
      title: 'Elle ne note pas la demande.<br>Elle la <i>traite</i>.',
      lines: [
        {
          who: 'caller',
          text: 'Bonjour, la Golf grise annoncée à 18 900 €, elle est toujours disponible ?',
          note: "Vos annonces et votre stock sont dans sa fiche. Ce qui part le matin, elle le sait à l'appel suivant.",
        },
        {
          who: 'agent',
          text: "Oui, elle est encore là. Vous voulez l'essayer ? J'ai samedi 11 h ou lundi 17 h.",
        },
        { who: 'caller', text: "Samedi. Et j'ai une Clio à reprendre." },
        {
          who: 'agent',
          text: 'Je note la reprise. Année, kilométrage, état général ? Le vendeur aura tout avant votre venue.',
          note: 'Reprise, budget, financement : la qualification est faite avant que le vendeur ouvre le dossier.',
        },
        { who: 'caller', text: '2016, 94 000 km, rien à signaler.' },
        {
          who: 'agent',
          text: "C'est réservé samedi à 11 h. Vous recevez la confirmation par message.",
          note: "Le rendez-vous existe dans l'agenda avant qu'elle raccroche, et le vendeur reçoit le résumé.",
        },
      ],
    },

    during: {
      eyebrow: 'Pendant l\'appel',
      title: 'Quatre choses qu\'un répondeur ne fait <i>pas</i>.',
      items: [
        {
          title: 'Elle oriente vers le bon service',
          text:
            "Une révision ne va pas au vendeur, une demande de pièce ne va pas à l'atelier. Elle sait qui traite quoi, et à quelle heure chacun est joignable.",
        },
        {
          title: 'Elle qualifie la reprise',
          text:
            "Année, kilométrage, état, immatriculation : le vendeur ouvre le dossier en sachant déjà s'il y a une affaire à faire.",
        },
        {
          title: 'Elle protège votre samedi',
          text:
            "Le démarchage et les appels hors sujet ne remontent pas. Ce qui arrive sur votre téléphone est ce qui vaut un déplacement.",
        },
        {
          title: "Elle tient la ligne à l'heure de fermeture",
          text:
            "Le client qui appelle à 19 h 30 après son travail trouve quelqu'un. C'est souvent celui qui a le budget et pas le temps.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour une concession',
      title: 'Quatre choses qui changent dès le <i>premier</i> samedi.',
      items: [
        {
          title: 'Aucun essai perdu faute de réponse',
          text: "Le créneau se pose pendant l'appel, pas au rappel du lundi, quand la voiture est vendue ailleurs.",
        },
        {
          title: 'Le vendeur arrive préparé',
          text: "Reprise, budget, modèle visé : tout est écrit avant la poignée de main. L'entretien commence là où il finissait avant.",
        },
        {
          title: "L'atelier se remplit tout seul",
          text: 'Révisions et contrôles se prennent par téléphone à toute heure, sans mobiliser un poste à l\'accueil.',
        },
        {
          title: 'Vous savez enfin ce que vous manquiez',
          text: 'Chaque appel laisse une trace. Le volume réel du samedi matin cesse d\'être une impression.',
        },
      ],
    },

    recordLead:
      "Le lundi matin, vous ouvrez la liste du week-end : qui a appelé, pour quel véhicule, ce qui a été promis, et les essais déjà posés dans l'agenda.",

    closeTitle: 'Écoutez-la répondre sur <i>votre</i> stock.',
    closeLine:
      "Nous la configurons sur trois de vos annonces et vous l'appelez vous-même. Vous jugez sur la voix, pas sur une promesse.",
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: 'patisserie-trompe-loeil',
    label: 'Pâtisserie en trompe-l\'œil',
    trade: 'Commandes sur mesure',
    coverLabel: 'Pâtisserie en trompe-l\'œil',
    kind: 'sector',

    cover: {
      title: 'Vos mains sont dans la <i>ganache</i>.<br>Le téléphone sonne.',
      lead:
        "Une commande en trompe-l'œil se discute, se dessine et se date. Elle ne se prend pas entre deux fournées, et elle ne se rattrape pas par un rappel deux jours plus tard.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: 'La commande la plus rentable arrive au pire <i>moment</i>.',
      lead:
        "Les demandes sur mesure tombent le matin, pendant la production, et le samedi, pendant le coup de feu de la boutique. Jamais quand vous êtes disponible.",
      steps: [
        {
          mark: '7 h 40',
          text: 'Vous êtes au tour, les mains prises. Le téléphone sonne trois fois, puis s\'arrête.',
        },
        {
          mark: '9 h 15',
          text: "Une cliente veut un gâteau anniversaire en trompe-l'œil pour dans quinze jours. Elle laisse un message inaudible, sans numéro clair.",
        },
        {
          mark: '11 h 00',
          text: 'Vous rappelez trois fois dans la journée. Elle est au travail, vous êtes en production.',
        },
        {
          mark: 'J+2',
          text: "Vous vous parlez enfin. Le délai ne tient plus : un trompe-l'œil demande dix jours, et il en reste huit.",
        },
      ],
    },

    cost: {
      title: 'Ce que les commandes non prises <i>pèsent</i> sur une année.',
      missed: 8,
      oneIn: 6,
      value: 120,
      valueLabel: 'Panier moyen sur commande',
      valueNote: 'Une pièce sur mesure de taille moyenne, hors pièce montée.',
      outcome: 'ressort',
    },

    call: {
      eyebrow: 'Un appel, mardi 9 h 12',
      title: 'Elle prend la commande <i>entièrement</i>.',
      lines: [
        {
          who: 'caller',
          text: "Bonjour, je voudrais un gâteau qui ressemble à un sac à main, pour le 22.",
          note: "Le 22 est dans onze jours : le délai de dix jours tient. Elle le sait avant de répondre.",
        },
        {
          who: 'agent',
          text: "Le 22, c'est jouable. Combien de parts, et une préférence de parfum ?",
        },
        { who: 'caller', text: 'Douze parts. Chocolat, et il y a une allergie aux fruits à coque.' },
        {
          who: 'agent',
          text: "Noté, sans fruits à coque, c'est signalé en production. Je vous mets au retrait le 22 avant midi ?",
          note: "L'allergène part dans la fiche de commande, pas dans un post-it sur le plan de travail.",
        },
        { who: 'caller', text: 'Parfait. Et je peux envoyer une photo du modèle ?' },
        {
          who: 'agent',
          text: "Oui, au numéro de la boutique. Le pâtissier vous rappelle demain pour valider le dessin et l'acompte.",
          note: 'Ce qui demande un avis de métier est transmis, pas décidé à votre place.',
        },
      ],
    },

    during: {
      eyebrow: 'Pendant l\'appel',
      title: 'Quatre choses qu\'un répondeur ne fait <i>pas</i>.',
      items: [
        {
          title: 'Elle tient le calendrier de production',
          text:
            "Elle connaît le délai d'un trompe-l'œil et refuse une date intenable plutôt que de vous mettre dans l'embarras la veille.",
        },
        {
          title: 'Elle demande les allergènes',
          text:
            "La question est posée à chaque commande, systématiquement, et la réponse arrive écrite dans la fiche. Ce n'est plus une chose dont on se souvient.",
        },
        {
          title: 'Elle sépare la boutique du sur-mesure',
          text:
            "Un renseignement sur les horaires ne vous dérange pas. Une commande à 300 € arrive sur votre téléphone dans la minute.",
        },
        {
          title: 'Elle répond le dimanche',
          text:
            "C'est le jour où l'on organise un anniversaire, et le jour où votre laboratoire est fermé. La demande est prise, vous la traitez lundi.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour une pâtisserie sur mesure',
      title: 'Quatre choses qui changent dès la <i>première</i> semaine.',
      items: [
        {
          title: 'Plus de commande perdue au message vocal',
          text: 'La demande est prise en entier au premier appel, avec la date, les parts et les allergènes.',
        },
        {
          title: 'Des délais qui tiennent',
          text: "Une date impossible est refusée pendant l'appel, pas découverte trois jours avant le retrait.",
        },
        {
          title: 'Vos mains restent dans la production',
          text: 'Vous ne vous arrêtez plus pour décrocher, et vous ne passez plus vos après-midi à rappeler.',
        },
        {
          title: 'La saison se prépare au lieu de se subir',
          text: 'Fêtes, communions, Noël : les demandes arrivent classées et datées, avec un mois de visibilité.',
        },
      ],
    },

    recordLead:
      "Chaque commande arrive écrite : la date de retrait, le nombre de parts, le parfum, les allergènes et la photo du modèle attendu.",

    closeTitle: 'Faites-lui prendre une <i>commande</i>.',
    closeLine:
      "Nous la réglons sur vos délais et vos parfums, et vous l'appelez comme une cliente. Vous verrez tout de suite si elle sait dire non à une date trop courte.",
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: 'bar',
    label: 'Bar',
    trade: 'Service et réservations',
    coverLabel: 'Bar',
    kind: 'sector',

    cover: {
      title: 'À 19 h, personne <i>n\'entend</i> le téléphone.',
      lead:
        "C'est l'heure où l'on réserve pour ce soir, et l'heure où votre équipe est au comptoir. Les deux ne peuvent pas tenir ensemble.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: 'Le téléphone sonne au moment du coup de <i>feu</i>.',
      lead:
        "Le bruit couvre la sonnerie, les mains sont prises, et la table de douze qui cherchait la salle du fond appelle le bar d'à côté.",
      steps: [
        { mark: '18 h 45', text: 'La salle se remplit, le comptoir ne désemplit pas. Le téléphone sonne derrière la caisse.' },
        {
          mark: '18 h 47',
          text: 'Un groupe de douze cherche une table pour 20 h. Personne ne décroche, personne ne l\'a entendu.',
        },
        { mark: '19 h 10', text: "Ils rappellent une fois, puis essaient l'adresse suivante." },
        {
          mark: '20 h 00',
          text: 'La salle du fond reste vide, et rien nulle part ne dira qu\'elle aurait pu être pleine.',
        },
      ],
    },

    cost: {
      title: 'Ce qu\'une salle vide un soir sur deux <i>représente</i>.',
      missed: 10,
      oneIn: 8,
      value: 180,
      valueLabel: 'Addition moyenne, table de groupe',
      valueNote: 'Une tablée de six à douze, boissons et planches. À corriger avec votre ticket.',
      outcome: 'ressort',
    },

    call: {
      eyebrow: 'Un appel, vendredi 18 h 47',
      title: 'Elle prend la <i>table</i>, pas un message.',
      lines: [
        {
          who: 'caller',
          text: 'Bonsoir, vous auriez de la place pour douze ce soir vers 20 h ?',
          note: 'Votre plan de salle et vos capacités sont dans sa fiche : elle sait ce que douze veut dire chez vous.',
        },
        {
          who: 'agent',
          text: "Pour douze, c'est la salle du fond. Elle est libre à 20 h, je vous la réserve ?",
        },
        { who: 'caller', text: 'Oui. Et on peut manger un morceau ?' },
        {
          who: 'agent',
          text: "Planches et petite restauration jusqu'à 22 h 30. Je note douze couverts.",
          note: 'La cuisine est prévenue par le même canal, avant le coup de feu, pas pendant.',
        },
        { who: 'caller', text: 'Nickel. Au nom de Lemaire.' },
        {
          who: 'agent',
          text: 'Réservé, salle du fond, 20 h, douze personnes. Confirmation par message.',
          note: "La réservation existe avant qu'elle raccroche, et personne au bar n'a lâché son service.",
        },
      ],
    },

    during: {
      eyebrow: 'Pendant l\'appel',
      title: 'Quatre choses qu\'un répondeur ne fait <i>pas</i>.',
      items: [
        {
          title: 'Elle connaît votre plan de salle',
          text:
            "Douze en terrasse ou douze au fond, ce n'est pas la même soirée. Elle place le groupe là où il tient, et le dit à l'appelant.",
        },
        {
          title: 'Elle ne quitte jamais le comptoir',
          text:
            "Votre équipe reste en service. Le téléphone cesse d'être une interruption à chaque tournée.",
        },
        {
          title: 'Elle prend les demandes de privatisation',
          text:
            "Anniversaire, afterwork, départ en retraite : la demande arrive avec la date, le nombre et le budget, pas avec un rappel à passer.",
        },
        {
          title: 'Elle répond après la fermeture',
          text:
            "Celui qui organise sa soirée le fait souvent la veille à 23 h. Il trouve une réponse au lieu d'un répondeur.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour un bar',
      title: 'Quatre choses qui changent dès le <i>premier</i> vendredi.',
      items: [
        {
          title: 'La salle du fond se remplit',
          text: 'Les groupes qui appelaient pendant le service trouvent quelqu\'un, et réservent au lieu d\'essayer ailleurs.',
        },
        {
          title: 'Votre équipe reste au bar',
          text: 'Plus personne ne traverse la salle pour décrocher pendant le rush.',
        },
        {
          title: 'Les privatisations arrivent qualifiées',
          text: 'Date, nombre, budget et occasion sont écrits avant que vous rappeliez.',
        },
        {
          title: 'La soirée se prépare avant 19 h',
          text: 'La cuisine et la salle savent ce qui les attend, au lieu de découvrir douze couverts à 20 h.',
        },
      ],
    },

    recordLead:
      "Avant le service, vous ouvrez la liste du soir : les tables prises, les groupes, les couverts annoncés et les demandes de privatisation en attente.",

    closeTitle: 'Appelez-la un <i>vendredi</i> soir.',
    closeLine:
      "Nous la réglons sur votre plan de salle et vos horaires de cuisine, et vous l'appelez à l'heure du rush. C'est le seul test qui compte.",
  },

  /* ---------------------------------------------------------------------- */
  {
    slug: 'parfumerie',
    label: 'Parfumerie',
    trade: 'Conseil et réassort',
    coverLabel: 'Parfumerie',
    kind: 'sector',

    cover: {
      title: 'Un conseil au <i>comptoir</i>.<br>Un appel sans réponse.',
      lead:
        "Vendre un parfum demande d'être avec la cliente, pas au téléphone. Mais celle qui appelle veut savoir si vous avez encore son flacon, et elle n'attendra pas.",
    },

    pain: {
      eyebrow: 'Le problème',
      title: 'Vous ne pouvez pas <i>quitter</i> une cliente au comptoir.',
      lead:
        "Un conseil se donne en dix minutes, sur des touches et une peau. Pendant ce temps, la ligne sonne dans le vide, et personne ne peut décemment y aller.",
      steps: [
        { mark: '16 h 20', text: "Vous faites essayer trois sillages. La cliente hésite, c'est le bon moment." },
        {
          mark: '16 h 22',
          text: 'Le téléphone sonne. Une personne cherche un coffret précis avant de se déplacer.',
        },
        { mark: '16 h 25', text: "Elle raccroche. Elle ne sait pas si vous l'avez, donc elle ne vient pas." },
        {
          mark: 'Décembre',
          text: 'Le même scénario dix fois par jour pendant six semaines, au moment où chaque visite compte double.',
        },
      ],
    },

    cost: {
      title: 'Ce que les appels sans réponse <i>coûtent</i> à l\'année.',
      missed: 6,
      oneIn: 7,
      value: 85,
      valueLabel: 'Panier moyen',
      valueNote: 'Un flacon de taille courante, hors coffret et hors fêtes.',
      outcome: 'ressort',
    },

    call: {
      eyebrow: 'Un appel, jeudi 16 h 22',
      title: 'Elle fait <i>venir</i> la cliente en boutique.',
      lines: [
        {
          who: 'caller',
          text: 'Bonjour, est-ce que vous avez encore le coffret de Noël de la maison italienne, en 100 ml ?',
          note: 'Vos marques, vos formats et vos règles de réservation sont dans sa fiche.',
        },
        {
          who: 'agent',
          text: "Je vous mets une conseillère sur la référence exacte. Vous passez aujourd'hui ou demain ?",
        },
        { who: 'caller', text: 'Demain en fin de journée, si vous le gardez.' },
        {
          who: 'agent',
          text: "Je note une mise de côté à votre nom pour demain 18 h. Votre nom et un numéro ?",
          note: 'La mise de côté est écrite, datée et nominative : elle ne dépend plus de qui était là.',
        },
        { who: 'caller', text: 'Sanchez, et le numéro de ce téléphone.' },
        {
          who: 'agent',
          text: "C'est noté. Si le format n'est plus en rayon, on vous prévient avant votre venue.",
          note: 'Ce qui demande une vérification en rayon vous revient, au lieu de faire déplacer la cliente pour rien.',
        },
      ],
    },

    during: {
      eyebrow: 'Pendant l\'appel',
      title: 'Quatre choses qu\'un répondeur ne fait <i>pas</i>.',
      items: [
        {
          title: 'Elle vous laisse au comptoir',
          text:
            "La vente en cours ne s'interrompt plus. Le conseil qui allait conclure va au bout, et l'appel est traité quand même.",
        },
        {
          title: 'Elle note les mises de côté',
          text:
            "Nom, référence, format et heure de passage. Une réservation cesse de vivre sur un bout de papier près de la caisse.",
        },
        {
          title: 'Elle tient les six semaines de décembre',
          text:
            "Le volume d'appels triple, et elle décroche pareil au dixième comme au premier. Votre équipe ne fait que vendre.",
        },
        {
          title: 'Elle oriente vers une conseillère',
          text:
            "Une question de peau, de tenue ou d'allergie ne se traite pas au téléphone : elle passe la main plutôt que d'improviser.",
        },
      ],
    },

    gains: {
      eyebrow: 'Pour une parfumerie',
      title: 'Quatre choses qui changent avant les <i>fêtes</i>.',
      items: [
        {
          title: 'Les appels deviennent des visites',
          text: 'Celle qui appelle pour savoir si vous avez le flacon repart avec une heure de passage, pas avec un doute.',
        },
        {
          title: 'Le conseil au comptoir va au bout',
          text: "Plus d'interruption au moment où la cliente se décide, donc moins de ventes perdues sur le fil.",
        },
        {
          title: 'Les mises de côté sont écrites',
          text: 'Une réservation ne dépend plus de la personne qui l\'a prise, ni de sa mémoire le lendemain.',
        },
        {
          title: 'Décembre devient tenable',
          text: 'Le pic saisonnier ne se traduit plus par des appels perdus, au moment où ils valent le plus cher.',
        },
      ],
    },

    recordLead:
      "Chaque soir, vous relisez les demandes du jour : les références cherchées, les mises de côté à préparer et les clientes annoncées pour le lendemain.",

    closeTitle: 'Testez-la sur vos <i>marques</i>.',
    closeLine:
      "Nous la configurons sur vos maisons et vos formats, et vous l'appelez comme une cliente pressée. Vous jugez sur ce qu'elle répond, pas sur ce que nous écrivons.",
  },
];

/* -------------------------------------------------------------------------
   Le document de groupe
   ------------------------------------------------------------------------- *
 * L'argument central : aucun de ces quatre commerces ne justifie une
 * standardiste à lui seul, et chacun en mérite une quand même.
 */

export const GROUP = {
  slug: 'groupe',
  label: 'Les quatre commerces',
  trade: 'Document de groupe',
  coverLabel: 'Document de groupe',
  kind: 'group',

  cover: {
    title: 'Quatre commerces.<br>Quatre lignes qui <i>sonnent</i> dans le vide.',
    lead:
      "Aucun de vos quatre commerces ne justifie d'embaucher quelqu'un à l'accueil. Chacun perd pourtant des clients faute de décrocher, et ce n'est jamais aux mêmes heures.",
  },

  pain: {
    eyebrow: 'Le problème',
    title: 'Le même problème, quatre fois, à quatre <i>heures</i> différentes.',
    lead:
      "Un standard mutualisé ne marcherait pas : vos quatre commerces n'ont ni les mêmes horaires, ni la même clientèle, ni les mêmes questions. C'est précisément ce qui rend le poste impossible à créer.",
    steps: [
      { mark: '7 h 40', text: 'La pâtisserie est en production. Le laboratoire ne peut pas décrocher.' },
      { mark: '11 h 00', text: 'La concession est en essai et en showroom. Le samedi, tout le monde est en clientèle.' },
      { mark: '16 h 20', text: 'La parfumerie conseille au comptoir. Quitter une cliente coûte la vente.' },
      { mark: '18 h 45', text: 'Le bar entre en service. Personne n\'entend la sonnerie derrière le comptoir.' },
    ],
  },

  contrast: {
    eyebrow: 'Pourquoi un seul standard ne suffirait pas',
    title: 'Vos quatre téléphones ne sonnent pas aux mêmes <i>heures</i>.',
    lead:
      "Chaque barre marque la plage où la ligne sonne le plus, d'après vos propres observations. Les quatre ne se recouvrent presque jamais.",
    lanes: [
      {
        name: 'Concession',
        trade: 'Le samedi surtout',
        peakFrom: 9,
        peakTo: 12.5,
        peakLabel: 'Samedi matin',
      },
      {
        name: 'Pâtisserie',
        trade: 'Avant et pendant la production',
        peakFrom: 7,
        peakTo: 10.5,
        peakLabel: 'Tôt le matin',
      },
      {
        name: 'Parfumerie',
        trade: 'Fin de journée, et décembre',
        peakFrom: 15,
        peakTo: 19,
        peakLabel: 'Fin d\'après-midi',
      },
      {
        name: 'Bar',
        trade: 'Le soir, du jeudi au samedi',
        peakFrom: 18,
        peakTo: 23,
        peakLabel: 'Service du soir',
      },
    ],
    note:
      "Ces plages sont à confirmer avec vous : elles viennent de la logique du métier, pas d'une mesure. Une configuration par commerce est de toute façon nécessaire, quelles que soient les heures exactes.",
  },

  groupCost: {
    title: 'Quatre manques à gagner, un seul <i>total</i>.',
    text:
      "Pris séparément, aucun de ces montants ne justifie de créer un poste. Additionnés, ils paient largement quatre lignes qui décrochent, et il reste de la marge.",
  },

  call: {
    eyebrow: 'Un appel, samedi 11 h 04, à la concession',
    title: 'Une seule mécanique, <i>quatre</i> configurations.',
    lines: [
      {
        who: 'caller',
        text: 'Bonjour, la Golf grise annoncée à 18 900 €, elle est toujours disponible ?',
        note: "La même réceptionniste, sur la ligne de la pâtisserie, aurait parlé de parts et d'allergènes.",
      },
      {
        who: 'agent',
        text: "Oui, elle est encore là. Vous voulez l'essayer ? J'ai samedi 11 h ou lundi 17 h.",
      },
      { who: 'caller', text: "Samedi. Et j'ai une Clio à reprendre." },
      {
        who: 'agent',
        text: 'Je note la reprise. Année, kilométrage, état général ?',
        note: 'Ce sont vos règles à vous qui décident des questions posées, commerce par commerce.',
      },
      {
        who: 'agent',
        text: "C'est réservé samedi à 11 h. Vous recevez la confirmation par message.",
        note: "Chaque commerce garde son agenda, son numéro et ses réponses. Rien n'est mutualisé côté client.",
      },
    ],
  },

  during: {
    eyebrow: 'Ce que le groupe y gagne',
    title: 'Quatre lignes, une seule <i>lecture</i>.',
    items: [
      {
        title: 'Chaque commerce garde son identité',
        text:
          "Son numéro, sa voix, ses horaires et ses réponses. Un appelant ne saura jamais que les quatre partagent un outil.",
      },
      {
        title: 'Vous lisez les quatre au même endroit',
        text:
          "Les appels, les rendez-vous et les demandes remontent dans la même interface, filtrables par commerce.",
      },
      {
        title: 'Une configuration sert de modèle aux suivantes',
        text:
          "Le premier commerce demande une heure de votre temps. Les trois autres démarrent plus vite, parce que la méthode est déjà rodée.",
      },
      {
        title: 'Un cinquième commerce se branche pareil',
        text:
          "Si vous ouvrez ailleurs, la ligne se configure sur le même modèle, sans repartir de zéro.",
      },
    ],
  },

  gains: {
    eyebrow: 'Pour le groupe',
    title: 'Quatre décisions que ça vous <i>évite</i>.',
    items: [
      {
        title: "Ne pas créer un poste d'accueil",
        text: "Un standard salarié coûterait plus que les quatre lignes réunies, et ne couvrirait pas le soir ni le dimanche.",
      },
      {
        title: 'Ne pas arbitrer entre vos commerces',
        text: 'Aucun n\'a besoin d\'attendre son tour : les quatre démarrent dans le même mois.',
      },
      {
        title: "Ne pas mutualiser ce qui ne se mutualise pas",
        text: 'Les horaires, les clientèles et les questions restent propres à chaque enseigne.',
      },
      {
        title: 'Ne pas piloter à l\'aveugle',
        text: "Le volume d'appels de chaque commerce devient un chiffre, comparable d'un mois à l'autre.",
      },
    ],
  },

  recordLead:
    "Chaque lundi, vous ouvrez une seule page : les appels des quatre commerces, ce qui a été pris, ce qui a été promis, et ce qui attend une réponse de votre part.",

  closeTitle: 'Commençons par <i>un</i> commerce.',
  closeLine:
    "Choisissez celui qui perd le plus d'appels, nous l'installons en dix jours. Les trois autres suivent une fois que vous avez entendu le premier.",
};

/** Les cinq documents produits, dans l'ordre de génération. */
export const DOCS = [...SECTORS, GROUP];
