/* RECUPERER LA STRUCTURE DE LA PAGE HTML */

let main = document.querySelector ("main");
let section = document.createElement("section");
section.id = 'sectionSolutions'
main.appendChild(section)


/* CREER UN OBJET CONTENANT TOUS LES ONGLETS ET SOLUTIONS RESPECTIVES */

let solutions = [
    {
        id: 1,
        titre: "High School Life",
        image: 'url(images/pc_hsl.png)',
        episodes: [{
            id: 'hsl1',
            titre_principal: "Épisode 1 : ",
            titre_secondaire: "Un nouveau lycée",
            guides: [
                {
                    id: "hsl1Guide",
                    name: "Guide",
                    content: "Vous trouverez prochainement ici le guide général de l'épisode 1 d'Amour Sucré - High School Life."
                },
                {
                    id: "hsl1Perso1",
                    name: "Perso 1",
                    content: "Ici seront répertoriés tous les dialogues de l'épisode 1 d'Amour Sucré - High School Life avec le 1er personnage."
                },
                {
                    id: "hsl1Perso2",
                    name: "Perso 2",
                    content: "Ici seront répertoriés tous les dialogues de l'épisode 1 d'Amour Sucré - High School Life avec le 2ème personnage."
                },
                {
                    id: "hsl1Perso3",
                    name: "Perso 3",
                    content: "Ici seront répertoriés tous les dialogues de l'épisode 1 d'Amour Sucré - High School Life avec le 3ème personnage."
                }
            ]
        },
        {
            id: 'hsl2',
            titre_principal: "Épisode 2 : ",
            titre_secondaire: "Découverte des clubs du lycée",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl3',
            titre_principal: "Épisode 3 : ",
            titre_secondaire: "Urgence, chien perdu !",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl4',
            titre_principal: "Épisode 4 : ",
            titre_secondaire: "Le fantôme du lycée.",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl5',
            titre_principal: "Épisode 5 : ",
            titre_secondaire: "Les débuts de Sherlock Sucrette",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl6',
            titre_principal: "Épisode 6 : ",
            titre_secondaire: "Cupidon en grève.",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl7',
            titre_principal: "Épisode 7 : ",
            titre_secondaire: "Pyjama party",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl8',
            titre_principal: "Épisode 8 : ",
            titre_secondaire: "La course aux révisions",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl9',
            titre_principal: "Épisode 9 : ",
            titre_secondaire: "Les pieds dans l'eau.",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl10',
            titre_principal: "Épisode 10 : ",
            titre_secondaire: "Retour de vacances mouvementé",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl11',
            titre_principal: "Épisode 11 : ",
            titre_secondaire: "La course d'orientation",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl12',
            titre_principal: "Épisode 12 : ",
            titre_secondaire: "Tout le monde s'emmêle",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl13',
            titre_principal: "Épisode 13 : ",
            titre_secondaire: "On monte le son ! (Première partie)",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl14',
            titre_principal: "Épisode 14 : ",
            titre_secondaire: "On monte le son ! (deuxième partie)",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl15',
            titre_principal: "Épisode 15 : ",
            titre_secondaire: "Un saut dans le temps",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl16',
            titre_principal: "Épisode 16 : ",
            titre_secondaire: "Un masque parfait",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl17',
            titre_principal: "Épisode 17 : ",
            titre_secondaire: "Le masque se brise",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl18',
            titre_principal: "Épisode 18 : ",
            titre_secondaire: "SOS lapins",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl19',
            titre_principal: "Épisode 19 : ",
            titre_secondaire: "Retrouvailles inattendues",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl20',
            titre_principal: "Épisode 20 : ",
            titre_secondaire: "Acte 1 Les Coulisses",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl21',
            titre_principal: "Épisode 21 : ",
            titre_secondaire: "Acte II - En scène !",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl22',
            titre_principal: "Épisode 22 : ",
            titre_secondaire: "Acte III - Jeu de Piste",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl23',
            titre_principal: "Épisode 23 : ",
            titre_secondaire: "La Maison des secrets",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl24',
            titre_principal: "Épisode 24 : ",
            titre_secondaire: "Boules de poils",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl25',
            titre_principal: "Épisode 25 : ",
            titre_secondaire: "Réactions chimiques",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl26',
            titre_principal: "Épisode 26 : ",
            titre_secondaire: "Déjeuners sur l'herbe",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl27',
            titre_principal: "Épisode 27 : ",
            titre_secondaire: "La ronde des sentiments",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl28',
            titre_principal: "Épisode 28 : ",
            titre_secondaire: "Un dîner pas si parfait",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl29',
            titre_principal: "Épisode 29 : ",
            titre_secondaire: "L'amour de l'art",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl30',
            titre_principal: "Épisode 30 : ",
            titre_secondaire: "L'amour de l'art, partie 2",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl31',
            titre_principal: "Épisode 31 : ",
            titre_secondaire: "État d'urgence",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl32',
            titre_principal: "Épisode 32 : ",
            titre_secondaire: "Vivons heureux, vivons cachés",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl33',
            titre_principal: "Épisode 33 : ",
            titre_secondaire: "Le fruit du hasard",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl34',
            titre_principal: "Épisode 34 : ",
            titre_secondaire: "Messages inquiétants",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl35',
            titre_principal: "Épisode 35 : ",
            titre_secondaire: "Enquête sur le net",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl36',
            titre_principal: "Épisode 36 : ",
            titre_secondaire: "Le prix de la vérité",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl37',
            titre_principal: "Épisode 37 : ",
            titre_secondaire: "Sous influence",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl38',
            titre_principal: "Épisode 38 : ",
            titre_secondaire: "Le poids du passé",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl39',
            titre_principal: "Épisode 39 : ",
            titre_secondaire: "Résultats des courses",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            id: 'hsl40',
            titre_principal: "Épisode 40 : ",
            titre_secondaire: "Vivre et laisser vivre",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        }
    ]},
    {
        id: 2,
        titre: "Campus Life",
        image: 'url(images/pc_cl.png)',
        episodes: [{
            titre_principal: "Épisode 1 : ",
            titre_secondaire: "Retrouvailles",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 2 : ",
            titre_secondaire: "Premiers jours de cours",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 3 : ",
            titre_secondaire: "Opération : Cupidon",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 4 : ",
            titre_secondaire: "Crowstorm",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 5 : ",
            titre_secondaire: "Café surprise",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 6 : ",
            titre_secondaire: "Secrets et confidences",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 7 : ",
            titre_secondaire: "Vague d’émotions",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 8 : ",
            titre_secondaire: "Sous pression",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 9 : ",
            titre_secondaire: "Soirée folle",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 10 : ",
            titre_secondaire: "Premier rendez-vous",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 11 : ",
            titre_secondaire: "Incertitudes...",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 12 : ",
            titre_secondaire: "Déconnexion",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 13 : ",
            titre_secondaire: "Reconnexion",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 14 : ",
            titre_secondaire: "Soleil couchant",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 15 : ",
            titre_secondaire: "Roller Coaster émotionnel",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 16 : ",
            titre_secondaire: "Dans tes bras",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 17 : ",
            titre_secondaire: "Dernière ligne droite",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 18 : ",
            titre_secondaire: "Présentations officielles",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 19 : ",
            titre_secondaire: "Rétrospective",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 20 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        }
    ]},
    {
        id: 3,
        titre: "Love Life",
        image: 'url(images/pc_ll.png)',
        episodes: [{
            titre_principal: "Épisode 1 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 2 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 3 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 4 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 5 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 6 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 7 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 8 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 9 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        },
        {
            titre_principal: "Épisode 10 : ",
            titre_secondaire: "",
            guides: [
                {
                    Guide: ""
                },
                {
                    'Perso 1': ""
                },
                {
                    'Perso 2': ""
                },
                {
                    'Perso 3': ""
                }
            ]
        }
    ]},
    {
        id: 4,
        titre: "Alternate Life",
        image: 'url(images/pc_al.png)',
        alternate: [
            {
                id: 'kentin',
                img: '<img src="images/pc_al_kentin.png">',
                nom: 'Kentin',
                episodes: [
                    {
                        titre_principal: "Épisode 1 : ",
                        titre_secondaire: "Un souvenir bien vivant",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 2 : ",
                        titre_secondaire: "Ces jours sans toi",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 3 : ",
                        titre_secondaire: "Ces moments avec toi",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 4 : ",
                        titre_secondaire: "Loin des yeux, proche du cœur",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 5 : ",
                        titre_secondaire: "Au bout du monde avec toi",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 6 : ",
                        titre_secondaire: "",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                ]
            },
            {
                id: 'lysandre',
                img: '<img src="images/pc_al_lysandre.png">',
                nom: 'Lysandre',
                episodes: [
                    {
                        titre_principal: "Épisode 1 : ",
                        titre_secondaire: "L'air de la campagne",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 2 : ",
                        titre_secondaire: "Se redécouvrir",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 3 : ",
                        titre_secondaire: "... En profondeur",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 4 : ",
                        titre_secondaire: "Les saisons avec toi",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 5 : ",
                        titre_secondaire: "Un corbeau tombé du nid",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 6 : ",
                        titre_secondaire: "Les fleurs de l’amour",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                ]
            },
            {
                id: 'armin',
                img: '<img src="images/pc_al_armin.png">',
                nom: 'Armin',
                episodes: [
                    {
                        titre_principal: "Épisode 1 : ",
                        titre_secondaire: "404 Not Found",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 2 : ",
                        titre_secondaire: "201 Created",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 3 : ",
                        titre_secondaire: "",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 4 : ",
                        titre_secondaire: "",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 5 : ",
                        titre_secondaire: "",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                    {
                        titre_principal: "Épisode 6 : ",
                        titre_secondaire: "",
                        guides: [
                            {
                                Guide: ""
                            },
                            {
                                'Perso 1': ""
                            },
                            {
                                'Perso 2': ""
                            },
                            {
                                'Perso 3': ""
                            }
                        ]
                    },
                ]
            } 
        ]
    }
]


/* AFFICHER LES BOÎTES HIGH SCHOOL LIFE (= HSL), CAMPUS LIFE (= CL), LOVE LIFE (= LL) ET ALTERNATE LIFE (= AL) */

let content = ""
solutions.forEach (function
    (item) {
        content += '<p class="categorie" id = ' + item.id + ' style = "background-image: ' + item.image + ';">' +  item.titre + '</p>';
    })

    section.innerHTML = content
    console.log(content)


/* AFFICHER LA LISTE DES EPISODES AU CLIC */

let solutionsHsl = document.getElementById("1")
let solutionsCl = document.getElementById("2")
let solutionsLl = document.getElementById("3")
let solutionsAl = document.getElementById("4")

solutionsHsl.addEventListener("click", function() {
    section.innerHTML = ""
    section.classList.add("caseBleue");
    for (let i = 0; i < solutions[0].episodes.length; i++) {
        section.innerHTML += '<div class = "episode" id = ' + solutions[0].episodes[i].id + '><p>' + solutions[0].episodes[i].titre_principal + '</p> <p>' + solutions[0].episodes[i].titre_secondaire + '</p></div>'
    }
    section.id = 'casesBleues'
        /* AFFICHER LA LISTE DES PERSONNAGES AU CLIC, ET LA CACHER AU DEUXIEME CLIC */
        let hslEpisode1 = document.getElementById("hsl1")
        hslEpisode1.addEventListener("click", function() {
            if (hslEpisode1.style.opacity === "0.8") {
                hslEpisode1.style.opacity = "1"
                hslEpisode1.innerHTML = '<div class = "episode" id = ' + solutions[0].episodes[0].id + '><p>' + solutions[0].episodes[0].titre_principal + '</p> <p>' + solutions[0].episodes[0].titre_secondaire + '</p></div>'
            } else if (hslEpisode1.style.opacity !== "0.8") {
                hslEpisode1.style.opacity = "0.8"
                for (let i = 0; i < solutions[0].episodes[0].guides.length; i++) {
                    hslEpisode1.innerHTML += '<div class = "guide" id = "' + solutions[0].episodes[0].guides[i].id + '"><p>' + solutions[0].episodes[0].guides[i].name + '</p></div>'
                    console.log(hslEpisode1)
                }
                    /* AU CLIC SUR LE NOM D'UN GUIDE, AFFICHER LE CONTENU DU GUIDE */
                    let guide = document.getElementById("hsl1Guide")
                    let perso1 = document.getElementById("hsl1Perso1")
                    let perso2 = document.getElementById("hsl1Perso2")
                    let perso3 = document.getElementById("hsl1Perso3")
                    guide.addEventListener("click", function() {
                        section.innerHTML = '<h2>' + solutions[0].episodes[0].guides[0].name + '</h2><p>' + solutions[0].episodes[0].guides[0].content + '</p>'
                    })
                    perso1.addEventListener("click", function() {
                        section.innerHTML = '<h2>' + solutions[0].episodes[0].guides[1].name + '</h2><p>' + solutions[0].episodes[0].guides[1].content + '</p>'
                    })
                    perso2.addEventListener("click", function() {
                        section.innerHTML = '<h2>' + solutions[0].episodes[0].guides[2].name + '</h2><p>' + solutions[0].episodes[0].guides[2].content + '</p>'
                    })
                    perso3.addEventListener("click", function() {
                        section.innerHTML = '<h2>' + solutions[0].episodes[0].guides[3].name + '</h2><p>' + solutions[0].episodes[0].guides[3].content + '</p>'
                    })
            }
        })
})

solutionsCl.addEventListener("click", function() {
    section.innerHTML = ""
    section.classList.add("caseBleue");
    for (let i = 0; i < solutions[1].episodes.length; i++) {
        section.innerHTML += '<div class = "episode"><p>' + solutions[1].episodes[i].titre_principal + '</p> <p>' + solutions[1].episodes[i].titre_secondaire + '</p></div>'
    }
    section.id = 'casesBleues'
})

solutionsLl.addEventListener("click", function() {
    section.innerHTML = ""
    section.classList.add("caseBleue");
    for (let i = 0; i < solutions[2].episodes.length; i++) {
        section.innerHTML += '<div class = "episode"><p>' + solutions[2].episodes[i].titre_principal + '</p> <p>' + solutions[2].episodes[i].titre_secondaire + '</p></div>'
    }
    section.id = 'casesBleues'
})

solutionsAl.addEventListener("click", function() {
    section.innerHTML = ""
    for (let i = 0; i < solutions[3].alternate.length; i++) {
        section.innerHTML += '<div class = "alternate" id = "' + solutions[3].alternate[i].id + '">' + solutions[3].alternate[i].img + '<h2>' + solutions[3].alternate[i].nom + '</h2></div>'
    }
        let solutionsKentin = document.getElementById("kentin")
            solutionsKentin.addEventListener("click", function() {
                section.innerHTML = ""
                section.classList.add("caseBleue");
                for (let j = 0; j < solutions[3].alternate[0].episodes.length; j++) {
                    section.innerHTML += '<div class = "episode"><p>' + solutions[3].alternate[0].episodes[j].titre_principal + '</p> <p>' + solutions[3].alternate[0].episodes[j].titre_secondaire + '</p></div>'
                }
                section.id = 'casesBleues'
            })
        let solutionsLysandre = document.getElementById("lysandre")
            solutionsLysandre.addEventListener("click", function() {
                section.innerHTML = ""
                section.classList.add("caseBleue");
                for (let j = 0; j < solutions[3].alternate[1].episodes.length; j++) {
                    section.innerHTML += '<div class = "episode"><p>' + solutions[3].alternate[1].episodes[j].titre_principal + '</p> <p>' + solutions[3].alternate[1].episodes[j].titre_secondaire + '</p></div>'
                }
                section.id = 'casesBleues'
            })
        let solutionsArmin = document.getElementById("armin")
            solutionsArmin.addEventListener("click", function() {
                section.innerHTML = ""
                section.classList.add("caseBleue");
                for (let j = 0; j < solutions[3].alternate[2].episodes.length; j++) {
                    section.innerHTML += '<div class = "episode"><p>' + solutions[3].alternate[2].episodes[j].titre_principal + '</p> <p>' + solutions[3].alternate[2].episodes[j].titre_secondaire + '</p></div>'
                }
                section.id = 'casesBleues'
            })
})


