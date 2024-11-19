import React from 'react';
import Link from 'next/link';


interface Post {
  category: string;
  title: string;
  imageUrl: string;
  authorImage: string;
  authorName: string;
  date: string;
  dateTime: string;
  link: string;
}

const posts: Post[] = [
  {
    category: 'Actualité',
    title: "WWF et GRECOM renforcent leur engagement pour la chaîne de valeur apicole au Nord-Kivu",
    imageUrl: '/img/blog/wwf.jpg',
    authorImage: '/img/blog/blog-author.jpg',
    authorName: 'Maria Doe',
    date: 'Jan 1, 2022',
    dateTime: '2022-01-01',
    link: '/blog-details',
  },
  {
    category: 'Actualité',
    title: "Nord-Kivu : GRECOM-RDC révolutionne l’apiculture avec la carte « APICARD »",
    imageUrl: '/img/blog/apicard.jpg',
    authorImage: '/img/blog/blog-author-2.jpg',
    authorName: 'Allisa Mayer',
    date: 'Jun 5, 2022',
    dateTime: '2022-06-05',
    link: '/blog-details',
  },
  {
    category: 'Actualité',
    title: "Appel à candidatures – Experts et consultants pour le projet NYUKI TECH",
    imageUrl: '/img/blog/candidature.jpg',
    authorImage: '/img/blog/blog-author-3.jpg',
    authorName: 'Mark Dower',
    date: 'Jun 22, 2022',
    dateTime: '2022-06-22',
    link: '/blog-details',
  },
];

const RecentPosts: React.FC = () => {
  return (
    <section id="recent-posts" className="recent-posts section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Actualité</h2>
        <p>Récemment postés</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <article>
                <div className="post-img">
                  <img src={post.imageUrl} alt={post.title} className="img-fluid" />
                </div>
                <p className="post-category">{post.category}</p>
                <h2 className="title">
                  <Link href={post.link}>{post.title}</Link>
                </h2>
                <div className="d-flex align-items-center">
                  <img src={post.authorImage} alt={post.authorName} className="img-fluid post-author-img flex-shrink-0" />
                  <div className="post-meta">
                    <p className="post-author">{post.authorName}</p>
                    <p className="post-date">
                      <time dateTime={post.dateTime}>{post.date}</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;