import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import LightButtonLink from "./button_light";

const slides = [
    {
        title: "Bienvenue sur Grecom",
        description:
            "Grecom Community Mind est une entreprise spécialisée dans la production et la vente des produits apicoles et agricoles en République Démocratique du Congo.",
        button: { link: "#about", text: "En savoir plus" },
    },
    {
        title: "Nyuki Tech",
        description:
            "NYUKI TECH est une plateforme numérique visant à améliorer et enrichir l'industrie apicole en fournissant des conseils, des itinéraires techniques et des informations sur le marché. Son objectif principal est l'identification et enregistrement des acteurs dans la chaîne de valeur apicole.",
        button: { link: "#about", text: "En savoir plus" },
    },
    {
        title: "Nyuki Academy",
        description:
            "Une école d'apprentissage des techniques apicoles modernes : Utilisation de la technologie pour une apiculture innovante et durable",
        button: { link: "#about", text: "En savoir plus" },
    },
];

const Hero: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-in-out",
            delay: 100,
            offset: 200,
        });
    }, []);

    return (
        <section id="hero" className="hero section dark-background">
            <div
                id="hero-carousel"
                className="container carousel carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                {slides.map((slide, index) => (
                    <div
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        key={index}
                    >
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">
                                {slide.title}
                            </h2>
                            <p className="animate__animated animate__fadeInUp">
                                {slide.description}
                            </p>
                            <LightButtonLink
                                link={slide.button.link}
                                text={slide.button.text}
                            />
                        </div>
                    </div>
                ))}

                {/* Controls */}
                <a
                    className="carousel-control-prev"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon bi bi-chevron-left"
                        aria-hidden="true"
                    ></span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon bi bi-chevron-right"
                        aria-hidden="true"
                    ></span>
                </a>
            </div>

            {/* Wave SVG */}
            <svg
                className="hero-waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
            >
                <defs>
                    <path
                        id="wave-path"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    ></path>
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3"></use>
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0"></use>
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9"></use>
                </g>
            </svg>
        </section>
    );
};

export default Hero;