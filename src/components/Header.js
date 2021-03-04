import logo from "../images/logopequeño.png";

const Header = () => {
  return (
    <div className="header-container">
      <img
        className="header-logo"
        src={logo}
        alt="Logo Rick y Morty"
        title="Logo Rick y Morty"
      />
    </div>
  );
};
export default Header;
