import "./App.css";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar/index.js";
import Home from "./components/Home/index.js";
import MissionVision from "./components/MissionVision/index.js";
import OurWork from "./components/OurWork/index.js";
import AboutAndWhy from "./components/AboutAndWhy/index.js";
import ContactUs from "./components/ContactUs/index.js";
import FloatingContactBar from "./components/FloatingContactBar/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  return (
    <div>
      <Helmet>
        <title>SV PLAST | Gypsum Plaster Suppliers in India</title>
        <meta
          name="description"
          content="SV PLAST provides eco-friendly, crack-free gypsum plaster across India. Faster drying, fire resistant, and highly economical."
        />
        <meta
          name="keywords"
          content="gypsum plaster, SV PLAST, eco-friendly plaster, construction material India, plastering solutions"
        />
        <meta
          property="og:title"
          content="SV PLAST - Eco-Friendly Gypsum Plaster in India"
        />
        <meta
          property="og:description"
          content="Faster, smoother, and greener plastering solution imported from Iran. Available across India."
        />
        <meta property="og:image" content="/logo_icon.png" />
        <meta property="og:url" content="https://svplast.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SV PLAST - Gypsum Plaster Supplier in India"
        />
        <meta
          name="twitter:description"
          content="Durable, smooth-finish gypsum plaster. Eco-friendly alternative to cement plaster."
        />
        <meta name="twitter:image" content="/logo_icon.png" />
      </Helmet>

      <NavBar />
      <Home />
      <MissionVision />
      <OurWork />
      <AboutAndWhy />
      <ContactUs />
      <FloatingContactBar />
      <Footer />
    </div>
  );
}

export default App;
