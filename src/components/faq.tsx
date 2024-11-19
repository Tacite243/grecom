import React from 'react';

const faqData = [
  {
    question: 'How to download and register?',
    answer: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    id: 'faq-1',
  },
  {
    question: 'How to create your PayPal account?',
    answer: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    id: 'faq-2',
  },
  {
    question: 'How to link your PayPal and bank account?',
    answer: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    id: 'faq-3',
  },
];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="faq section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Frequently Asked Questions</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <div className="custom-accordion" id="accordion-faq">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={faq.id}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={faq.id}
                    className={`collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading-${index}`}
                    data-bs-parent="#accordion-faq"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;