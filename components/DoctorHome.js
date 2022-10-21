import React, { useState } from "react";
import styled from "styled-components";
import Wrappers from "../assets/wrappers/DoctorHome";
import EachDoctorDetails from "./EachDoctorDetails";
import OpenCalender from "./OpenCalender";
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
  const [openCalender, setOpenCalender] = useState(false);
  // if (state) {
  //   return <EachDoctorDetails />;
  // }
  return (
    <Wrappers>
      {state ? <EachDoctorDetails setState={setState} /> : null}
      {openCalender ? <OpenCalender setOpenCalender={setOpenCalender} /> : null}

      <div className="table-container">
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
                <tr>
                  <td onClick={() => setState(!state)}>{item.id}</td>
                  <td onClick={() => setState(!state)}> {item.name} </td>
                  <td onClick={() => setState(!state)}>{item.workingHours}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => setOpenCalender(true)}
                    >
                      download
                    </button>
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

export default DoctorHome;
