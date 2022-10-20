import React from "react";
import Wrappers from "../assets/wrappers/ManageProfile";

const ManageProfile = () => {
  return (
    <Wrappers>
      <div className="container">
        <h2 className="name">John Doe</h2>
        <div className="subtitle">
          <p>Male : 30 | +91 788358685</p>
          <p>DOB: 26 jan 1996</p>
        </div>
      </div>
    </Wrappers>
  );
};
ManageProfile.Layout = ManageProfile;
export default ManageProfile;
