import CustomerSection from "../feauters/home/CustomerSection"
import FeaturesSection from "../feauters/home/FeaturesSection"
import HeroSection from "../feauters/home/HeroSection"
import TechnologySection from "../feauters/home/TechnologySection"
import Testimonial from "../feauters/home/Testimonial"


type Props = {}

function Home({}: Props) {
  return (
    <div className="font-rubik">
    <HeroSection />
    <FeaturesSection />
    <TechnologySection />
    <CustomerSection />
    <Testimonial />
  </div>
  )
}

export default Home