import React from "react";
import Wrappers from "../assets/wrappers/Membership";
import MembershipCard from "./MembershipCard";
const Membership = () => {
  return (
    <Wrappers>
      <div className="container">
        <p className="title tac">Current Subscription</p>
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
        <p className="title tal">Membership Upgrade</p>
        <div className="plans basic">
          <p className="sub-title">BASIC PLAN</p>
          <div className="plans-container">
            <MembershipCard />
            <MembershipCard />
          </div>
        </div>
        <div className="plans basic">
          <p className="sub-title">BASIC PLAN</p>
          <div className="plans-container">
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
          </div>
        </div>
        <div className="plans basic">
          <p className="sub-title">BASIC PLAN</p>
          <div className="plans-container">
            <MembershipCard />
            <MembershipCard />
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Membership;
