import "./index.css";

const visionPoints = [
  {
    title: "Faster Construction",
    desc: "Gypsum plastering dries faster and requires no water curing, enabling quicker construction.",
  },
  {
    title: "Lower Electricity Bills",
    desc: "Low thermal conductivity (0.25 w/m-k) saves energy compared to traditional plasters.",
  },
  {
    title: "Shrinkage Crack Elimination",
    desc: "Special formulation prevents shrinkage cracks for a durable finish.",
  },
  {
    title: "No Extra Ingredients",
    desc: "Ready-to-use mix requires only water, reducing on-site preparation.",
  },
  {
    title: "Fire Inhibitor",
    desc: "Contains crystal water and is non-combustible — acts as a fire barrier.",
  },
  {
    title: "Economical",
    desc: "Requires less labor and time than traditional plastering, reducing cost.",
  },
  {
    title: "Fineness Guaranteed",
    desc: "200 mesh fine gypsum powder ensures smooth interior finishes.",
  },
  {
    title: "Aesthetics",
    desc: "Offers a stellar finish for interior walls and ceilings.",
  },
  {
    title: "Low Density",
    desc: "50% lighter than cement plaster — easier to handle and apply.",
  },
];

const MissionVision = () => {
  return (
    <section className="mission-vision-section" id="mission-vision">
      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          We are committed to providing technical support across India,
          delivering a better plastering experience. Each bag of SV PLAST gypsum
          plasters contains carefully curated fine powders offering smooth
          internal finishing. Our skilled workforce is always ready to support
          customers throughout the plastering process. We go the extra mile to
          deliver on our commitments.
        </p>
      </div>

      <div className="vision">
        <h3>Our Vision</h3>
        <p>
          Our goal is to fully replace sand, cement, and putty plaster with
          eco-friendly gypsum plaster. This green material reduces pollution, is
          easy to recycle, and lowers carbon footprints — all while maintaining
          top-quality deliverables.
        </p>

        <div className="vision-grid">
          {visionPoints.map((point, index) => (
            <div className="vision-box" key={index}>
              <h4>{point.title}</h4>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
