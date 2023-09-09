import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/mapty1.png";
import IMG2 from "../../assets/beginner.png";
import IMG3 from "../../assets/calculator1.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "A Map that locates you using Leaflet API, JavaScript, CSS, and HTML it let's you log your running/cycling training ",
    github:
      "https://github.com/Cristians12/Mapty.app/tree/master/15-Mapty/Mapty_project",
  },
  {
    id: 2,
    image: IMG2,
    title: "A simple Minesweeper Game created using Python ",
    github: "https://github.com/Cristians12/Minesweeper",
  },
  {
    id: 3,
    image: IMG3,
    title: "A simple calculator created using HTML, CSS, JavaScript ",
    github: "https://github.com/Cristians12/Calculator",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              {/* <a
              href="https://github.com/Cristians12"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a> */}

              <div className="portofolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portofolio;
