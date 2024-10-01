import Button from "../../ui/Button";

const HeroSection = () => {
  const handleLearnMore = () => {
    alert("learn more");
  };
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <img
            src="/heroSection.png"
            alt="Hero Section"
            className="h-auto max-w-4xl mx-auto rounded-lg"
          />
        </div>

        <div className="mx-72">
          {/* <h1 className="text-sm font-medium text-red-400">
            NON-STOP&nbsp;&nbsp;MUSIC&nbsp;&nbsp;FOR&nbsp;&nbsp;LONG&nbsp;&nbsp;TIME
          </h1> */}
          <h1 className="text-5xl px-6 my-7 font-semibold mb-5">
            Bridging Teams, Partners, and Innovation
          </h1>
          <p className="text-lg font-light text-gray-500 ">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <Button
            label="Learn More"
            onClick={handleLearnMore}
            className="px-28 py-3 my-7"
          />
          <p className="text-sm font-normal text-gray-700 ">WATCH IN ACTION</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
