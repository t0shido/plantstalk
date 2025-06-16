import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">PlantsTalk</h3>
          <p className="footer-description">
            Transformative plant medicine retreats in sacred settings, 
            guided by experienced facilitators dedicated to your healing journey.
          </p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="social-icon instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="social-icon facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="social-icon youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/retreats">Retreats</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Retreats</h4>
          <ul className="footer-links">
            <li><Link to="/retreats#weekend">Weekend Immersion</Link></li>
            <li><Link to="/retreats#weeklong">Week-long Journey</Link></li>
            <li><Link to="/retreats#personal">Personal Healing</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <address className="contact-info">
            <p><i className="icon email-icon"></i> info@plantstalk.com</p>
            <p><i className="icon phone-icon"></i> +1 (555) 123-4567</p>
            <p><i className="icon location-icon"></i> Sacred Valley, Peru</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} PlantsTalk Retreat. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
