import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Services: React.FC = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Ce que nous offrons</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {[
            {
              delay: 100,
              icon: "bi bi-cash-stack",
              color: "#0dcaf0",
              title: "Résilience climatique",
              description: "Le changement climatique affecte l’agriculture et l’apiculture, rendant essentielle la résilience climatique.",
              link: "service-details.html",
            },
            {
              delay: 200,
              icon: "bi bi-calendar4-week",
              color: "#fd7e14",
              title: "Sécurité alimentaire et nutritionnelle",
              description: "GRECOM-RDC promeut des systèmes alimentaires résilients pour garantir un accès équitable à une alimentation saine et durable.",
              link: "service-details.html",
            },
            {
              delay: 300,
              icon: "bi bi-chat-text",
              color: "#20c997",
              title: "Développements technologique",
              description: "GRECOM-RDC transforme les systèmes de marché en RDC grâce à des solutions technologiques innovantes comme \"NYUKI TECH.\"",
              link: "service-details.html",
            },
            {
              delay: 400,
              icon: "bi bi-credit-card-2-front",
              color: "#df1529",
              title: "Développement des systèmes de marche agricoles",
              description: "GRECOM-RDC renforce les systèmes de marché apicoles et agricoles en soutenant les acteurs locaux avec l'approche MSD et des solutions comme \"NYUKI TECH.\"",
              link: "service-details.html",
            },
            {
              delay: 500,
              icon: "bi bi-globe",
              color: "#6610f2",
              title: "Emploi des femmes et des jeunes et esprit d'entreprise",
              description:"GRECOM-RDC promeut l’inclusion des jeunes et des femmes dans l’entrepreneuriat agricole et apicole pour répondre aux besoins alimentaires croissants et créer des opportunités durables.",
              link: "service-details.html",
            },
            {
              delay: 600,
              icon: "bi bi-clock",
              color: "#f3268c",
              title: "Inclusion financière",
              description: "GRECOM-RDC facilite l'accès au financement rural en soutenant les producteurs, les AVECs, et les services financiers adaptés aux chaînes de valeur agricoles.",
              link: "service-details.html",
            },
          ].map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="service-item position-relative">
                <div className="icon" style={{ color: service.color }}>
                  <i className={service.icon}></i>
                </div>
                <a href={service.link} className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;