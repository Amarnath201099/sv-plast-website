import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./index.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h3 className="contact-us-title">Contact Us</h3>

      <div className="contact-item">
        <FaMapMarkerAlt className="icon" />
        <div className="contact-details">
          <h4>Our Address</h4>
          <p>1234 Hyderabad, Telangana</p>
        </div>
      </div>

      <div className="contact-item">
        <FaPhoneAlt className="icon" />
        <div className="contact-details">
          <h4>Phone Number</h4>
          <p>+1 555 xxxxx</p>
        </div>
      </div>

      <div className="contact-item">
        <FaWhatsapp className="icon" />
        <div className="contact-details">
          <h4>WhatsApp</h4>
          <p>+1 555 xxxxx</p>
        </div>
      </div>

      <div className="contact-item">
        <FaEnvelope className="icon" />
        <div className="contact-details">
          <h4>Email</h4>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
