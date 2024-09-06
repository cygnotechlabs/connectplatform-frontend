import Button from "../ui/Button";

const Footer = () => {
  function handleEmail(): void {
    alert("Function not implemented.");
  }

  return (
    <footer className="">
      <div className="flex justify-between px-60 py-20 text-3xl font-semibold">
        <p className="mr-16">
          Subscribe to our newsletter to get latest news on your inbox.
        </p>
        <div className="flex py-5 gap-3">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="text-sm font-normal border-gray-400 px-3 rounded-xl"
          />
          <Button
            label="Subscribe"
            onClick={handleEmail}
            className="px-10 py-3 text-lg"
          />
        </div>
      </div>
      <div className="flex justify-between px-60 py-4 font-semibold">
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
