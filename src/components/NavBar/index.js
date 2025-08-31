import { useRef } from "react";
import DownloadButton from "../DownloadButton";
import logo from "../../assets/logo.png";
import "./index.css";

const NavBar = () => {
  const navRef = useRef();

  const handleNavLinkClick = () => {
    const navbarCollapse = navRef.current;
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      // Trigger Bootstrap's collapse
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
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#home" onClick={handleNavLinkClick}>
                Home
              </a>
              <a
                className="nav-link"
                href="#mission-vision"
                onClick={handleNavLinkClick}
              >
                Our Mission
              </a>
              <a
                className="nav-link"
                href="#our-work"
                onClick={handleNavLinkClick}
              >
                Our Work
              </a>
              <a
                className="nav-link"
                href="#about-why"
                onClick={handleNavLinkClick}
              >
                About
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
