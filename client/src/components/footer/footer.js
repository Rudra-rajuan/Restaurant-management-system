import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to our blog! We share insights, tips, and stories on topics
            that matter to you. Stay connected and keep exploring.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Blog Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
