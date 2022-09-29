import React from "react";
import LoggedInHome from "../components/LoggedInHome";
import MyPayments from "../components/MyPayments";
const Payments = () => {
  return <MyPayments />;
};
Payments.Layout = LoggedInHome;

export default Payments;
