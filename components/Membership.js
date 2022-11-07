import axios from "axios";
import React, { useEffect } from "react";
import Wrappers from "../assets/wrappers/Membership";
import { useAppcontext } from "../context/appContext";
import MembershipCard from "./MembershipCard";
const Membership = () => {
  const { subscriptionPlan, subscriptionPlanCount } = useAppcontext();
  // const { plan_type, s_no } = subscriptionPlan;
  return (
    <Wrappers>
      <div className="container">
        <p className="title tac">Current Subscription</p>
        {subscriptionPlanCount ? (
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
        ) : null}
        <p className="title tal">Membership Upgrade</p>
        <div className="plans basic">
          <p className="sub-title">BASIC PLAN</p>
          <div className="plans-container">
            <MembershipCard
              price={"5,003.2"}
              planType={"basic_plan"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
            />
            <MembershipCard
              price={"7,504.8"}
              planType={"basic_plan"}
              month={"3 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
            />
          </div>
        </div>
        <div className="plans basic">
          <p className="sub-title">PREMIUM PLAN</p>
          <div className="plans-container">
            <MembershipCard
              price={"11,800"}
              planType={"premium"}
              month={"1 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              modification={"Personal Modification"}
              dietitian={"1 - Dietitian"}
              personalFitness={"1 - Personal Fitness Trainer"}
            />
            <MembershipCard
              price={"23,600"}
              planType={"premium"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              modification={"Personal Modification"}
              dietitian={"1 - Dietitian"}
              personalFitness={"1 - Personal Fitness Trainer"}
            />
            <MembershipCard
              price={"35,400"}
              planType={"premium"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
              modification={"Personal Modification"}
              dietitian={"1 - Dietitian"}
              personalFitness={"1 - Personal Fitness Trainer"}
            />
          </div>
        </div>
        <div className="plans basic">
          <p className="sub-title">GOLDEN PLAN</p>
          <div className="plans-container">
            <MembershipCard
              price={"5003.2"}
              planType={"golden_plan"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
            />
            <MembershipCard
              price={"5003.2"}
              planType={"golden_plan"}
              month={"2 Months"}
              calls={"3 CALLS"}
              dietChart={"3 DIET CHART/ MONTH"}
            />
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Membership;
