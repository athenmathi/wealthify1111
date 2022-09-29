import React from "react";
import LoggedInHome from "../components/LoggedInHome";
import ManageProfile from "../components/ManageProfile";
const ManagedProfile = () => {
  return <ManageProfile />;
};

ManagedProfile.Layout = LoggedInHome;
export default ManagedProfile;
