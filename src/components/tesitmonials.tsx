import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Nos projets</h2>
        <p>Projets en cours de réalisation</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <article className="testimonial-item">
                {/* Image */}
                <div className="post-img">
                  <img src={testimonial.imgSrc} alt={testimonial.name} className="img-fluid" />
                </div>
                {/* Category or name */}
                <p className="post-category">{testimonial.name}</p>
                {/* Title */}
                <h2 className="title">
                  <span>{testimonial.name}</span>
                </h2>
                {/* Quote */}
                <div className="post-meta">
                  <p>{testimonial.quote}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    imgSrc: '/img/testimonials/ruche.jpg',
    name: 'RUCHES CONNECTÉES',
    quote: "Un produit innovant pour le suivi à distance de l'évolution de la ruche : Surveillance de la température, de l'humidité, de la métrologie et du mouvement",
  },
  {
    imgSrc: '/img/testimonials/academy.jpg',
    name: 'NYUKI ACADEMY',
    quote: "Une école d'apprentissage des techniques apicoles modernes : Utilisation de la technologie pour une apiculture innovante et durable",
  },
  {
    imgSrc: '/img/testimonials/nyuki_tech.jpg',
    name: 'NYUKI TECH',
    quote: "NYUKI TECH est une plateforme numérique visant à améliorer et enrichir l'industrie apicole en fournissant des conseils, des itinéraires techniques et des informations sur le marché",
  },
];

export default TestimonialsSection;