import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/EachDoctorDetails";
import redCloseBtn from "../assets/image/redCloseBtn.svg";
const data = [
  { patientId: "1212", attendedPatient: "john", callDuration: "15 mins" },
  { patientId: "1232", attendedPatient: "john", callDuration: "14 mins" },
];
const EachDoctorDetails = ({ setState }) => {
  return (
    <Wrappers>
      <div className="container">
        <div className="doctor-details">
          <div className="doctor-id">
            <h6>Doctor Id</h6>
            <p>34523454</p>
          </div>
          <div className="doctor-name">
            <h6>Doctor Name</h6>
            <p>john</p>
          </div>
          <div className="close-btn" onClick={() => setState(false)}>
            <Image src={redCloseBtn} />
          </div>
        </div>
        <table className="doctor-heading">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Attended patient</th>
              <th>Call Duration</th>
              <th>Description</th>
            </tr>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.patientId}</td>
                  <td>{item.attendedPatient}</td>
                  <td> {item.callDuration} </td>
                  <td>
                    <button className="btn">download</button>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </Wrappers>
  );
};

export default EachDoctorDetails;
