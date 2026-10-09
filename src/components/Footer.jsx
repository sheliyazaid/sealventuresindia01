import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              <span className="footer-mark" aria-hidden="true">SV</span>
              <span>Sealventures <small>INDIA</small></span>
            </Link>
            <p className="footer-tagline">
              At Sealventures India Private Limited, we maintain quality management system with strong emphasis on the
              continuous improvement quality, engineering, manufacturing & business process.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/Sealventuresindia" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sealventuresindia/?hl=en" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about/overview" className="footer-link">About Us</Link></li>
              <li><Link to="/certificate" className="footer-link">Certificate</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="footer-heading">Our Products</h5>
            <ul className="footer-list">
              <li><Link to="/products/cartridge-seal" className="footer-link">Cartridge Seal</Link></li>
              <li><Link to="/products/rotary-union" className="footer-link">Rotary Unions</Link></li>
              <li><Link to="/products/bearing-isolator" className="footer-link">Bearing Isolators</Link></li>
              <li><Link to="/products/supply-system" className="footer-link">Supply Systems</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="footer-list">
              <li>
                <a href="mailto:info@sealventuresindia.com" className="footer-link">info@sealventuresindia.com</a>
                <br />
                <a href="mailto:sealventuresindia@gmail.com" className="footer-link">sealventuresindia@gmail.com</a>
              </li>
              <li className="footer-contact">+91 98332 54562 / 98333 54562</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sealventures India. All Rights Reserved.</p>
          <p>Sealventures India – Precision Sealing Solutions for Critical Industries.</p>
        </div>
      </div>
    </footer>
  );
}
