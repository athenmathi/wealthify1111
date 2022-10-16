import React from "react";
import PlansMain from "../components/PlansMain";
import Mission from "../components/Mission";
import Strategy from "../components/Strategy";
import Vision from "../components/Vision";
import Working from "../components/Working";
import Team from "../components/Team";
import SingleNutrition from "../components/SingleNutrition";
import ReversalQuestion from "../components/ReversalQuestion";
import DoctorHome from "../components/DoctorHome";
import MembershipCard from "../components/MembershipCard";
import EachDoctorDetails from "../components/EachDoctorDetails";
import EachPatientDetails from "../components/EachPatientDetails";

const aboutus = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <PlansMain name={"About us"} />
      <Vision />
      <Strategy />
      <Mission />
      <Working />
      <Team />
      {/* <ReversalQuestion /> */}
      <DoctorHome />
      {/* <MembershipCard /> */}
      {/* <EachDoctorDetails /> */}
      <EachPatientDetails />
    </div>
  );
};

export default aboutus;
