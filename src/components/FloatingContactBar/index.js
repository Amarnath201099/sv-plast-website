import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "./index.css";

const FloatingContactBar = () => {
  return (
    <div className="floating-contact-bar d-none d-lg-flex">
      <a
        href="tel:+918885639687"
        className="contact-icon phone"
        title="Call Us"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/919640735819"
        className="contact-icon whatsapp"
        title="WhatsApp Us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://maps.app.goo.gl/JF9QSAeCQ84QVPLW7"
        className="contact-icon location"
        title="Find Us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMapMarkerAlt />
      </a>
    </div>
  );
};

export default FloatingContactBar;
