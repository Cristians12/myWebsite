import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
/* If you want to use dribble icon aswell*/
// import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/cristian-seichei-128186240/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Cristians12" target="_blank">
        <BsGithub />
      </a>
      {/* <a href="https://dribbble" target="_blank">
        <FiDribbble />
      </a> */}
    </div>
  );
};
export default HeaderSocials;
