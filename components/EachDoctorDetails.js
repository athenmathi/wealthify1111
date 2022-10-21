import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/EachDoctorDetails";
import redCloseBtn from "../assets/image/redCloseBtn.svg";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
const data = [
  {
    patientId: "1212",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins",
  },
  {
    patientId: "1232",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins ",
  },
  {
    patientId: "1232",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins ",
  },
  {
    patientId: "1232",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins ",
  },
  {
    patientId: "1232",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins ",
  },
  {
    patientId: "1232",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins ",
  },
  {
    patientId: "1232",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins ",
  },
  {
    patientId: "1232",
    attendedPatient: "john",
    callDuration: "12:45 PM - 1:00PM ,15 mins ",
  },
];
const EachDoctorDetails = ({ setState }) => {
  return (
    <Wrappers>
      <div className="container">
        <div className="doctor-details">
          <div className="doctor-id">
            <h4>Doctor Id</h4>
            <p>34523454</p>
          </div>

          <div className="doctor-name">
            <h4>Doctor Name</h4>
            <p>john</p>
          </div>
          <div className="calender-selector">
            <label htmlFor="">Select by Date</label>
            <input type="date" />
          </div>

          <div className="close-btn" onClick={() => setState(false)}>
            <Image src={redCloseBtn} />
          </div>
        </div>

        <div className="table-container">
          <table className="doctor-heading">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Attended patient</th>
                <th>Call Duration</th>
                <th>Prescription</th>
              </tr>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.patientId}</td>
                    <td>{item.attendedPatient}</td>
                    <td> {item.callDuration} </td>
                    <td>
                      <button className="btn">View</button>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </div>
    </Wrappers>
  );
};

export default EachDoctorDetails;
