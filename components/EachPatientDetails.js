import React from "react";
import Wrappers from "../assets/wrappers/DoctorHome";
import redCloseBtn from "../assets/image/redCloseBtn.svg";

const data = [
  { patientName: "2435346", callDuration: "sanjay" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
];
import Image from "next/image";
import Link from "next/link";
const EachPatientDetails = () => {
  return (
    <Wrappers>
      <table className="doctor-heading">
        <thead>
          <tr>
            <th>Patient Id</th>
            <th>Patient Name</th>
            {/* <th>Export</th> */}
          </tr>
          {data.map((item) => {
            return (
              <Link href={"/healthRecords"}>
                <tr>
                  <td>{item.patientName}</td>
                  <td> {item.callDuration} </td>
                </tr>
              </Link>
            );
          })}
        </thead>
      </table>
    </Wrappers>
  );
};

export default EachPatientDetails;
