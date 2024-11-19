import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';



const services = [
  { icon: 'bi-cash-stack', color: '#0dcaf0', title: 'Cire', text: "Détail Catégorie: Le miel, ce délicieux nectar doré, est bien plus qu'un simple aliment sucré. C'est un trésor naturel, produit par les abeilles à partir du nectar des fleurs. Sa texture peut varier, allant de liquide et fluide à crémeuse et épaisse.", delay: 100 },
  { icon: 'bi-calendar4-week', color: '#fd7e14', title: 'Miel', text: "Détail Catégorie: Le miel, ce délicieux nectar doré, est bien plus qu'un simple aliment sucré. C'est un trésor naturel, produit par les abeilles à partir du nectar des fleurs. Sa texture peut varier, allant de liquide et fluide à crémeuse et épaisse.", delay: 200 },
  { icon: 'bi-chat-text', color: '#20c997', title: 'Propolis', text: "La propolis est un produit apicole fascinant, créé par les abeilles à partir de résine collectée sur les bourgeons et l'écorce des arbres, puis mélangée à la cire d'abeille. Utilisée pour ses propriétés antiseptiques, antibactériennes et anti-inflammatoires, elle est idéale pour renforcer le système immunitaire et favoriser la cicatrisation.", delay: 300 },
  { icon: 'bi-credit-card-2-front', color: '#df1529', title: 'Asperiores Commodit', text: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.', delay: 400 },
  { icon: 'bi-globe', color: '#6610f2', title: 'Velit Doloremque', text: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.', delay: 500 },
  { icon: 'bi-clock', color: '#f3268c', title: 'Dolori Architecto', text: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.', delay: 600 },
];

const Products: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Nos Produits</h2>
        <p>Ce que nous offrons</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={service.delay}>
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={`bi ${service.icon}`} style={{ color: service.color }}></i>
                </div>
                <Link href="service-details.html" className="stretched-link">
                  <h3>{service.title}</h3>
                </Link>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;