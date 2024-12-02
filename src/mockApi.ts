let slidesData = [
    {
      id: 1,
      title: "Bienvenue sur Grecom",
      description:
        "Grecom Community Mind est une entreprise spécialisée dans la production et la vente des produits apicoles et agricoles en République Démocratique du Congo.",
      button: { link: "#about", text: "En savoir plus" },
    },
    {
      id: 2,
      title: "Nyuki Tech",
      description:
        "NYUKI TECH est une plateforme numérique visant à améliorer et enrichir l'industrie apicole en fournissant des conseils, des itinéraires techniques et des informations sur le marché. Son objectif principal est l'identification et enregistrement des acteurs dans la chaîne de valeur apicole.",
      button: { link: "#about", text: "En savoir plus" },
    },
    {
      id: 3,
      title: "Nyuki Academy",
      description:
        "Une école d'apprentissage des techniques apicoles modernes : Utilisation de la technologie pour une apiculture innovante et durable",
      button: { link: "#about", text: "En savoir plus" },
    },
  ];
  
  export const getSlides = async () => {
    return Promise.resolve(slidesData);
  };
  
  export const updateSlide = async (id: number, updatedData: object) => {
    slidesData = slidesData.map((slide) =>
      slide.id === id ? { ...slide, ...updatedData } : slide
    );
    return Promise.resolve(slidesData);
  };
  