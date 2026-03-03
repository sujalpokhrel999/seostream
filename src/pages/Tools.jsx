import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/Tools.css';

const Tools = () => {
  useEffect(() => { 
    document.title = "Free SEO Tools - SEO Stream"; 
  }, []);

  const toolCategories = [
    {
      category: "Technical SEO",
      items: [
        { 
          id: "json-ld-generator", 
          name: "JSON-LD Schema Generator", 
          desc: "Create high-converting rich snippets without touching code.", 
          badge: "Popular",
          external: false
        },
        { 
          id: "core-web-audit", 
          name: "Vitals Speed Test", 
          desc: "Deep-dive into LCP, FID, and CLS metrics.", 
          badge: "Updated",
          external: false
        }
      ]
    },
    {
      category: "Content & Assets",
      items: [
        { 
          id: "webp-converter", 
          name: "Next-Gen Image Converter", 
          desc: "Bulk convert PNG/JPG to WebP for 80% faster loading.", 
          badge: "Free",
          external: false
        },
        { 
          id: "meta-tag-preview", 
          name: "SERP Preview Tool", 
          desc: "Visualize how your site looks on Google and Social Media.", 
          badge: "New",
          external: false
        }
      ]
    }
  ];

  return (
    <div className="tools-container">
      <header className="tools-hero">
        <h1>SEO Power Tools</h1>
        <p>Professional utilities designed for speed and precision. No subscriptions, no limits.</p>
      </header>

      <div className="tools-wrapper">
        {toolCategories.map((cat, idx) => (
          <section key={idx} className="tool-category-group">
            <h2 className="category-label">{cat.category}</h2>
            <div className="tool-list">
              {cat.items.map((tool) => (
                <div key={tool.id} className="tool-row-card">
                  <div className="tool-info">
                    <div className="tool-title-wrap">
                      <h3>{tool.name}</h3>
                      {tool.badge && <span className="tool-badge">{tool.badge}</span>}
                    </div>
                    <p>{tool.desc}</p>
                  </div>
                  <div className="tool-action">
                    <Link to={`/tools/${tool.id}`} className="tool-btn">Open Tool →</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Tools;