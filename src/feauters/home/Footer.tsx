import Button from "../../ui/Button";

const Footer = () => {
  function handleEmail(): void {
    alert("Function not implemented.");
  }

  return (
    <footer className="">
      <div className="flex justify-between px-20 py-20 text-3xl font-bold">
        <p className="mr-16  text-[#161C2D]">
          Subscribe to our newsletter to get latest news on your inbox.
        </p>
        <div className="flex py-5 gap-3">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="text-sm font-normal border border-gray-200  px-3  rounded-xl"
          />
          <Button
            label="Subscribe"
            onClick={handleEmail}
            className="px-10 py-3 text-base"
          />
        </div>
      </div>
      <div className="flex justify-between px-20 py-4 font-bold">
        <p className="text-2xl">Cygnoz Connect</p>
        <div className="flex gap-4 text-sm">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
