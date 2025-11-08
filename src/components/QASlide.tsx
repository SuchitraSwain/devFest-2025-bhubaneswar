import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";
import "../styles/components/GeolocationSlides.scss";

export const QASlide = () => (
  <div className="slide intro-slide">
    <div className="slide-header">
      <h2>❓ Questions & Answers</h2>
      <p>Thank you for your attention! Let's discuss</p>
    </div>

    <div className="qa-content">
      <div className="qa-icon">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.67 11.45 12.9 12.17 12.17L13.1 11.24C13.45 10.9 13.67 10.47 13.67 10C13.67 9.03 12.9 8.26 11.93 8.26C10.96 8.26 10.19 9.03 10.19 10H8.19C8.19 7.13 10.56 4.76 13.43 4.76C16.3 4.76 18.67 7.13 18.67 10C18.67 11.11 18.25 12.11 17.55 12.9L16.65 13.8C16.25 14.2 16 14.7 16 15.33V16H14V15.33C14 14.67 14.25 14.17 14.65 13.77L15.55 12.87C15.85 12.57 16 12.27 16 12C16 11.67 15.85 11.37 15.55 11.07L15.07 11.25Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <h3 className="qa-title">Have questions?</h3>
      <p className="qa-description">
        Feel free to ask anything about Chrome DevTools, AI features, or
        debugging techniques!
      </p>
      <div className="qa-links">
        <Link to="/qa" className="qa-page-link">
          📋 View All Q&A Questions & Answers
        </Link>
      </div>
      <div className="contact-info">
        <p className="contact-text">
          <strong>Connect with me:</strong>
        </p>
        <div className="qr-code-container">
          <QRCodeSVG
            value="https://www.linkedin.com/in/suchitra-swain-47562ab7/"
            size={200}
            level="H"
            includeMargin={true}
          />
          <p className="qr-code-label">Scan to connect on LinkedIn</p>
        </div>
      </div>
    </div>
  </div>
);

export default QASlide;
