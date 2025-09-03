import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./index.css";

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us-section-container">
      <div className="contact-us-container">
        <h3 className="contact-us-title">Contact Us</h3>
        <div className="d-lg-flex gap-4">
          {/* Contact Info Section */}
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div className="contact-details">
                <h4>Our Address</h4>
                <p>
                  Ratna Colony, Road No - 05, Kuntloor, Hayathnagar, R.R. Dist,
                  Telangana - 501505
                </p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div className="contact-details">
                <h4>Phone Number</h4>
                <p>+91 8885639687</p>
              </div>
            </div>

            <div className="contact-item">
              <FaWhatsapp className="icon" />
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p>+91 9640735819</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div className="contact-details">
                <h4>Email</h4>
                <p>svgypsymplaster@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3808.5018620607416!2d78.63299164921045!3d17.33956758110735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba02735778597%3A0x54fddd547d63675!2s8JQJ%2BRXX%2C%20Shivshankar%20Nagar%2C%20Kuntloor%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1756905721302!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <a
                href="https://maps.app.goo.gl/JF9QSAeCQ84QVPLW7"
                target="_blank"
                rel="noopener noreferrer"
                className="map-overlay-link"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
