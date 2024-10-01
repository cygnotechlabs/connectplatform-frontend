import personImage from "../assets/images/Group 49.png";
import employeesImage from "../assets/images/Frame 26.png";
import tick from "../assets/images/Frame.png"
import Button from "../ui/Button";
import WhyPartner from "../feauters/partners/WhyPartner";
import PartnersForm from "../feauters/partners/PartnersForm";

type Props = {}

function Partners({ }: Props) {
  const handleGetStarted = () => {
    console.log("as");

  }
  return (
    <>
    <div className=" flex flex-col md:flex-row items-center justify-between ">
      {/* Left Side Content */}
      <div className="w-full md:w-[40%] px-11 ">
        <p className="font-bold text-5xl text-[#161C2D] leading-snug">
          Co-creating with our  partners for their customers
        </p>
        <p className="text-lg mt-4 text-[#6c757d]">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next consultancy website within a few minutes.
        </p>
        <ul className="mt-6 space-y-3 text-[#4E5567] font-medium">
          <li className="flex items-center gap-3">
            <img src={tick} className="w-[6%]" alt="" />
            Co-creating with our partners for their customers
          </li>
          <li className="flex items-center gap-3">
            <img src={tick} className="w-[6%]" alt="" />

            Operations in 54 countries and territories
          </li>
          <li className="flex items-center gap-3">
            <img src={tick} className="w-[6%]" alt="" />

            1.78 million claims handled annually
          </li>
        </ul>
        <Button
          onClick={handleGetStarted}
          label="Partner With Us"
          className="px-20 py-3 mt-7 text-base" >
        </Button>
      </div>

      {/* Right Side Image as Background */}
      <div
      >
        <img src={personImage} className="w-[100% ] h-[90vh]" alt="" />
        <img src={employeesImage} className="w-[14%] absolute top-48 right-11" alt="" />
      </div>
    </div>
    <WhyPartner/>
    <PartnersForm/>
    </>
  );
}

export default Partners;
