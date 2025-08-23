import home_bag_img from "../../assets/home_bag_img.jpeg";
import "./index.css";

const Home = () => (
  <section id="home">
    <div className="home-container">
      <div className="info-container">
        <h1 className="home-heading">SV PLAST</h1>
        <h2 className="home-heading-2">GYPSUM PLASTER</h2>
        <button className="btn home-contact-btn" type="button">
          Contact Us
        </button>
      </div>
      <img src={home_bag_img} alt="gypsum plaster" className="home-img" />
    </div>
  </section>
);

export default Home;
