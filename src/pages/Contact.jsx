import { useEffect } from 'react';
import '../Assets/css/Contact.css';

const Contact = () => {
  useEffect(() => { 
    document.title = "Contact SEO Stream - Let's Scale Your Traffic"; 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! The SEO Stream team will get back to you within 24 hours.");
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-grid">
          
          {/* Left Side: Information */}
          <div className="contact-info">
            <span className="contact-tag">Get in Touch</span>
            <h1>Let’s build something that ranks.</h1>
            <p>
              Whether you have a question about our free tools or need a deep technical 
              audit, we're here to help you navigate the search landscape.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <strong>Response Time</strong>
                <p>Typical response within 24 business hours.</p>
              </div>
              <div className="info-item">
                <strong>Location</strong>
                <p>Digital First — Available Globally.</p>
              </div>
              <div className="info-item">
                <strong>Support</strong>
                <p>support@seostream.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="user_name">Full Name</label>
                <input type="text" id="user_name" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Work Email</label>
                <input type="email" id="user_email" placeholder="john@company.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">I'm interested in...</label>
                <select id="service">
                  <option>Free Tools Support</option>
                  <option>Custom SEO Audit</option>
                  <option>Content Strategy</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="user_msg">Message</label>
                <textarea id="user_msg" rows="5" placeholder="Tell us about your website goals..."></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;