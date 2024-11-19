import React from 'react';



const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contactez-nous</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Adresse</h3>
                <p>RDC, Goma, Q. HIMBI</p>
              </div>
            </div>
            {/* End Info Item */}

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Nos contacs</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>

          <div className="col-lg-8">
            <form
              action="/forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Votre Nom" required />
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Votre Email" required />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows={6} placeholder="Message" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Votre message a été envoyé avec succès. Merci !</div>
                  <button type="submit">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;