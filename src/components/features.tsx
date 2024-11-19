import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features: React.FC = () => {
  useEffect(() => {
    // Initialisation des animations AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="features" className="features section">
      <div className="container">
        {/* Navigation Tabs */}
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item col-3">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
              <i className="bi bi-binoculars"></i>
              <h4 className="d-none d-lg-block">Le suivi de l'humidité est également essentiel pour la santé des abeilles. "Est" peut inclure des capteurs d'humidité qui mesurent le niveau d'humidité à l'intérieur de la ruche</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
              <i className="bi bi-box-seam"></i>
              <h4 className="d-none d-lg-block">Est un produit qui facilite les suivies en distance de l’évolution comme la température, l’humidité, la métrologique et le mouvement à l’intérieur du ruche</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
              <i className="bi bi-brightness-high"></i>
              <h4 className="d-none d-lg-block">Est une école d’apprentissage des techniques et moyen de production apicole en usage de la technologie</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4">
              <i className="bi bi-command"></i>
              <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          <div className="tab-pane fade active show" id="features-tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/working-1.jpg" alt="Working illustration" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="features-tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/working-2.jpg" alt="Working illustration" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Other tabs here ... */}
        </div>
      </div>
    </section>
  );
};

export default Features;