import React from "react";
import Wrappers from "../assets/wrappers/Membership";
const Membership = () => {
  return (
    <Wrappers>
      <p className="title">Current Subscription</p>
      <div className="first-container">
        <h1 className="weeks">4 Weeks </h1>
        <ul className="list">
          <li>Validate For 28 Days</li>
          <li>Include Personal Trainer</li>
          <li>
            Access to all equipments
            <br />
            and weights
          </li>
          <li>No Security deposit</li>
        </ul>
      </div>
    </Wrappers>
  );
};

export default Membership;
