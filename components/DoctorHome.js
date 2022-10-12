import React from "react";
import styled from "styled-components";
import Wrappers from "../assets/wrappers/DoctorHome";
const data = [
  { id: 23034534, name: "john" },
  { id: 23034534, name: "john" },
  { id: 23034534, name: "john" },
  { id: 23034534, name: "john" },
  { id: 23034534, name: "john" },
  { id: 23034534, name: "john" },
  { id: 23034534, name: "john" },
  { id: 23034534, name: "john" },
];

const DoctorHome = () => {
  return (
    <Wrappers>
      <table className="doctor-heading">
        <thead>
          <tr>
            <th>Doctor Id</th>
            <th>Doctor Name</th>
            <th>Export</th>
          </tr>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td> {item.name} </td>
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
