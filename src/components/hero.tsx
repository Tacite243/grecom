import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import LightButtonLink from "./button_light";



const Hero: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: 'ease-in-out',
            delay: 100,
            offset: 200,
        });
    })
    return (
        <section id="hero" className="hero section dark-background">
            <div
                id="hero-carousel"
                className="container carousel carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                <div className="carousel-item active">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">
                            Bienvenue sur <span>Grecom</span>
                        </h2>
                        <p className="animate__animated animate__fadeInUp">
                            Grecom Community Mind est une entreprise spécialisée
                            dans la production et la vente des produits apicoles
                            et agricoles en République Démocratique du Congo.
                        </p>
                        <LightButtonLink link="#about" text="En savoir plus" />
                    </div>
                </div>


                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">
                            Nyuki Tech
                        </h2>
                        <p className="animate__animated animate__fadeInUp">
                            NYUKI TECH est une plateforme numérique visant à
                            améliorer et enrichir l&apos;industrie apicole en fournissant
                            des conseils, des itinéraires techniques et des informations
                            sur le marché. Son objectif principal est l&apos;identification
                            et enregistrement des acteurs dans la chaîne de valeur apicole.
                        </p>
                        <a
                            href="#about"
                            className="btn-get-started animate__animated animate__fadeInUp scrollto"
                        >
                            En savoir plus
                        </a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">
                            Nyuki Academy
                        </h2>
                        <p className="animate__animated animate__fadeInUp">
                            Une école d&apos;apprentissage des techniques apicoles modernes :
                            Utilisation de la technologie pour une apiculture innovante et durable
                        </p>
                        <a
                            href="#about"
                            className="btn-get-started animate__animated animate__fadeInUp scrollto"
                        >
                            En savoir plus
                        </a>
                    </div>
                </div>

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
