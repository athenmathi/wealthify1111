import React from "react";
import LoggedInHome from "../components/LoggedInHome";
import AddressBook from "../components/AddressBook";
const AddressBookPage = () => {
  return (
    <>
      <AddressBook />
    </>
  );
};
AddressBookPage.Layout = LoggedInHome;
export default AddressBookPage;
