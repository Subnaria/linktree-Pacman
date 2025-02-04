const profileData = {
    profileLink: "pacman.klaynight.fr", // Lien du profil 
    profileImage: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/b1/05/53b105b6-7ef7-2441-bdcd-f21b3335121b/artwork.jpg/1200x630bb.jpg", // Image de profil
    profileIcon: "https://cdn-icons-png.flaticon.com/512/8633/8633238.png", // Icone derrière le profil
    profileSiteText: "Csc.Pacman", // Nom derrière le profil
    userName: "Csc.Pacman", // Nom affiché sur la page et dans le titre de l'onglet
    email: "csc.pacman@studio.klaynight.fr", // Adresse mail affichée sur la page
    links: [ // Liens affichés sur la page
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/NZc5PKwkAa", text: "WarTycoon.Fr" },
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/GfFy3E6GVf", text: "Le Baudo Crew" },
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/h4E74mZvFY", text: "The Ats" }
    ],
    // Image de fond
    backgroundImage: "https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    profileHoverColor: "#7289DA", // Couleur de hover sur l'article (l'élément principal)
    neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"], // Couleurs du neon de profil
    iconUrl: "", // Icone de l'onglet
    
    EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
    EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
    EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

    backgroundSize : 50, // En pourcentage
    
    selectedThemeIndex: 6,                  // Thème sélectionné            (voir ci-dessous)

    selectedAnimationIndex : 0,             // Animation de l'article       (voir ci-dessous)
    selectedAnimationButtonIndex : 10,       // Animation des boutons        (voir ci-dessous)
    selectedAnimationBackgroundIndex: 0,    // Animation de l'arrière-plan  (voir ci-dessous)

    animationDurationBackground: 30,  // Durée de l'animation en secondes
    delayAnimationButton: 0.1         // Délai de l'animation en secondes

};
//      Thèmes      \\
// 0 : Grey Theme
// 1 : Light Yellow Theme
// 2 : Green Theme
// 3 : Blue Theme
// 4 : Red Theme
// 5 : Light blue Theme
// 6 : Dark Theme
// 7 : Orange Theme
// 8 : Grey Dark Theme
// 9 : Green Grey Theme
// 10 : Very Light Blue Theme
// 11 : Brown Theme
// 12 : Purple Theme
// 13 : Pink Theme
// 14 : Neptune Theme (Light Brown Theme)

//      Animations      \\
// 0 : Fondu
// 1 : Glisser
// 2 : Zoomer
// 3 : Rotation
// 4 : Rebondir
// 5 : Secouer
// 6 : Retourner
// 7 : Pulsation
// 8 : Balancer
// 9 : Se balancer
