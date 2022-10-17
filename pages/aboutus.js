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
import DoctorDashboard from "../components/DoctorDashboard";
import AssessmentForm1 from "../components/AssessmentForm1";

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
      {/* <DoctorHome /> */}
      {/* <MembershipCard /> */}
      {/* <EachDoctorDetails /> */}
      {/* <EachPatientDetails /> */}
      <AssessmentForm1 />
    </div>
  );
};

export default aboutus;
