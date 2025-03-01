import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
  <div className="footer-container">
    <div>
      <h3 className="footer-title">Our Solutions</h3>
      <ul className="footer-links">
        <li>Products / E-Shop</li>
        <li>Assembly Technology Expert</li>
        <li>Smart Factory Logistics</li>
      </ul>
    </div>
    
    <div>
      <h3 className="footer-title">About RNJ</h3>
      <ul className="footer-links">
        <li>How we add value</li>
        <li>About RNJ</li>
        <li>Investor Relations</li>
        <li>Jobs & Careers</li>
      </ul>
    </div>

    <div>
      <h3 className="footer-title">Legal</h3>
      <ul className="footer-links">
        <li>Privacy Policy</li>
        <li>Modify cookie preferences</li>
        <li>General Terms and Conditions</li>
        <li>Imprint</li>
      </ul>
    </div>

    <div>
      <h3 className="footer-title">Contact</h3>
      <p className="footer-links">Contact us</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>Join our community and stay connected</p>
    <div className="social-icons">
      <FaLinkedin />
      <FaX />
      <FaYoutube />
    </div>
    <p className="copyright">Copyright © 2025 RNJ Metal. | All rights reserved.</p>
  </div>
  </footer>
  );
};

export default Footer;
