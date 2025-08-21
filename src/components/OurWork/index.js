import slide_1 from "../../assets/Slide_1.jpeg";
import slide_2 from "../../assets/Slide_2.jpeg";
import slide_3 from "../../assets/Slide_3.jpeg";
import slide_4 from "../../assets/Slide_4.jpeg";
import slide_5 from "../../assets/Slide_5.jpeg";
import slide_6 from "../../assets/Slide_6.jpeg";
import slide_7 from "../../assets/Slide_7.jpeg";

import "./index.css";

const slides = [slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7];

const OurWork = () => {
  return (
    <section className="our-work-section" id="our-work">
      <h3 className="our-work-heading"> Our Work</h3>
      <div className="our-work-container">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-container"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="3000"
                key={index}
              >
                <img
                  src={slide}
                  className="d-block slide-img"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
