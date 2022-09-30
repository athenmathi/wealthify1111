import React from "react";
import PlansMain from "../components/PlansMain";
import Mission from "../components/Mission";
import Plans from "../components/Plans";
import Strategy from "../components/Strategy";
import Vision from "../components/Vision";
import Working from "../components/Working";
import Team from "../components/Team";

const aboutus = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <PlansMain name={"About us"} />
      <Vision />
      <Strategy />
      <Mission />
      <Working />
      <Team />
    </div>
  );
};

export default aboutus;
