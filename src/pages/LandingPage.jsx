import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/LandingPage.css'
const tools = [
  { num: "01", icon: "◎", title: "Technical Auditor", desc: "Identify crawl errors, broken links, and Core Web Vital failures before Google does." },
  { num: "02", icon: "↗", title: "Keyword Explorer", desc: "Discover high-volume, low-competition search terms with intent-based filtering." },
  { num: "03", icon: "⌁", title: "Backlink Monitor", desc: "Track your domain authority and uncover toxic links harming your rankings." },
  { num: "04", icon: "◈", title: "SERP Tracker", desc: "Monitor your keyword positions across 190 countries and search engines." },
  { num: "05", icon: "{ }", title: "Schema Generator", desc: "Generate valid structured data markup in seconds — no dev required." },
];

const faqs = [
  { q: "How often are rankings updated?", a: "Our SERP tracker refreshes data every 24 hours. Enterprise plans include on-demand crawls for time-sensitive campaigns and rank checks." },
  { q: "Can I export reports under my own brand?", a: "Yes. All audit reports, keyword exports, and rank histories can be exported as clean, white-label PDFs — perfect for client delivery." },
  { q: "Is there a free tier?", a: "Free accounts include 10 keyword lookups per day, one site audit per month, and 30-day rank tracking for up to 10 keywords." },
  { q: "Does SEOStream work for local SEO?", a: "Absolutely. You can track rankings by city, county, or zip code, and our audit flags local schema opportunities automatically." },
  { q: "How do you source your keyword data?", a: "We aggregate search volume from multiple first-party sources and refresh monthly, giving you accurate metrics across 40+ languages and regions." },
];

// const testimonials = [
//   { quote: "We cut the time our team spends on audits by two-thirds. The SERP tracker alone pays for the subscription.", name: "Priya M.", role: "Head of SEO, Lattice Agency", initial: "P" },
//   { quote: "Finally an SEO suite that doesn't feel like it was designed in 2011. Clean, fast, and the data is genuinely accurate.", name: "Tom W.", role: "Founder, Waymark Digital", initial: "T" },
//   { quote: "The schema generator saved us about 40 hours of developer time on a large e-commerce migration. Outstanding.", name: "Leila A.", role: "Technical SEO Lead, Shopvault", initial: "L" },
// ];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [domain, setDomain] = useState('');
  const [ctaDomain, setCtaDomain] = useState('');
  const navigate = useNavigate();
  const handleAnalyze = (targetUrl) => {
    if (!targetUrl) return;
    // Encode the URL so it's safe to pass in the address bar
    const encodedUrl = encodeURIComponent(targetUrl);
    navigate(`/analyze?url=${encodedUrl}`);
  };

  return (
    <>
      <div className="lp-root">
        <main>
          {/* HERO */}
          <section className="lp-hero" aria-label="Hero">
            <div className="lp-hero-bg" aria-hidden="true" />
            <div className="lp-hero-eyebrow">SEO intelligence platform</div>
            <h1>
              Stop guessing.<br />
              Start <em>ranking.</em>
            </h1>
            <p className="lp-hero-sub">
              A focused suite of SEO tools for modern developers and marketers.
              Actionable data, zero bloat — just the insights that move rankings.
            </p>
            <div className="lp-hero-form" role="search">
              <input
                type="url"
                className="lp-hero-input"
                placeholder="yourdomain.com"
                value={domain}
                onChange={e => setDomain(e.target.value)}
                aria-label="Enter your domain to analyze"
              />
              <button 
  className="lp-hero-btn" 
  onClick={() => handleAnalyze(domain)}
  aria-label="Analyze site">
  Analyze site →
</button>
            </div>
            <p className="lp-hero-trust">
              Trusted by <strong>2,000+ digital agencies</strong> worldwide &mdash; no credit card required
            </p>
            <div className="lp-hero-scroll" aria-hidden="true">
              <div className="lp-scroll-line" />
              scroll
            </div>
          </section>
          {/* FEATURES */}
          <section id="features" className="lp-features" aria-labelledby="features-heading">
            <div className="lp-section-label">Platform features</div>
            <div className="lp-features-header">
              <h2 id="features-heading">
                Everything you need.<br />
                <em>Nothing you don't.</em>
              </h2>
              <p className="lp-features-desc">
                Five precision tools covering every layer of organic search — from crawl health to structured data. Built for professionals who value accuracy over noise.
              </p>
            </div>
            <div className="lp-tools-grid">
              {tools.map((tool, i) => (
                <article className="lp-tool-card" key={i}>
                  <div className="lp-tool-number">{tool.num}</div>
                  <span className="lp-tool-icon" aria-hidden="true">{tool.icon}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                  <div className="lp-tool-arrow" aria-hidden="true">→</div>
                </article>
              ))}
            </div>
          </section>

          {/* STATS */}
          <section className="lp-stats" aria-label="Platform statistics">
            <div className="lp-stats-inner">
              {[
                { num: "1.2", unit: "B", label: "Keywords indexed" },
                { num: "99.9", unit: "%", label: "Data accuracy" },
                { num: "200", unit: "ms", label: "Avg. report speed" },
                { num: "190", unit: "+", label: "Countries tracked" },
              ].map((s, i) => (
                <div className="lp-stat" key={i}>
                  <div className="lp-stat-num">{s.num}<span>{s.unit}</span></div>
                  <div className="lp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          {/* <section className="lp-testimonials" aria-labelledby="testimonials-heading">
            <div className="lp-testimonials-inner">
              <div className="lp-section-label">Customer stories</div>
              <h2 id="testimonials-heading">
                Loved by the<br />
                <em>people who rank.</em>
              </h2>
              <div className="lp-testimonials-grid">
                {testimonials.map((t, i) => (
                  <blockquote className="lp-testimonial" key={i}>
                    <div className="lp-stars" aria-label="5 stars">★★★★★</div>
                    <p className="lp-testimonial-quote">"{t.quote}"</p>
                    <footer className="lp-testimonial-author">
                      <div className="lp-testimonial-avatar" aria-hidden="true">{t.initial}</div>
                      <div>
                        <div className="lp-testimonial-name">{t.name}</div>
                        <div className="lp-testimonial-role">{t.role}</div>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section> */}

          {/* CTA BAND */}
          <section className="lp-cta-band" aria-labelledby="cta-heading">
            <div className="lp-cta-band-inner">
              <div className="lp-section-label" style={{justifyContent:'center'}}>Get started today</div>
              <h2 id="cta-heading">
                Your rankings<br /><em>aren't going to fix themselves.</em>
              </h2>
              <p>Run your first site audit free in under 60 seconds. No account needed to start.</p>
              <div className="lp-cta-band-form" role="search">
                <input
                  type="url"
                  className="lp-cta-band-input"
                  placeholder="yourdomain.com"
                  value={ctaDomain}
                  onChange={e => setCtaDomain(e.target.value)}
                  aria-label="Enter your domain"
                />
                <button className="lp-cta-band-btn" aria-label="Run free audit" onClick={() => handleAnalyze(ctaDomain)}>
                  Run free audit
                </button>
              </div>
              <p className="lp-cta-fine">No credit card required &middot; Free forever plan available</p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="lp-faq" aria-labelledby="faq-heading">
  <div className="lp-faq-inner">
    <div className="lp-section-label">FAQ</div>
    <h2 id="faq-heading">
      Common <em>questions.</em>
    </h2>
    <p className="lp-faq-sub">Everything you need to know about SEOStream. Can't find the answer you're looking for? Reach out to our support team.</p>
    
    <div className="lp-faq-list"> {/* Removed role="list" to avoid role conflicts */}
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`lp-faq-item ${activeFaq === i ? 'open' : ''}`}
          role="button" // Changed from listitem to button to support aria-expanded
          tabIndex={0}  // Allows keyboard users to focus the item
          onClick={() => setActiveFaq(activeFaq === i ? null : i)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveFaq(activeFaq === i ? null : i);
            }
          }}
          aria-expanded={activeFaq === i}
        >
          <div className="lp-faq-question">
            <span>{faq.q}</span>
            <span className="lp-faq-icon" aria-hidden="true">
              {activeFaq === i ? '−' : '+'}
            </span>
          </div>
          {activeFaq === i && (
            <p className="lp-faq-answer">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
        </main>
      </div>
    </>
  );
}