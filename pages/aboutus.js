import React from "react";
import Card from "../components/Card";
import Faqs from "../components/Faqs";
import Home from "../components/Home";
import Mission from "../components/Mission";
import Plans from "../components/Plans";
import Strategy from "../components/Strategy";
import Vision from "../components/Vision";
import Working from "../components/Working";

const aboutus = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Home />
      <Vision />
      <Strategy />
      <Mission />
      <Working />
      <Faqs />
      <Plans />
    </div>
  );
};

export default aboutus;
