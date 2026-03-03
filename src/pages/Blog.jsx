import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/Blog.css';

const Blog = () => {
  useEffect(() => { 
    document.title = "SEO Insights - SEO Stream Blog"; 
  }, []);

  const posts = [
    { 
      title: "Optimizing React for Search Engines", 
      slug: "react-seo", 
      date: "Jan 12, 2026",
      excerpt: "Learn how to handle SSR, Meta tags, and Hydration to ensure your React apps rank #1."
    },
    { 
      title: "Why We Chose Minimalist Design for SEO", 
      slug: "minimalism", 
      date: "Feb 05, 2026",
      excerpt: "Speed is a ranking factor. Discover how stripping away the bloat improved our Core Web Vitals."
    },
    { 
      title: "Top 5 Free SEO Tools for 2026", 
      slug: "free-tools-2026", 
      date: "Feb 20, 2026",
      excerpt: "You don't need a $100/mo subscription to rank. Here are the best free alternatives."
    },
    { 
      title: "Understanding Semantic HTML", 
      slug: "semantic-html", 
      date: "Mar 01, 2026",
      excerpt: "Why <div> soup is killing your rankings and how to fix it with proper HTML5 tags."
    }
  ];

  return (
    <div className="blog-page container">
      <header className="blog-header">
        <h1>SEO Insights & Strategy</h1>
        <p>Expert writing on performance, accessibility, and modern search fundamentals.</p>
      </header>

      <div className="blog-grid">
        {posts.map((post, idx) => (
          <article key={idx} className="blog-card">
            <span className="post-date">{post.date}</span>
            <Link to={`/blog/${post.slug}`} className="post-title-link">
              <h3>{post.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;