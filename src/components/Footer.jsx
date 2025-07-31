import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          <h2>Clothify</h2>
          <p>Your favorite place to shop the latest trends with comfort and confidence.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: support@clothify.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Mumbai, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Clothify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
