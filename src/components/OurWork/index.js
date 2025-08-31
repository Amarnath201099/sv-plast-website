import { useEffect, useRef } from "react";
import slide_1 from "../../assets/Slide_1.jpeg";
import slide_2 from "../../assets/Slide_2.jpeg";
import slide_3 from "../../assets/Slide_3.jpeg";
import slide_4 from "../../assets/Slide_4.jpeg";
import slide_5 from "../../assets/Slide_5.jpeg";
import slide_6 from "../../assets/Slide_6.jpeg";
import slide_7 from "../../assets/Slide_7.jpeg";
import slide_8 from "../../assets/Slide_8.jpeg";

import YouTubeEmbed from "../YouTubeEmbed";

import "./index.css";

const slides = [
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  slide_6,
  slide_7,
  slide_8,
];

const OurWork = () => {
  const carouselRef = useRef(null);
  const bsCarouselRef = useRef(null); // store Bootstrap Carousel instance

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !bsCarouselRef.current) {
          // Initialize carousel when section comes into view
          bsCarouselRef.current = new window.bootstrap.Carousel(
            carouselRef.current,
            {
              interval: 2000,
              ride: "carousel",
            }
          );
        }
      },
      { threshold: 0.4 } // Trigger when 40% of carousel is visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Pause the carousel on user interaction
  const handleUserClick = () => {
    if (bsCarouselRef.current) {
      bsCarouselRef.current.pause();
    }
  };

  return (
    <section className="our-work-section" id="our-work">
      <div className="mb-4">
        <h3 className="our-work-heading">Our Work</h3>
        <div className="our-work-container">
          <div
            id="carouselExampleInterval"
            className="carousel slide carousel-container"
            ref={carouselRef}
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                  onClick={handleUserClick}
                />
              ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
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

            {/* Prev Button */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
              onClick={handleUserClick}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{
                  filter: "brightness(0) invert(1)",
                  backgroundSize: "80% 80%",
                }}
              />
              <span className="visually-hidden">Previous</span>
            </button>

            {/* Next Button */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
              onClick={handleUserClick}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{
                  filter: "brightness(0) invert(1)",
                  backgroundSize: "80% 80%",
                }}
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <YouTubeEmbed />
    </section>
  );
};

export default OurWork;
