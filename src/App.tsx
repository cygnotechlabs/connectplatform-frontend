import CustomerSection from "./components/CustomerSection";
import FeaturesSection from "./components/FeaturesSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TechnologySection from "./components/TechnologySection";

function App() {
  return (
    <div className="font-rubik">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <CustomerSection />
    </div>
  );
}

export default App;
