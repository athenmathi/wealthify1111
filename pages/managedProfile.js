import LoggedInHome from "../components/LoggedInHome";
import React, { useEffect } from "react";
import Wrappers from "../assets/wrappers/Membership";
import ManageProfile from "../components/ManageProfile";
import { useAppcontext } from "../context/appContext";
import { useState } from "react";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const ManagedProfile = () => {
  const { getSubscription, getData, subscriptionPlanCount, commonData } =
    useAppcontext();
  useEffect(() => {
    getSubscription("subscription", { api_key: "get", p_id: patientId });
    getData("patient", {
      api_key: "get_personal_info",
      data: { p_id: patientId },
    });
  }, []);
  return (
    <>
      {subscriptionPlanCount ? (
        <ManageProfile />
      ) : (
        <Wrappers>
          <h1>buy subscription</h1>
        </Wrappers>
      )}
    </>
  );
};

ManagedProfile.Layout = LoggedInHome;
export default ManagedProfile;
