// import dependencies
import React from "react";
// import components
import Landing from "../components/homeComponents/Landing";
import About from "../components/homeComponents/About";
import Technologies from "../components/homeComponents/Technologies";

const HomePage = () => {
  return (
    <section>
      <Landing />
      <Technologies />
      <About />
    </section>
  );
};

export default HomePage;
