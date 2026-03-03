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
      <span href="#">Pricing</span>
      <span href="#">API</span>
      <span href="#">Extensions</span>
    </div>
    <div>
      <h4>Support</h4>
      <span href="#">Documentation</span>
      <span href="#">Contact</span>
      <span href="#">Privacy</span>
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