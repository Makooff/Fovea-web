# Prompt : présentation after movie, Le J'adore lounge bar

À coller tel quel dans une nouvelle session ouverte sur la branche
`client/jadore` de ce dépôt.

---

```
Je dois présenter à mon client Salim un projet d'after movie pour une soirée
de son établissement, Le J'adore lounge bar, à Soignies. La présentation sert
deux choses à la fois : lui montrer que le travail est préparé, et le faire
parler pour savoir ce qu'il veut vraiment. Elle est signée Fovea.

AVANT D'ÉCRIRE QUOI QUE CE SOIT

1. Lis docs/CONTEXTE-CLIENT.md et docs/DESIGN-SYSTEM.md. Le premier dit qui
   est le client et ce qui est vérifié ou non, le second est la charte, qui
   fait foi. Lis aussi presentations/README.md : la chaîne de génération de
   PDF existe déjà, tu la réutilises au lieu d'en écrire une autre.

2. Cherche ce que tu ne peux pas savoir de mémoire, et dis-moi ce que tu as
   trouvé AVANT de dessiner :
   - Les comptes Instagram, Facebook et TikTok du J'adore lounge bar à
     Soignies. Existent-ils, que publient-ils, quelle audience. Si tu ne les
     trouves pas, dis-le, ne suppose pas.
   - Le logo actuel du J'adore, s'il est visible quelque part en ligne.
   - Les sons du moment sur TikTok et sur les Reels. Ta mémoire est périmée
     sur ce point par construction : une tendance dure quelques semaines.
     Cherche en direct, note la date de consultation à côté de chaque titre,
     et vérifie pour chacun s'il est utilisable par un compte professionnel
     (bibliothèque commerciale de la plateforme, ou licence à acquérir).
     Un son que tu ne peux pas sourcer ne va pas dans la présentation.
   - Deux ou trois after movies de bars ou de clubs qui servent de référence.
     Donne les liens. Dis ce qui marche dedans, précisément : la première
     seconde, le rythme de coupe, le traitement de la lumière.

3. Ce que tu ne trouves pas, tu le poses en question, tu ne le combles pas.
   La date de la soirée, le thème, l'affluence, le matériel de tournage et
   les autorisations de droit à l'image me sont inconnus au moment où
   j'écris : ils feront partie des questions de la présentation.

CE QUE DOIT CONTENIR LA PRÉSENTATION

Douze à quinze planches, une idée par planche, deux lignes de texte maximum.
Ce n'est pas un devis, c'est un document de travail qui doit donner envie et
faire décider.

Déroulé à adapter :
1. Couverture : une phrase qui nomme ce que Salim veut obtenir, pas ce que
   nous vendons.
2. Ce qu'un after movie fait pour un bar, en une planche. Pas de promesse
   chiffrée.
3. Trois ou quatre directions de concept, vraiment différentes les unes des
   autres, pas trois variantes d'une même idée. Chacune avec son nom, son
   registre, sa référence, et ce qu'elle demande le soir du tournage.
4. Une planche de références visuelles par direction, avec les liens.
5. Le son : deux ou trois pistes par direction, avec leur statut de droits et
   la date à laquelle tu les as vérifiées.
6. Le plan de tournage : ce qu'on filme, dans quel ordre, à quelles heures de
   la soirée. C'est la planche qui prouve que le travail est préparé.
7. Ce qu'il faut de la part de Salim : accès, autorisations, affichage à
   l'entrée, personnes à prévenir, créneau avant l'ouverture.
8. Les livrables : un format long, et les déclinaisons verticales par
   plateforme. Dis lesquelles et pourquoi.
9. Le calendrier : de la validation du concept à la publication.
10. Ce que nous ne promettons pas : trois ou quatre limites vraies, écrites
    franchement. Ne la retire pas, c'est elle qui fait gagner la confiance.
11. Les questions ouvertes, listées, pour qu'il y réponde en rendez-vous.
12. La prochaine étape et les coordonnées.

RÈGLES DE CONTENU, NON NÉGOCIABLES

- Aucune statistique inventée. Pas de « les Reels font 3 fois plus de vues »,
  pas d'étude sans source. Si tu avances un chiffre de plateforme, il vient
  d'une recherche datée et sourcée dans la planche, ou il ne vient pas.
- Aucune promesse de résultat. Ni vues, ni abonnés, ni affluence. On s'engage
  sur un travail, pas sur un chiffre.
- Aucun son proposé sans sa source, sa date de vérification et son statut de
  droits.
- Français avec ses accents, y compris sur les majuscules. Espaces insécables
  devant : ; ? !, dans les guillemets « », et entre un nombre et son unité.
  Pose-les par une fonction à la génération, pas à la main.
- Aucun tiret cadratin. Virgule, deux-points ou parenthèses.
- Écris comme quelqu'un qui connaît la nuit : le moment où la salle bascule,
  la lumière qui mange les visages, le fumoir, la fin de service. Le détail
  juste vaut dix adjectifs.

RÈGLES DE FORME

- La charte Fovea de docs/DESIGN-SYSTEM.md fait foi : fond #141519, accent
  #E5524A, Poppins, rayons 999 / 16 / 22 px. La présentation est signée
  Fovea, elle n'est pas aux couleurs du J'adore.
- Pas quatre cartes identiques côte à côte. Alterne les mises en page d'une
  planche à l'autre.
- Un seul mot par titre peut être mis en valeur, et il doit porter le sens.
- Rien ne descend sous le pied de page. Le garde-fou du build le vérifie.

MÉTHODE TECHNIQUE

Réutilise la chaîne de presentations/ : un fichier de contenu séparé du
gabarit, rendu par Chromium en mode impression, format donné par le CSS, et
les trois garde-fous existants. N'ajoute aucune dépendance. Le nouveau
document vit dans son propre fichier de contenu, sans casser les dix PDF
existants.

LIVRABLE

Le PDF en 16:9, la commande pour le régénérer, et un README court qui dit où
changer un concept et où changer un son. Commite sur la branche client/jadore
et ouvre une pull request en brouillon.

Commence par la recherche, et montre-la-moi avant de dessiner.
```

---

## Pourquoi ce prompt est écrit comme ça

**Il impose la recherche avant le dessin.** C'est la seule protection contre
une présentation qui a l'air travaillée et qui repose sur du vide. Sur les
comptes sociaux, sur le logo, sur les sons, un modèle de langage produit du
plausible sans effort : il faut lui demander des liens et des dates.

**Il interdit les chiffres de plateforme non sourcés.** « Les Reels font trois
fois plus de vues » est le genre de phrase qui se retourne au premier
rendez-vous, et personne dans la pièce ne sait d'où elle sort.

**Il traite les sons comme une denrée périssable.** Une tendance sonore dure
quelques semaines, les données d'entraînement ont des mois. Le statut de droits
compte autant que la tendance : un compte professionnel n'a pas accès au même
catalogue qu'un compte personnel.

**Il demande trois directions vraiment différentes.** Trois variantes de la
même idée ne font pas parler un client. Trois partis pris opposés, si.

**Il garde la planche des limites.** C'est celle qui distingue une proposition
d'une plaquette.

**Il sépare la charte de la marque du client.** La présentation est un document
Fovea remis à Salim : elle porte la charte Fovea. Le logo du J'adore est le
sujet du document, pas son habillage. Ne pas confondre les deux.
