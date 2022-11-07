import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/ManageProfile";
import rightArrow from "../assets/image/rightArrow.svg";
import { useEffect } from "react";
import { useAppcontext } from "../context/appContext";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const ManageProfile = () => {
  const { getData } = useAppcontext();
  useEffect(() => {
    getData("patient", {
      api_key: "get_personal_info",
      p_id: patientId,
    });
  }, []);
  return (
    <Wrappers>
      <div className="right-icon">
        <Image src={rightArrow} width="40px" height="40px" />
      </div>
      <div className="container">
        <h2 className="name">John Doe</h2>
        <div className="subtitle">
          <p>Male : 30 | +91 788358682</p>
          <p>DOB: 26 jan 1996</p>
        </div>
      </div>
    </Wrappers>
  );
};
ManageProfile.Layout = ManageProfile;
export default ManageProfile;
