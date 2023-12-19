import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Stars from "./components/Stars";
import Features from "./components/Features";
import OurFeatures from "./components/OurFeatures";
import OurProducts from "./components/OurProducts";
import VFoods from "./components/VFoods";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Stars />
      <OurFeatures />
      <OurProducts />
      <VFoods />
      <Footer />
    </>
  );
}

export default App;
