import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/Header.css'

const Header = () => {
  return (
    <header className="nav-container">
      {/* Logo Section */}
    <Link to="/">
      <div className="logo">
        SEOSTREAM
      </div>
      </Link>

      {/* Combined Navigation Links */}
      <nav className="main-nav">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/contact">Contact</Link>
        <button className="btn-secondary">Log In</button>
      </nav>
    </header>
  );
};

export default Header;