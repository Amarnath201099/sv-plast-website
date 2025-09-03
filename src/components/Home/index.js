import React from "react";
import DownloadButton from "../DownloadButton";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import home_bag_img from "../../assets/home_bag_img.jpeg";
import "./index.css";

const handlePhoneClick = () => {
  window.location.href = "tel:+918885639687";
};

const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    "Hello, I'm interested in SV PLAST Gypsum Plaster. Please give me a call back at your convenience."
  );
  window.open(`https://wa.me/919640735819?text=${message}`, "_blank");
};

const Home = () => (
  <section id="home">
    <div className="home-container">
      <div className="info-container">
        <h1 className="home-heading">SV PLAST</h1>
        <h2 className="home-heading-2">GYPSUM PLASTER</h2>

        <div className="home-contact-container">
          <h3 className="home-contact-title">Contact Us</h3>
          <div className="home-contact-buttons">
            <button
              className="home-contact-button home-phone-button"
              onClick={handlePhoneClick}
            >
              <FiPhone className="home-contact-icon" /> Phone
            </button>

            <button
              className="home-contact-button home-whatsapp-button"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp className="home-contact-icon" /> WhatsApp
            </button>
          </div>
        </div>

        <DownloadButton text={"Download Brochure"} style={{ margin: "0px" }} />
      </div>
      <img src={home_bag_img} alt="gypsum plaster" className="home-img" />
    </div>
  </section>
);

export default Home;
