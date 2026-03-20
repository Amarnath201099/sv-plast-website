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
                  Pasumamula Road, Kuntloor, Hayathnagar, R.R. District, Telangana – 501505
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
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3808.394707409353!2d78.62815447516391!3d17.344729983535117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIwJzQxLjAiTiA3OMKwMzcnNTAuNiJF!5e0!3m2!1sen!2sin!4v1774000136863!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <a
              aria-label="google maps page"
                href="https://maps.app.goo.gl/XaLU2xvubjNqQg9D8"
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
