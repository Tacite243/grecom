import React from 'react';
import Link from 'next/link';


// Interface pour décrire la structure des plans de prix
interface PricingItem {
    title: string;
    price: number;
    description: string[];
    featured?: boolean;
}

const pricingData: PricingItem[] = [
    {
        title: 'Free',
        price: 0,
        description: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola', 'Pharetra massa', 'Massa ultricies mi'],
    },
    {
        title: 'Business',
        price: 19,
        description: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola', 'Pharetra massa', 'Massa ultricies mi'],
        featured: true,
    },
    {
        title: 'Developer',
        price: 29,
        description: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola', 'Pharetra massa', 'Massa ultricies mi'],
    },
    {
        title: 'Ultimate',
        price: 49,
        description: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola', 'Pharetra massa', 'Massa ultricies mi'],
    },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="pricing section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Pricing</h2>
                <p>What they are saying about us</p>
            </div>
            {/* End Section Title */}

            <div className="container">
                <div className="row gy-3">
                    {pricingData.map((item, index) => (
                        <div
                            key={index}
                            className={`col-xl-3 col-lg-6`}
                            data-aos="fade-up"
                            data-aos-delay={`${(index + 1) * 100}`}
                        >
                            <div className={`pricing-item ${item.featured ? 'featured' : ''}`}>
                                <h3>{item.title}</h3>
                                <h4>
                                    <sup>$</sup>
                                    {item.price}
                                    <span> / month</span>
                                </h4>
                                <ul>
                                    {item.description.map((desc, idx) => (
                                        <li key={idx} className={desc === 'Pharetra massa' || desc === 'Massa ultricies mi' ? 'na' : ''}>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                                <div className="btn-wrap">
                                    <Link href="#" className="btn-buy">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;