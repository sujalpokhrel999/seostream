import '../Assets/css/Footer.css'

const Footer = () => {
    return(
        <>
<div className="footer-content">
  <div className="footer-brand">
    <h3>SEOSTREAM</h3>
    <p>Better data for a faster web.</p>
  </div>
  <div className="footer-links">
    <div>
      <h4>Product</h4>
      <span>Pricing</span>
      <span>API</span>
      <span>Extensions</span>
    </div>
    <div>
      <h4>Support</h4>
      <span >Documentation</span>
      <span >Contact</span>
      <span>Privacy</span>
    </div>
  </div>
</div>
<div className="footer-bottom">
  © {new Date().getFullYear()} SEOStream Inc. Made with precision.
</div>
</>
    );
}
export default Footer;