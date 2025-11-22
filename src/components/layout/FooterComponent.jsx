import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2 className="logo-footer">World Friend</h2>
          <p className="footer-text">
            We are WorldFriend – a platform dedicated to helping you easily discover attractive locations, events, and exciting places in the city you’re in. Our mission is to make your time more enjoyable, meaningful, and full of new experiences.
          </p>

          <div className="footer-socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>

        <div className="footer-links">
          <h4>Help</h4>
          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

      </div>

      <p className="footer-copy">© Copyright 2021, All Rights Reserved by Postcraft</p>
    </footer>
  );
}
