
var filmData = [
  {
    title: "Avatar",
    image: "images/avatar.jpg",
    text: `Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre.`
  },
  {
    title: "La Communauté de l'Anneau",
    image: "images/la_communaute_de_lanneau.jpg",
    text: `Le Seigneur des anneaux : La Communauté de l'anneau (The Lord of The Rings: The Fellowship of the Ring) est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2001. C'est le premier volet de la trilogie Le Seigneur des anneaux et l'adaptation du livre La Communauté de l'Anneau de J. R. R. Tolkien.
    L'histoire commence lorsque, sur la Terre du Milieu, le magicien Gandalf le Gris (Ian McKellen) découvre que l'anneau que possède le jeune Hobbit Frodon Sacquet (Elijah Wood), qui lui a été légué par son oncle Bilbon et qui lui permet de se rendre invisible, est en réalité l'Anneau unique recherché avidement par le seigneur ténébreux Sauron car il lui permettrait de retrouver toute sa puissance. Afin d'éviter que Sauron ne récupère l'anneau, Frodon et ses huit compagnons, la Communauté de l'Anneau, entament un périlleux voyage dans le but de le détruire...`
  },
  {
    title: "Gran Torino",
    image: "images/gran.jpg",
    text: `Walt Kowalski, un vétéran de la guerre de Corée, vient de perdre sa femme. Seul, misanthrope, bougon et raciste, il veille jalousement sur sa Ford Gran Torino, râlant sans cesse contre les habitants de son quartier, en majorité d'origine asiatique. Un jour, son jeune voisin, Tao, tente de lui voler sa voiture sous la pression d'un gang. Walt s'aperçoit bientôt que l'adolescent est littéralement harcelé par les jeunes caïds. Prenant la défense de Tao, Walt devient malgré lui le héros du quartier. `
  },
  {
    title: "La Guerre des Etoiles",
    image: "images/la_guerre_des_etoiles.jpg",
    text: `La Guerre des étoiles (Star Wars) est un film américain de science-fiction de type space opera sorti en 1977 écrit et réalisé par George Lucas. À partir de 2000, il est exploité sous le nom Star Wars, épisode IV : Un nouvel espoir (Star Wars: Episode IV – A New Hope).
        C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l'ordre chronologique de l'histoire. Il est le premier volet de la trilogie originale qui est constituée également des films L'Empire contre-attaque et Le Retour du Jedi. Ce film est aussi le troisième long métrage réalisé par Lucas...`
  },
  {
    title: "Avengers : Endgame",
    image: "images/avengers.jpg",
    text: `Le Titan Thanos, ayant réussi à s'approprier les six Pierres d'Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l'Univers. Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s'échapper de la dimension subatomique où il était coincé. Il propose aux Avengers une solution pour faire revenir à la vie tous les êtres disparus, dont leurs alliés et coéquipiers : récupérer les Pierres d'Infinité dans le passé.`
  },

  {
    title: "Le Retour du Roi",
    image: "images/le_retour_du_roi.jpg",
    text: `Le Seigneur des anneaux : Le Retour du roi (The Lord of the Rings: The Return of the King) est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2003. Adapté du livre Le Retour du roi de J. R. R. Tolkien, il incorpore également des événements du livre précédent, Les Deux Tours. C'est le troisième volet de la trilogie Le Seigneur des anneaux, après La Communauté de l'anneau et Les Deux Tours.
              Alors que Sauron lance ses armées à l'assaut de la Terre du Milieu, le magicien Gandalf et le roi Théoden réunissent leurs forces pour défendre la capitale du Gondor, Minas Tirith. Aragorn réclame son trône et fait appel à l'armée des Morts pour remporter la bataille des Champs du Pelennor. Pendant ce temps, les hobbits Frodon Sacquet et Samsagace Gamegie traversent le Mordor guidés par Gollum pour aller détruire l'Anneau unique à la montagne du Destin...`
  },
  {
    title: "L'Empire Contre Attaque",
    image: "images/l_empire_contre_attaque.jpg",
    text: `L'Empire contre-attaque (The Empire Strikes Back) est un film américain de science-fiction de type space opera sorti en 1980, co-écrit par George Lucas et Lawrence Kasdan, et réalisé par Irvin Kershner. À partir de l'année 2000, il est exploité sous le nom Star Wars, épisode V : L'Empire contre-attaque (Star Wars: Episode V – The Empire Strikes Back).
              C'est le deuxième opus de la saga Star Wars par sa date de sortie, mais le cinquième selon l'ordre chronologique de l'histoire. Il est le deuxième volet de la trilogie originale qui est constituée également des films Un nouvel espoir et Le Retour du Jedi.
              L'histoire de cet épisode se déroule trois ans après les événements d’Un nouvel espoir. La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein. Les héros de l’Alliance Luke Skywalker et Han Solo se séparent après la prise de la principale base rebelle par l’Empire. Luke part sur la planète Dagobah afin de suivre la formation de Jedi auprès du maître Yoda. Solo tente lui d’échapper à la chasse spatiale que lui mène Dark Vador, l’apprenti de l’Empereur Palpatine. `
  },
  {
    title: "Le Retour du Jedi",
    image: "images/le_retour_du_jedi.jpg",
    text: `Le Retour du Jedi (Return of the Jedi) est un film américain de science-fiction de type space opera sorti en 1983, co-écrit par George Lucas et Lawrence Kasdan, et réalisé par Richard Marquand. À partir de l'année 2000, il est exploité sous le nom Star Wars, épisode VI : Le Retour du Jedi (Star Wars: Episode VI – Return of the Jedi).
                C'est le troisième opus de la saga Star Wars par sa date de sortie, mais le sixième selon l'ordre chronologique de l'histoire. Il est le dernier volet de la trilogie originale qui est constituée également des films Un nouvel espoir et L'Empire contre-attaque.
                L'histoire de cet épisode se déroule un an après les événements de L'Empire contre-attaque. Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l'Alliance rebelle, son opposition principale. Pour tendre un piège à la flotte ennemie, l'empereur Palpatine se rend sur la station encore vulnérable. Les dirigeants de l'Alliance lancent donc toutes leurs forces à l'assaut ne se doutant pas que la flotte impériale les attend de pied ferme. De son côté, le jeune Jedi Luke Skywalker, l'un des héros de l'Alliance veut sauver son père Dark Vador du côté obscur de la Force et le rallier à sa cause. `
  },
  {
    title: "Django unchained",
    image: "images/Django_unchained.jpg",
    text: `Le parcours d'un chasseur de prime allemand et d'un homme noir pour retrouver la femme de ce dernier retenue en esclavage par le propriétaire d'une plantation...`
  },
  {
    title: "La Liste de Schindler",
    image: "images/list.jpg",
    text: `En 1939, Oskar Schindler, un industriel ambitieux, recrute de la main d'oeuvre juive dans une fabrique de Cracovie pour l'armée allemande. Soutenu par un comptable juif, Itzhak Stern, il va sauver d'une mort certaine plus de milles juifs dont les noms ont été réunis sur une liste.`
  },
  {
    title: "Matrix",
    image: "images/matrix.jpg",
    text: `Thomas A. Anderson (Keanu Reeves), un jeune informaticien connu dans le monde du hacking sous le pseudonyme de Neo17, est contacté via son ordinateur par ce qu’il pense être un groupe de hackers. Ils lui font découvrir que le monde dans lequel il vit n’est qu’un monde virtuel dans lequel les êtres humains sont gardés inconsciemment sous contrôle.

Morpheus (Laurence Fishburne), le capitaine du Nebuchadnezzar, contacte Néo et pense que celui-ci est l’Élu qui peut libérer les êtres humains du joug des machines et prendre le contrôle de la matrice (selon ses croyances et ses convictions).`
  },
  {
    title: "Glass",
    image: "images/Arrête-moi_si_tu_peux.jpg",
    text: `David Dunn, l'homme « incassable », se lance à la poursuite de « La Bête », la personnalité surhumaine de Kevin Wendell Crumb. Elijah Price, le « Bonhomme qui casse », en hôpital psychiatrique depuis dix-neuf ans après avoir commis des attentats pour révéler les pouvoirs de Dunn, attend cet affrontement depuis sa cellule. Cependant, le docteur Ellie Staple veut les réunir pour les libérer de ce qu'elle considère comme un délire et les convaincre que leurs capacités surhumaines ne sont qu'une illusion.`
  },
  {
    title: "Reservoir dogs",
    image: "images/Reservoir_dogs.jpg",
    text: `Après un hold-up manqué, des cambrioleurs de haut vol font leurs comptes dans une confrontation violente, pour découvrir lequel d'entre eux les a trahis.`
  }

  /*
  {
    title : "" ,
    image : "images/" ,
    text : ""
   },
   */
]
