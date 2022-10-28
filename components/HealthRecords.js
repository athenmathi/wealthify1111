import Image from "next/image";
import React, { useState } from "react";
import Wrappers from "../assets/wrappers/HealthRecords.js";
import weight from "../assets/image/weight.svg";
import height from "../assets/image/height.svg";
import blood from "../assets/image/blood.svg";
import DoctorConsultation from "./DoctorConsultation.js";
import TestReports from "./TestReports.js";
import HealthCondition from "../assets/wrappers/HealthCondition.js";
import PatientNotes from "./PatientNotes.js";
import DietPlan from "./DietPlan.js";
import FollowUp from "./FollowUp.js";
import History from "./History.js";
const HealthRecords = () => {
  const [tab, setTab] = useState("doctorConsultation");
  return (
    <Wrappers>
      <div className="container">
        <div className="top">
          <h2 className="name">John Doe</h2>
          <p className="dob">26 JAN 1996 | Male</p>
        </div>
        <div className="line"></div>
        <div className="physical-details">
          <div className="height">
            <Image src={height} />
            <p className="">Height</p>
            <p className="value">190cm </p>
          </div>
          <div className="weight">
            <Image className="img" src={weight} />
            <p className="">Weight</p>
            <p className="value">72kgs</p>
          </div>
          <div className="blood">
            <Image src={blood} />
            <p className="">Blood</p>
            <p className="value">B+</p>
          </div>
        </div>
        <div className="bottom">
          <div className="contents">
            <p
              className="name active"
              onClick={() => setTab("doctorConsultation")}
            >
              Doctor Consultation
            </p>
            <p className="name" onClick={() => setTab("testReports")}>
              Test Reports
            </p>
            <p className="name" onClick={() => setTab("healthCondition")}>
              Health Condition
            </p>
            <p className="name" onClick={() => setTab("patientNotes")}>
              Patient Notes
            </p>
            <p className="name" onClick={() => setTab("dietPlan")}>
              Diet plan
            </p>
            <p className="name" onClick={() => setTab("history")}>
              History
            </p>
            <p className="name" onClick={() => setTab("followUp")}>
              Follow up
            </p>
          </div>
          <div className="underline"></div>
          <div className="payment-history">
            {tab === "doctorConsultation" ? <DoctorConsultation /> : null}
            {tab === "testReports" ? <TestReports /> : null}
            {tab === "healthCondition" ? <HealthCondition /> : null}
            {tab === "patientNotes" ? <PatientNotes /> : null}
            {tab === "dietPlan" ? <DietPlan /> : null}
            {tab === "history" ? <History /> : null}
            {tab === "followUp" ? <FollowUp /> : null}

            {/* <Image src={paymentHistory} />
            <p>No payment History</p> */}
          </div>
        </div>
      </div>
      {/* <PrescriptionForm /> */}
    </Wrappers>
  );
};

export default HealthRecords;
