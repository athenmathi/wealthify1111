import React from "react";
import HealthRecords from "../components/HealthRecords";
import LoggedInHome from "../components/LoggedInHome";
const HealthRecord = () => {
  return <HealthRecords />;
};
HealthRecord.Layout = LoggedInHome;
export default HealthRecord;
