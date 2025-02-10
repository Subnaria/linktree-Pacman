const profileData = {
    profileLink: "https://subnaria.github.io/Pacman_web/", // Lien du profil 
    profileImage: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/b1/05/53b105b6-7ef7-2441-bdcd-f21b3335121b/artwork.jpg/1200x630bb.jpg", // Image de profil
    profileIcon: "https://cdn-icons-png.flaticon.com/512/8633/8633238.png", // Icone derrière le profil
    profileSiteText: "Pacman Web Site", // Nom derrière le profil
    userName: "Csc.Pacman", // Nom affiché sur la page et dans le titre de l'onglet
    email: "csc.pacman@studio.klaynight.fr", // Addesse mail affichée sur la page // Adresse mail affichée sur la page
    links: [ // Liens affichés sur la page
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/NZc5PKwkAa", text: "Link 1", name: "Discord" },
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/h4E74mZvFY", text: "Link 2", name: "Discord" },
        { icon: "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png", url: "https://discord.gg/h4E74mZvFY", text: "Link 3", name: "Discord" },
    ],
    // Fond de la page si une liste est utilisée alors le fond sera via les couleurs que vous mettez dedans
    background: ["#FF5733", "#33FF57"], //"https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    degBackgroundColor: 45, // inclinaison du degradé
    profileHoverColor: "#7289DA", // Couleur de hover sur l'article (l'élément principal)
    neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"], // Couleurs du neon de profil
    iconUrl: "https://media.discordapp.net/attachments/1331600541599535169/1337128941546377387/ab67616d0000b273dc3e2814b407ab8912fe6094.png?ex=67a651de&is=67a5005e&hm=5e5b2e4dfc444d3f092f898e9d71e575747c260f392079000f32e0f3228b6353&=&format=webp&quality=lossless", // Icone de l'onglet
    description: "Bienvenue sur mon Plinkk J'essaye d'apprendre le web !", // Description affichée sur la page, display: none si vide
    
    labels: [
        { data: "Developer", color: "#FF6384", fontColor: "#FFFFFF" },
        { data: "Designer", color: "#36A2EB", fontColor: "#FFFFFF" },
        { data: "Engineer UI/UX", color: "#4BC0C0", fontColor: "#FFFFFF" },
    ],
    
    neonEnable: 1, // 1 : Enable, 0 : Disable
    buttonThemeEnable: 1, // 1 : Enable, 0 : Disable

    EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
    EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
    EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

    backgroundSize : 50, // En pourcentage
    
    selectedThemeIndex: 6,                   // Thème sélectionné            (voir ci-dessous)

    selectedAnimationIndex : 0,             // Animation de l'article       (voir ci-dessous)
    selectedAnimationButtonIndex : 10,       // Animation des boutons        (voir ci-dessous)
    selectedAnimationBackgroundIndex: 0,     // Animation de l'arrière-plan  (voir ci-dessous)

    animationDurationBackground: 30,  // Durée de l'animation en secondes
    delayAnimationButton: 0.1,        // Délai de l'animation en secondes

    canvaEnable: 1, // 1 : Enable, 0 : Disable
    selectedCanvasIndex: 1,          // Animation du canva (voir ci-dessous)
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
// 10 : Clignoter
// 11 : Bande de caoutchouc
// 12 : Tada
// 13 : Gélatineux
// 14 : Battement de coeur
// 15 : Vitesse de la lumière
// 16 : Rouler
// 17 : Charnière

//      Canva Animations      \\
// 0 : Bubble
// 1 : Neuronal
// 2 : Particule
// 3 : Stars Array
// 4 : Snow 
// 5 : Galaxy
// 6 : Hexagone
// 7 : Confetti
// 8 : Fireworks
// 9 : Boom CLick
// 10 : Crowd
// 11 : Storm
// 12 : Color Wars
// 13 : Liquid Light
// 14 : Rain
// 15 : Matrix
// 16 : Purple Tree
// 17 : Cloud
// 18 : Space
