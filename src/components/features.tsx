import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  }, []);

  const formation = [
    { id: 1, icon: 'bi-binoculars', flash: "Le suivi de l'humidité", title: "Le suivi de l'humidité est également essentiel pour la santé des abeilles. \"Est\" peut inclure des capteurs d'humidité qui mesurent le niveau d'humidité à l'intérieur de la ruche", content: "Le produit \"Est\" peut également être connecté à une source de données météorologiques pour obtenir des informations en temps réel sur les conditions météorologiques environnantes. Cela permet aux apiculteurs de comprendre comment les facteurs météorologiques tels que la pluie, le vent ou la chaleur peuvent influencer les abeilles et leur environnement. Mouvement : \"Est\" peut inclure des capteurs", img: '/img/working-1.jpg' },
    { id: 2, icon: 'bi-box-seam', flash: "Est un produit qui facilite...", title: "Est un produit qui facilite les suivies en distance de l’évolution comme la température, l’humidité, la métrologique et le mouvement à l’intérieur du ruche", content: "Le suivi de l'humidité est également essentiel pour la santé des abeilles. \"Est\" peut inclure des capteurs d'humidité qui mesurent le niveau d'humidité à l'intérieur de la ruche. Ces données peuvent être consultées à distance pour s'assurer que les conditions d'humidité sont optimales pour les abeilles.", img: '/img/working-2.jpg' },
    { id: 3, icon: 'bi-brightness-high', flash: "Est une école d’apprentissage", title: "Est une école d’apprentissage des techniques et moyen de production apicole en usage de la technologie", content: "Est une école d’apprentissage des techniques et moyen de production apicole en usage de la technologie", img: '/img/working-2.jpg' },
    { id: 4, icon: 'bi-command', title: "", content: "", img: '/img/working-2.jpg' },
  ];

  return (
    <section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Nos</h2>
        <p>Formations</p>
      </div>
      
      <div className="container">
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
          {formation.map((tab, index) => (
            <li key={tab.id} className="nav-item col-3">
              <a
                className={`nav-link ${index === 0 ? 'active show' : ''}`}
                data-bs-toggle="tab"
                data-bs-target={`#features-tab-${tab.id}`}
              >
                <i className={`bi ${tab.icon}`}></i>
                <h4 className="d-none d-lg-block">{tab.flash}</h4>
              </a>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {formation.map((tab, index) => (
            <div key={tab.id} className={`tab-pane fade ${index === 0 ? 'active show' : ''}`} id={`features-tab-${tab.id}`}>
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>{tab.title}</h3>
                  <p>{tab.content}</p>
                  {/* <ul>
                    <li><i className="bi bi-check2-all"></i> Exemple d’élément de liste.</li>
                    <li><i className="bi bi-check2-all"></i> Autre élément de liste.</li>
                  </ul> */}
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={tab.img} alt="Illustration" className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;