import "./contacts.css";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ti3amu8",
      "template_wwng7tl",
      form.current,
      "RrupqgQIw65VbdP1Y"
    );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get In Tocuh</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailRead />
            <h4>Email</h4>
            <h5>seicheicristian@yahoo.com</h5>
            <a
              href="mailto:seicheicristian@yahoo.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            {/* <h5>Cristian Seichei</h5> */}
            <a
              href="https://m.me/cristian.seichei.5"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            {/* <h5>seicheicristian@yahoo.com</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone=400740548991"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contacts;
