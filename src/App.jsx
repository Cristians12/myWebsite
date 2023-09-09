import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portofolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
