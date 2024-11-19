import React from 'react';
import Link from 'next/link';


const Footer: React.FC = () => {
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
            Conçu par <Link href="https://bootstrapmade.com/">GRECOM</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;