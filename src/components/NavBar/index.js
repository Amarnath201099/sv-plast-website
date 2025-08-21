import "./index.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-none nav-bar-container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Navbar
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
              <a className="nav-link" href="#mission-vision">
                Our Mission
              </a>
              <a className="nav-link" href="#our-work">
                Our Work
              </a>
              <a className="nav-link" href="#about-why">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
