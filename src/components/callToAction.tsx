import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';


const CallToAction: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Vous voulez en savoir plus ?</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <Link className="cta-btn align-middle" href="#">
              Cliquez ici
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;