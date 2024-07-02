import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer-text">
        <h3 className="logo">EduFusion</h3>
        <p>Top Learning experience that creates more <br /> Talent in the World.</p>
        <p>&copy; 2024 EduFusion. All rights reserved.</p>
      </div>
      <div className="Footer-sections">
        <div className="section">
          <h4>Social</h4>
          <p><a href='https://www.instagram.com/'>Instagram</a></p>
          <p><a href='https://x.com/'>Twitter</a></p>
          <p><a href='https://facebook.com'>Facebook</a></p>
          <p><a href='https://github.com'>Github</a></p>
        </div>
        <div className="section">
          <h4>Legal</h4>
          <p><a href='#'>Terms</a></p>
          <p><a href='#'>Privacy</a></p>
          <p><a href='#'>Cookies</a></p>
        </div>
        <div className="section">
          <h4>Company</h4>
          <p><a href='#'>About Us</a></p>
          <p><a href='#'>Blogs</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
