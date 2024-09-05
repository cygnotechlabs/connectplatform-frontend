import Button from "../ui/Button";

const FeaturesSection = () => {
  const handleLearnMore = () => {
    alert("Learn More");
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row ">
        <div className="w-2/5">
          <img
            src="/public/Bitmap.png"
            alt="Corporate Network Discussion"
            className="rounded w-11/12 shadow-lg"
          />
        </div>
        <div className="w-3/5 px-20 py-16">
          <h2 className="text-xs font-semibold mb-4 text-red-500">
            C&nbsp;O&nbsp;P&nbsp;O&nbsp;R&nbsp;A&nbsp;T&nbsp;E
          </h2>
          <h2 className="text-4xl font-semibold mb-4 w-full">
            Empowering Connections Across Your Corporate Network
          </h2>
          <div className="flex justify-between mb-10">
            <p className="mb-4 w-1/2 text-lg text-gray-600">
              We share common trends and strategies for improving your rental
              income.
            </p>
            <Button
              label="Learn More"
              className="px-14 "
              onClick={handleLearnMore}
            />
          </div>
          <div className="flex mb-6">
            <div className="flex justify-between w-1/2">
              <img src="/public/Feature 1.png" className="h-1/2" alt="" />
              <div className="px-6">
                <p className="text-xl font-semibold mb-6">Employees</p>
                <p className="text-lg pr-6 text-gray-600">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </div>
            <div className="flex justify-between w-1/2">
              <img src="/public/Feature 2.png" className="h-1/2" alt="" />
              <div className="pl-6">
                <p className="text-xl font-semibold mb-6">Interns</p>
                <p className="text-lg text-gray-600">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-3/4">
            <img src="/public/Feature 3.png" className="h-1/2" alt="" />
            <div className="px-6">
              <p className="text-xl font-semibold mb-6 mr-28">
                Software development environment
              </p>
              <p className="text-lg text-gray-600 mr-14">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
