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
              <div className="testimonial-item">
                <img src={testimonial.imgSrc} className="testimonial-img" alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                {/* <h4>{testimonial.role}</h4> */}
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
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
    // role: 'CEO & Founder',
    quote: "Un produit innovant pour le suivi à distance de l'évolution de la ruche : Surveillance de la température, de l'humidité, de la métrologie et du mouvement",
  },
  {
    imgSrc: '/img/testimonials/academy.jpg',
    name: 'NYUKI ACADEMY',
    // role: 'Designer',
    quote: "Une école d'apprentissage des techniques apicoles modernes : Utilisation de la technologie pour une apiculture innovante et durable",
  },
  {
    imgSrc: '/img/testimonials/nyuki_tech.jpg',
    name: 'NYUKI TECH',
    role: 'Store Owner',
    quote: "NYUKI TECH est une plateforme numérique visant à améliorer et enrichir l'industrie apicole en fournissant des conseils, des itinéraires techniques et des informations sur le marché"
  },
  {
    imgSrc: '/img/testimonials/testimonials-4.jpg',
    name: 'Matt Brandon',
    role: 'Freelancer',
    quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim...',
  },
  {
    imgSrc: '/img/testimonials/testimonials-5.jpg',
    name: 'John Larson',
    role: 'Entrepreneur',
    quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...',
  },
];

export default TestimonialsSection;