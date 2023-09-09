import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpeg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years of learning</small>
            </article>

            {/* Knowledge */}
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>HTML</h5>
              <small>1+ Year of learning</small>
            </article> */}

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects Made</small>
            </article>
          </div>
          <p>
            I'm an ambitious and enthusiastic person that has embarked in the
            journey of self-development and continuous improvement, ready to
            give my best to learn new skills and to improve my current ones.
            Currently i'm working as a Radiology Technician and i'm aspiring to
            become a Web Developer but i'm also open to new challenges.
          </p>
          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
