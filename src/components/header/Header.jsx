import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me4.jpeg";
import ME1 from "../../assets/white-me4.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Cristian Seichei</h1>
        <h5 className="text-light">Future Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
