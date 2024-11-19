import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const Portfolio: React.FC = () => {
  useEffect(() => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Initialize GLightbox
    const glightbox = GLightbox({
      selector: '.glightbox',
    });

    // Initialize Isotope
    const isotopeContainers = document.querySelectorAll('.isotope-layout');
    isotopeContainers.forEach((container) => {
      const layoutMode = container.getAttribute('data-layout') || 'masonry';
      const defaultFilter = container.getAttribute('data-default-filter') || '*';
      const sortBy = container.getAttribute('data-sort') || 'original-order';

      const isotopeInstance = new Isotope(container.querySelector('.isotope-container') as HTMLElement, {
        itemSelector: '.isotope-item',
        layoutMode,
        filter: defaultFilter,
        sortBy,
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

    return () => {
      glightbox.destroy();
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>What we've done</p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {/* Portfolio items */}
            {[
              { filter: 'filter-app', img: 'masonry-portfolio-1.jpg', title: 'App 1', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-product', img: 'masonry-portfolio-2.jpg', title: 'Product 1', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-branding', img: 'masonry-portfolio-3.jpg', title: 'Branding 1', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-app', img: 'masonry-portfolio-4.jpg', title: 'App 2', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-product', img: 'masonry-portfolio-5.jpg', title: 'Product 2', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-branding', img: 'masonry-portfolio-6.jpg', title: 'Branding 2', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-app', img: 'masonry-portfolio-7.jpg', title: 'App 3', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-product', img: 'masonry-portfolio-8.jpg', title: 'Product 3', desc: 'Lorem ipsum, dolor sit' },
              { filter: 'filter-branding', img: 'masonry-portfolio-9.jpg', title: 'Branding 3', desc: 'Lorem ipsum, dolor sit' },
            ].map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}>
                <img src={`/img/masonry-portfolio/${item.img}`} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <a
                    href={`/assets/img/${item.img}`}
                    title={item.title}
                    data-gallery={`portfolio-gallery-${item.filter}`}
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