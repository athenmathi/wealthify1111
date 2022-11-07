import React, { useEffect } from "react";
import Wrappers from "../assets/wrappers/Membership";
import { useAppcontext } from "../context/appContext";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
import HealthRecords from "../components/HealthRecords";
import LoggedInHome from "../components/LoggedInHome";
const HealthRecord = () => {
  const { getSubscription, subscriptionPlanCount } = useAppcontext();

  useEffect(() => {
    getSubscription("subscription", { api_key: "get", p_id: patientId });
  }, []);

  return (
    <>
      {subscriptionPlanCount ? (
        <HealthRecords />
      ) : (
        <Wrappers>
          <h1>buy subscription</h1>
        </Wrappers>
      )}
    </>
  );
};
HealthRecord.Layout = LoggedInHome;
export default HealthRecord;
