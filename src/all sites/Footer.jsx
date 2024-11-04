import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <h2>Amart</h2>
          <p>
            Your one-stop shop for all your needs. Quality products, best
            prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@Amart.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: Sadashiv peth E-commerce St., Pune ,India</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 AdityaMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
