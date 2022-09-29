import React from "react";
import LoggedInHome from "../components/LoggedInHome";
import Membership from "../components/Membership";
const MembershipPage = () => {
  return (
    <>
      <Membership />
    </>
  );
};
MembershipPage.Layout = LoggedInHome;
export default MembershipPage;
