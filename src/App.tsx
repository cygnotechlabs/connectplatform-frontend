import CustomerSection from "./components/CustomerSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TechnologySection from "./components/TechnologySection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="font-rubik">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <CustomerSection />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
