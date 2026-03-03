import React, { useEffect, useState } from 'react';
import '../Assets/css/LandingPage.css'
const LandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const tools = [
    { title: "Technical Auditor", desc: "Identify crawl errors and broken links in seconds.", icon: "🔍" },
    { title: "Keyword Explorer", desc: "Discover high-volume, low-competition search terms.", icon: "📈" },
    { title: "Backlink Monitor", desc: "Track your authority building and referral traffic.", icon: "🔗" },
    { title: "SERP Tracker", desc: "Monitor your rankings across different regions.", icon: "🎯" },
    { title: "Schema Generator", desc: "Generate your schema in seconds.", icon: "🎯" }
  ];

  const faqs = [
    { q: "How often are the rankings updated?", a: "Our SERP tracker updates data every 24 hours to ensure you have the most accurate insights." },
    { q: "Can I export my audit reports?", a: "Yes, all technical audits can be exported as clean, white-label PDF reports." },
    { q: "Is there a limit on keyword searches?", a: "Free accounts get 10 searches per day; pro accounts are unlimited." }
  ];

  return (
    <div className="seo-landing">
      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Stop guessing. <br/>Start ranking.</h1>
          <p className="hero-subtext">
            A minimalist suite of SEO tools designed for modern developers and marketers. 
            Clean data, no bloat, just the metrics that move the needle.
          </p>
          <div className="cta-group">
            <input type="url" placeholder="Enter your domain (e.g., example.com)" className="domain-input" />
            <button className="btn-primary">Analyze Site</button>
          </div>
          <p className="trust-tag">Trusted by 2,000+ digital agencies worldwide.</p>
        </section>

        {/* Features Grid */}
        <section id="features" className="features-section">
          <div className="section-header">
            <h2>Everything you need, <br/>nothing you don't.</h2>
          </div>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <div key={i} className="tool-card">
                <span className="tool-icon">{tool.icon}</span>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Stats / Social Proof */}
        <section className="stats-bar">
          <div className="stat-item">
            <strong>1.2B</strong>
            <span>Keywords Tracked</span>
          </div>
          <div className="stat-item">
            <strong>99.9%</strong>
            <span>Data Accuracy</span>
          </div>
          <div className="stat-item">
            <strong>200ms</strong>
            <span>Avg. Report Speed</span>
          </div>
        </section>

        {/* FAQ Section (Excellent for Long-tail SEO) */}
        <section className="faq-section">
          <h2>Common Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-question">
                  {faq.q}
                  <span>{activeFaq === i ? '−' : '+'}</span>
                </div>
                {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;