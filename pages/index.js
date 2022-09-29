import Head from "next/head";
import Image from "next/image";
import LoggedInHome from "../components/LoggedInHome";
import Login from "../components/Login";
import ManageProfile from "../components/ManageProfile";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import NeedHelp from "../components/NeedHelp";
import Reversal from "../components/Reversal";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Sidebar from "../components/Sidebar";
import Strategy from "../components/Strategy";
import Vision from "../components/Vision";
import Working from "../components/Working";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* <Section2 />
      <Section3 />
      <Reversal /> */}
      {/* about us */}
      {/* <Vision />
      <Strategy />
      <Mission />
      <Working /> */}

      <ManageProfile />
      {/* <Sidebar />
      <NeedHelp /> */}

      {/* <LoggedInHome /> */}
    </div>
  );
}

Home.Layout = LoggedInHome;
