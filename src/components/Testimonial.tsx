const Testimonial = () => {
  return (
    <div>
      <div className="mx-64 my-20 flex gap-14">
        <div className="text-center">
          <p className="text-5xl font-semibold mb-8">1M+</p>
          <p className="text-lg text-gray-500">
            Customers visit Omega every month to get their service done.
          </p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-semibold mb-8">92%</p>
          <p className="text-lg text-gray-500">
            Satisfaction rate comes from our awesome customers.
          </p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-semibold mb-8">4.9/5.0</p>
          <p className="text-lg text-gray-500">
            Average customer ratings we have got all over internet.
          </p>
        </div>
      </div>
      <div className="bg-[url('/public/BG.png')]">
        <div className="py-32 mx-96 text-center">
          <h2 className="text-xs font-semibold mb-4 text-green-500">
            T&nbsp;E&nbsp;S&nbsp;T&nbsp;I&nbsp;N&nbsp;O&nbsp;N&nbsp;I&nbsp;A&nbsp;L
          </h2>
          <h1 className="text-3xl px-6 my-7 font-semibold mb-5 text-white">
            "Cygnoz delivers quality products and exceptional service. Highly
            recommended!"
          </h1>
          <h3 className="text-white font-semibold">Digital Marketer</h3>
          <p className="text-gray-500 font-medium">Ian Klein</p>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
