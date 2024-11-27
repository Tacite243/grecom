'use client';
import React, { useState } from 'react';
import Link from 'next/link';


const Footer: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3 className="sitename">GRECOM</h3>
        <p>Grecom Community Mind est une entreprise spécialisée
          dans la production et la vente des produits apicoles
          et agricoles en République Démocratique du Congo.</p>
        <div className="social-links d-flex justify-content-center">
          <Link href="#"><i className="bi bi-twitter-x"></i></Link>
          <Link href="#"><i className="bi bi-facebook"></i></Link>
          <Link href="#"><i className="bi bi-instagram"></i></Link>
          <Link href="#"><i className="bi bi-skype"></i></Link>
          <Link href="#"><i className="bi bi-linkedin"></i></Link>
        </div>
        <div className="container">
          <div className="copyright">
            <span>&copy; </span><strong className="px-1 sitename">GRECOM</strong><span> Tous droits réservés</span>
          </div>
          <div className="credits">
            Conçu par <Link href="#" onClick={handleLinkClick}>GRECOM</Link>
          </div>

          <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }} onClick={handleCloseModal}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Connexion</h5>
                  <button type="button" className="close" onClick={handleCloseModal} style={{ position: 'absolute', right: '15px', top: '15px' }}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        placeholder="Nom d'utilisateur"
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        placeholder="Mot de passe"
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-get-started animate__animated animate__fadeInUp scrollto"
                    >
                      Se connecter
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;