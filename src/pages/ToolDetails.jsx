import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../Assets/css/Tools.css';

const ToolDetail = () => {
  const { id } = useParams();

  // Content for your specific Lovable hosted tool
  const toolData = {
    "json-ld-generator": {
      name: "JSON-LD Schema Generator",
      tagline: "Increase your Click-Through Rate (CTR) with Rich Snippets.",
      appUrl: "https://json-ldgenerator.lovable.app",
      features: [
        "Support for Article, Product, and FAQ Schemas",
        "Instant validation against Google's standards",
        "One-click copy to clipboard",
        "Mobile-friendly interface"
      ],
      description: "Our JSON-LD Generator is a lightweight interface that helps you build structured data that search engines love. By adding this code to your site, you help Google understand your content better, leading to stars, prices, and FAQ dropdowns in search results."
    }
  };

  const currentTool = toolData[id] || toolData["json-ld-generator"];

  useEffect(() => {
    document.title = `${currentTool.name} | SEO Stream Tools`;
  }, [currentTool]);

  return (
    <div className="tool-detail-page">
      <div className="detail-container">
        <Link to="/tools" className="back-link">← All Tools</Link>
        
        <div className="detail-split">
          <div className="detail-main">
            <span className="detail-badge">Technical SEO</span>
            <h1>{currentTool.name}</h1>
            <p className="tagline">{currentTool.tagline}</p>
            
            <div className="detail-description">
              <h3>Why use this tool?</h3>
              <p>{currentTool.description}</p>
            </div>

            <div className="features-list">
              <h3>Key Capabilities</h3>
              <ul>
                {currentTool.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>

          <div className="detail-sidebar">
            <div className="action-card">
              <h4>Ready to Generate?</h4>
              <p>Launch the generator in a new tab to start building your schema.</p>
              <a href={currentTool.appUrl} target="_blank" rel="noreferrer" className="launch-btn">
                Launch Tool 🚀
              </a>
              <span className="security-note">Hosted securely on Lovable.app</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;