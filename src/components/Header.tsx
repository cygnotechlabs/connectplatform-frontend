import Button from "../ui/Button";

const Header = () => {
  const handleGetStarted = () => {
    alert("Get Started");
  };
  return (
    <header className="mx-6 my-4">
      <nav className="container flex justify-between items-center">
        <div className="text-2xl font-bold">Cygnox Connect</div>
        <ul className="flex gap-8">
          <li>
            <a href="#home" className="font-medium text-base hover:text-blue-500">
              Corporate
            </a>
          </li>
          <li>
            <a href="#about" className="font-medium text-base hover:text-blue-500">
              Partners
            </a>
          </li>
          <li>
            <a href="#services" className="font-medium text-base hover:text-blue-500">
              Customes
            </a>
          </li>
          <li>
            <a href="#contact" className="font-medium text-base hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
        <Button
          onClick={handleGetStarted}
          label="Get Started"
          className="px-20 py-3"
        />
      </nav>
    </header>
  );
};

export default Header;
