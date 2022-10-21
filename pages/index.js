import Head from "next/head";
import Image from "next/image";
import LoggedInHome from "../components/LoggedInHome";
import Login from "../components/Login";
import ManageProfile from "../components/ManageProfile";
export default function Home() {
  return (
    <div>
      <ManageProfile />
    </div>
  );
}

Home.Layout = LoggedInHome;
