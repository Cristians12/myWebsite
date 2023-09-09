import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non orci risus.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non orci risus.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non orci risus.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non orci risus.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="container testimonials__container"
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5>{name}</h5>
              <small className="cleints__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
