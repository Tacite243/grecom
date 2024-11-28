import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>A propos</h2>
        <p>Qui sommes-nous ?</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>GRECOM est une entreprise spécialisée dans la production et la vente
              des produits apicoles et agricoles en République Démocratique du Congo.
              Nous envisageons un monde avec des revenus décents et des moyens de
              subsistance durables pour tous grâce à l&apos;’entrepreneuriat vert. Nous
              conseillons nos clients sur la manière de cocréer des opportunités
              économiques durables à travers nos thématiques principaux d&apos;entreprise
              responsable, de développement des systèmes de production apicole et agricole
              durable,
            </p>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              l&apos;’application des technologies pour le développement et énergie durable.
              Nos clients sont basés principalement en République Démocratique du Congo et
              d&apos;’autres à travers l&apos;Afrique.
            </p>
            <a href="#" className="read-more">
              <span>En savoir plus</span><i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;