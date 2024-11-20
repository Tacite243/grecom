import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const products = [
  { category: 'App', filter: 'filter-app', img: 'masonry-portfolio-1.jpg', title: 'App 1', desc: 'Lorem ipsum, dolor sit' },
  { category: 'Product', filter: 'filter-product', img: 'masonry-portfolio-2.jpg', title: 'Product 1', desc: 'Lorem ipsum, dolor sit' },
  { category: 'Branding', filter: 'filter-branding', img: 'masonry-portfolio-3.jpg', title: 'Branding 1', desc: 'Lorem ipsum, dolor sit' },
  { category: 'App', filter: 'filter-app', img: 'masonry-portfolio-4.jpg', title: 'App 2', desc: 'Lorem ipsum, dolor sit' },
  { category: 'Product', filter: 'filter-product', img: 'masonry-portfolio-5.jpg', title: 'Product 2', desc: 'Lorem ipsum, dolor sit' },
  { category: 'Branding', filter: 'filter-branding', img: 'masonry-portfolio-6.jpg', title: 'Branding 2', desc: 'Lorem ipsum, dolor sit' },
  { category: 'App', filter: 'filter-app', img: 'masonry-portfolio-7.jpg', title: 'App 3', desc: 'Lorem ipsum, dolor sit' },
  { category: 'Product', filter: 'filter-product', img: 'masonry-portfolio-8.jpg', title: 'Product 3', desc: 'Lorem ipsum, dolor sit' },
  { category: 'Branding', filter: 'filter-branding', img: 'masonry-portfolio-9.jpg', title: 'Branding 3', desc: 'Lorem ipsum, dolor sit' },
];

const Portfolio: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    const glightbox = GLightbox({ selector: '.glightbox' });

    const isotopeContainers = document.querySelectorAll('.isotope-layout');
    isotopeContainers.forEach((container) => {
      const isotopeInstance = new Isotope(container.querySelector('.isotope-container') as HTMLElement, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*',
      });

      container.querySelectorAll('.isotope-filters li').forEach((filter) => {
        filter.addEventListener('click', function () {
          container.querySelector('.filter-active')?.classList.remove('filter-active');
          (this as HTMLElement).classList.add('filter-active');
          const filterValue = (this as HTMLElement).getAttribute('data-filter') || '*';
          isotopeInstance.arrange({ filter: filterValue });
        });
      });
    });

    return () => glightbox.destroy();
  }, []);

  // Extract unique categories dynamically
  const categories = Array.from(new Set(products.map((product) => product.category))).map((category) => ({
    name: category,
    filter: `filter-${category.toLowerCase()}`,
  }));

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Produit</h2>
        <p>Disponibles en stock</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-layout="masonry">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            {categories.map((category, index) => (
              <li key={index} data-filter={`.${category.filter}`}>
                {category.name}
              </li>
            ))}
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {products.map((product, index) => (
              <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${product.filter}`}>
                <img src={`/img/masonry-portfolio/${product.img}`} className="img-fluid" alt={product.title} />
                <div className="portfolio-info">
                  <h4>{product.title}</h4>
                  <p>{product.desc}</p>
                  <a
                    href={`/img/masonry-portfolio/${product.img}`}
                    title={product.title}
                    data-gallery={`portfolio-gallery-${product.filter}`}
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="/portfolio-details" title="More Details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
