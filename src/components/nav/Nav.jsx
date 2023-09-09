import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <SiAboutdotme />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BsBook />
        </a>
        {/* IF YOU WANT A SERVICES */}
        {/* <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a> */}
        <a
          href="#portofolio"
          onClick={() => setActiveNav("#portofolio")}
          className={activeNav === "#portofolio" ? "active" : ""}
        >
          <BsPersonWorkspace />
        </a>
        <a
          href="#contacts"
          onClick={() => setActiveNav("#contacts")}
          className={activeNav === "#contacts" ? "active" : ""}
        >
          <IoMdContact />
        </a>
      </nav>
    </div>
  );
};
export default Nav;
