import { useRef, useState } from "react";
import DownloadButton from "../DownloadButton";
import logo from "../../assets/logo.png";
import "./index.css";

const NavBar = () => {
  const navRef = useRef();
  const [activelink, setActiveLink] = useState("home");

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    const navbarCollapse = navRef.current;
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const collapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      collapse.hide();
    }
  };

  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-none nav-bar-container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo-text">PLAST</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            ref={navRef}
          >
            <div className="navbar-nav ms-auto gap-1">
              <a
                className={`nav-link ${
                  activelink === "home" ? "active-link" : ""
                }`}
                href="#home"
                onClick={() => handleNavLinkClick("home")}
              >
                Home
              </a>
              <a
                className={`nav-link ${
                  activelink === "mission-vision" ? "active-link" : ""
                }`}
                href="#mission-vision"
                onClick={() => handleNavLinkClick("mission-vision")}
              >
                Our Mission
              </a>
              <a
                className={`nav-link ${
                  activelink === "our-work" ? "active-link" : ""
                }`}
                href="#our-work"
                onClick={() => handleNavLinkClick("our-work")}
              >
                Our Work
              </a>
              <a
                className={`nav-link ${
                  activelink === "about-why" ? "active-link" : ""
                }`}
                href="#about-why"
                onClick={() => handleNavLinkClick("about-why")}
              >
                About
              </a>
              <a
                className={`nav-link ${
                  activelink === "contact-us" ? "active-link" : ""
                }`}
                href="#contact-us"
                onClick={() => handleNavLinkClick("contact-us")}
              >
                Contact Us
              </a>
            </div>
          </div>
          <DownloadButton
            text={"Download Brochure"}
            classNames={"d-none d-lg-block"}
            style={{ fontSize: "14px" }}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
