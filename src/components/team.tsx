import React from 'react';
import Link from 'next/link';


interface TeamMember {
    name: string;
    position: string;
    imageUrl: string;
    socialLinks: {
        twitter: string;
        facebook: string;
        instagram: string;
        linkedin: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        name: 'Walter White',
        position: 'Chief Executive Officer',
        imageUrl: '/img/team/team-1.jpg',
        socialLinks: {
            twitter: '#',
            facebook: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Sarah Jhonson',
        position: 'Product Manager',
        imageUrl: '/img/team/team-2.jpg',
        socialLinks: {
            twitter: '#',
            facebook: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        name: 'William Anderson',
        position: 'CTO',
        imageUrl: '/img/team/team-3.jpg',
        socialLinks: {
            twitter: '#',
            facebook: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Amanda Jepson',
        position: 'Accountant',
        imageUrl: '/img/team/team-4.jpg',
        socialLinks: {
            twitter: '#',
            facebook: '#',
            instagram: '#',
            linkedin: '#',
        },
    },
];

const Team: React.FC = () => {
    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Our Hardworking Team</p>
            </div>
            <div className="container">
                <div className="row gy-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-6 d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            <div className="team-member">
                                <div className="member-img">
                                    <img src={member.imageUrl} className="img-fluid" alt={`${member.name}`} />
                                    <div className="social">
                                        <Link href={member.socialLinks.twitter}><i className="bi bi-twitter"></i></Link>
                                        <Link href={member.socialLinks.facebook}><i className="bi bi-facebook"></i></Link>
                                        <Link href={member.socialLinks.instagram}><i className="bi bi-instagram"></i></Link>
                                        <Link href={member.socialLinks.linkedin}><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>{member.name}</h4>
                                    <span>{member.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;