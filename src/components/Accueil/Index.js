import React from "react";
import Navbar from "../Navbar/Index";
import Body from "../Body/Index";
import About from "../About/Index";
import Service from "../Service/Index";
import Portfolio from "../Portfolio/Index";
import Freelance from "../Freelance/Index";
import Contact from "../Contact/Index";
import Footer from "../Footer/Index";

const Accueil = () => {
  return (
    <>
      <div className="bg-light">
        <Navbar />
        <Body />
        <About />
        <Service />
        <Portfolio />
        <Freelance />
        <Contact />
        <Footer />
      </div>


    </>
  );
};

export default Accueil;
