import "./footer.css";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Cristian Seichei
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/cristian.seichei.5/">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/cristianseichei4/">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com/CristianSeiche1">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Cristian Seichei. All rights reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;
