import "./App.css";
import NavBar from "./components/NavBar/index.js";
import Home from "./components/Home/index.js";
import MissionVision from "./components/MissionVision/index.js";
import OurWork from "./components/OurWork/index.js";
import AboutAndWhy from "./components/AboutAndWhy/index.js";
import Footer from "./components/Footer/index.js";
import ContactUs from "./components/ContactUs/index.js";
import FloatingContactBar from "./components/FloatingContactBar/index.js";

function App() {
  return (
    <div>
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
