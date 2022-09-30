import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/HealthRecords.js";
import weight from "../assets/image/weight.svg";
import height from "../assets/image/height.svg";
import blood from "../assets/image/blood.svg";
import paymentHistory from "../assets/image/paymentHistory.svg";
const HealthRecords = () => {
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
            <p className="name">Doctor Consultation</p>
            <p className="name">Test Reports</p>
            <p className="name">Health Condition</p>
            <p className="name">Vaccination</p>
          </div>
          <div className="underline"></div>
          <div className="payment-history">
            <Image src={paymentHistory} />
            <p>No payment History</p>
          </div>
        </div>
      </div>
      <button className="btn-green">ADD PRESCRIPTION</button>
    </Wrappers>
  );
};

export default HealthRecords;
