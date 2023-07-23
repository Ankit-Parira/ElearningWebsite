import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-page">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">About Us</h2>
          <p className="footer-text"><b>We value your feedback and inquiries. For any questions or assistance, feel free to reach out to our support team at support@elearningapp.com or call us at +91 - 7992380450. We are here to help you on your learning journey.</b><br/></p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              <p className="footer-item-text">Bokaro, Jharkhand</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-phone-alt footer-icon"></i>
              <p className="footer-item-text">+91 123987654</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-envelope footer-icon"></i>
              <p className="footer-item-text"><a href="mailto:gaurav.20jics018@jietjodhpur.ac.in">ankitparira9@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
