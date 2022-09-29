import React from "react";
import Faqs from "../components/Faqs";
import Home from "../components/Home";
import Reversal from "../components/Reversal";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const HomeLoggedOut = () => {
  return (
    <div>
      <Home />
      <Section2 />
      <Section3 />
      <Reversal />
      <Faqs />
    </div>
  );
};

export default HomeLoggedOut;
