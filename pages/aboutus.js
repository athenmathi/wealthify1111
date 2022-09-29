import React from "react";
import Faqs from "../components/Faqs";
import PlansMain from "../components/PlansMain";
import Mission from "../components/Mission";
import Plans from "../components/Plans";
import Strategy from "../components/Strategy";
import Vision from "../components/Vision";
import Working from "../components/Working";
import Login from "../components/Login";

const aboutus = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <PlansMain name={"About us"} />
      <Vision />
      <Strategy />
      <Mission />
      <Working />
      <Login />
    </div>
  );
};

export default aboutus;
