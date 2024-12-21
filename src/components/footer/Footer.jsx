import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-blue-900 to-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-semibold">&copy; 2024 Financial Insights. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-8 mt-6">
          <li>
            <a href="/" className="footer-link">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/" className="footer-link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="footer-link">
              Disclaimer
            </a>
          </li>
          <li>
            <a href="/" className="footer-link">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="/" aria-label="Facebook" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" aria-label="Twitter" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" aria-label="LinkedIn" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="/" aria-label="Instagram" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
