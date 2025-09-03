import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="footer-item">
          <FaEnvelope className="footer-icon" />
          <a href="mailto:svgypsymplaster@gmail.com">
            svgypsymplaster@gmail.com
          </a>
        </div>
        <div className="footer-item">
          <FaPhoneAlt className="footer-icon" />
          <a href="tel:+918885639687">+91 88856 39687</a>
        </div>
        <div className="footer-item">
          <FaWhatsapp className="footer-icon" />
          <a
            href="https://wa.me/919640735819"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
      <p className="footer-bottom">
        © {new Date().getFullYear()} SV PLAST. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
