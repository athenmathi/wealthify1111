import React, { useEffect } from "react";
import DoctorDashboard from "../components/DoctorDashboard";
import EachPatientDetails from "../components/EachPatientDetails";
import { useAppcontext } from "../context/appContext";
let doctorId;
if (typeof window !== "undefined") {
  doctorId = localStorage.getItem("doctorId");
}

const doctorHome = () => {
  const { getArrOfObj, details } = useAppcontext();
  useEffect(() => {
    getArrOfObj("doctor", {
      api_key: "get_doctor_info",
      data: { doc_id: doctorId },
    });
  }, []);

  if (!details) {
    return;
  }
  return <DoctorDashboard />;
};

export default doctorHome;
