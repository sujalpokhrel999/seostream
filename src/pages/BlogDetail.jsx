import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../Assets/css/Blog.css';

const BlogDetail = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch data based on the slug. 
  // Here is a template for the content:
  const postData = {
    title: slug.replace(/-/g, ' ').toUpperCase(), // Mock title from slug
    date: "March 3, 2026",
    author: "SEO Stream Team",
    content: "SEO is evolving. In 2026, the focus has shifted entirely toward user experience (UX) and Page Speed. Search engines are no longer just looking for keywords; they are looking for 'Answer Satisfaction'..."
  };

  useEffect(() => {
    document.title = `${postData.title} | SEO Stream`;
    window.scrollTo(0, 0);
  }, [postData.title]);

  return (
    <article className="blog-detail container">
      <Link to="/blog" className="back-link">← Back to Insights</Link>
      
      <header className="post-header">
        <span className="post-meta">{postData.date} • By {postData.author}</span>
        <h1 className="post-full-title">{postData.title}</h1>
      </header>

      <section className="post-content">
        <p>{postData.content}</p>
        <p>
          This is where your full article content would go. To maintain <strong>SEO Fundamentals</strong>, 
          ensure you are using proper heading hierarchies (H2, H3) and descriptive alt text for images.
        </p>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Performance is a prerequisite for ranking.</li>
          <li>User intent beats keyword density every time.</li>
          <li>Free tools like SEO Stream make auditing faster.</li>
        </ul>
      </section>

      <footer className="post-footer">
        <h3>Liked this article?</h3>
        <p>Share it with your team or check out our free SEO tools to start optimizing.</p>
        <Link to="/" className="btn-primary">Try Free Audit</Link>
      </footer>
    </article>
  );
};

export default BlogDetail;