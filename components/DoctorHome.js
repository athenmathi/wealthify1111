import React, { useState } from "react";
import styled from "styled-components";
import Wrappers from "../assets/wrappers/DoctorHome";
import EachDoctorDetails from "./EachDoctorDetails";
const data = [
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
];

const DoctorHome = () => {
  const [state, setState] = useState(false);
  // if (state) {
  //   return <EachDoctorDetails />;
  // }
  return (
    <Wrappers>
      {state ? <EachDoctorDetails setState={setState} /> : null}
      <table className="doctor-heading">
        <thead>
          <tr>
            <th>Doctor Id</th>
            <th>Doctor Name</th>
            <th>Working Hours</th>
            <th>Export</th>
          </tr>
          {data.map((item) => {
            return (
              <tr onClick={() => setState(!state)}>
                <td>{item.id}</td>
                <td> {item.name} </td>
                <td>{item.workingHours}</td>
                <td>
                  <button className="btn">download</button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </Wrappers>
  );
};

export default DoctorHome;
