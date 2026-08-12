import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Works from "./sections/Works.jsx";
import Contact from "./sections/Contact.jsx";
import Services from "./sections/Services.jsx";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
