import Button from "../../ui/Button";

const CustomerSection = () => {
  function handleLearnMore(): void {
    alert("learn more");
  }

  return (
    <div className=" mx-auto   bg-Customerbg">
      <div className="flex flex-col pt-20 px-72 items-center ">
        <h2 className="text-xs font-semibold text-center text-red-500">
          C&nbsp;U&nbsp;S&nbsp;T&nbsp;O&nbsp;M&nbsp;E&nbsp;S
        </h2>
        <h2 className="text-center text-4xl mx-36 my-7 font-semibold mb-5 text-white">
          Connecting Quality Products with Loyal Customers
        </h2>
        <p className="text-lg font-light text-gray-500 ">
          We share common trends and strategies for improving your rental
          income.
        </p>
        <Button
          label="Learn More"
          onClick={handleLearnMore}
          className="px-12 py-3 my-7"
        />
      </div>
      <div className="flex justify-around full bg-[url('/public/wave.png')]">
        <div className="">
          <div className="flex justify-between pl-40 mb-28">
            <img src="/public/Customer 1.png" className="h-1/2" alt="" />
            <div className="px-6">
              <p className="text-xl font-semibold mb-6 text-white">
                Individual Customers
              </p>
              <p className="text-lg pr-6 text-gray-400">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </div>
          </div>
          <div className="flex justify-between pl-40">
            <img src="/public/Customer 2.png" className="h-1/2" alt="" />
            <div className="px-6">
              <p className="text-xl font-semibold mb-6 text-white">
                Customer Support
              </p>
              <p className="text-lg pr-6 text-gray-400">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </div>
          </div>
        </div>
        <img src="/public/CustomerImg.png" alt="" />
        <div>
          <div className="flex justify-between pr-32">
            <img src="/public/Customer 3.png" className="h-1/2" alt="" />
            <div className="px-6">
              <p className="text-xl font-semibold mb-6 text-white">
                Corporate Customers
              </p>
              <p className="text-lg  text-gray-400">
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

export default CustomerSection;
