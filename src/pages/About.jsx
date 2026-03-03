import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/About.css';

const About = () => {
  useEffect(() => {
    document.title = "Our Mission - SEO Stream High-Performance Tools";
    // Standard SEO Meta Management
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = "Inside SEO Stream: Why we built a lightning-fast, privacy-first SEO suite for the modern web.";
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="about-page">
      {/* 1. Enhanced Hero Section */}
      <header className="about-hero">
        <div className="container">
          <span className="hero-badge">Since 2026</span>
          <h1 className="hero-title">SEO without the bloat.</h1>
          <p className="hero-subtitle">
            Most SEO tools are slow, expensive, and harvest your data. 
            <strong> SEO Stream</strong> was built to be the opposite: Instant, Free, and Private.
          </p>
        </div>
      </header>

      <main className="container">
        
        {/* 2. The "Problem & Solution" Section */}
        <section className="about-section split-view">
          <div className="content-block">
            <h2 className="accent-heading">The Problem with Modern SEO</h2>
            <p>
              Today's search landscape is dominated by complex dashboards that overwhelm users with 
              "vanity metrics." These tools often take 10+ seconds to load—violating the very 
              <strong> Core Web Vitals</strong> they claim to help you fix.
            </p>
            <div className="founder-quote">
              <blockquote>
                "Speed isn't just a feature of SEO; it's the foundation. If your audit tool is slow, 
                how can you trust it to make your site fast?"
              </blockquote>
            </div>
          </div>
          <div className="tech-stack-card">
            <h3>Our Performance Stack</h3>
            <ul>
              <li><strong>Zero-JS Runtime:</strong> Tools optimized for sub-100ms response.</li>
              <li><strong>Edge Delivery:</strong> Audits processed at the nearest node.</li>
              <li><strong>No Data Harvesting:</strong> We don't track your keywords.</li>
              <li><strong>Schema Native:</strong> Built for the semantic web.</li>
            </ul>
          </div>
        </section>

        {/* 3. Detailed "How We Help" Section */}
        <section className="about-section">
          <div className="section-header-centered">
            <h2>Engineered for Results</h2>
            <p>We focus on the three pillars that actually move the needle in 2026.</p>
          </div>
          
          <div className="feature-deep-dive">
            <div className="dive-item">
              <div className="dive-number">01</div>
              <div className="dive-text">
                <h3>Technical Precision</h3>
                <p>Our <strong>JSON-LD Generator</strong> and Speed Audits are calibrated against Google's latest documentation, ensuring you never deploy invalid code.</p>
              </div>
            </div>
            <div className="dive-item">
              <div className="dive-number">02</div>
              <div className="dive-text">
                <h3>Semantic Intelligence</h3>
                <p>We help you move beyond "keyword stuffing" into <strong>Entity-based SEO</strong>, helping search engines understand the <em>context</em> of your brand.</p>
              </div>
            </div>
            <div className="dive-item">
              <div className="dive-number">03</div>
              <div className="dive-text">
                <h3>Accessibility as SEO</h3>
                <p>We advocate for the "Web for All." A more accessible site is a more indexable site. Period.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Impact Stats Section */}
        <section className="impact-banner">
          <div className="stat-grid">
            <div className="stat-card">
              <span className="stat-val">50k+</span>
              <span className="stat-desc">Schemas Generated</span>
            </div>
            <div className="stat-card">
              <span className="stat-val">99</span>
              <span className="stat-desc">Avg. Lighthouse Score</span>
            </div>
            <div className="stat-card">
              <span className="stat-val">$0</span>
              <span className="stat-desc">Cost to You</span>
            </div>
          </div>
        </section>

      </main>

      {/* 5. Final CTA */}
      <footer className="about-cta-v2">
        <div className="container">
          <h2>Stop Guessing. Start Ranking.</h2>
          <p>Join thousands of developers and marketers using SEO Stream to clean up the web.</p>
          <div className="cta-wrapper">
            <Link to="/tools" className="btn btn-primary">Launch Free Tools</Link>
            <Link to="/blog" className="btn btn-outline">Read Methodology</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;