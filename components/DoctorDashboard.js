import Link from "next/link";
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Wrappers from "../assets/wrappers/DoctorDashboard";
const DoctorDashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Wrappers>
      <div className="bottom">
        <div className="left">
          <div className="card">
            <p>Dr. James</p>
            <p>213234</p>
            <p>Chennai</p>
          </div>
          <div className="calendar">
            <div className="patient-list">
              <Link href={"/eachPatient"}>
                <button className="btn">Patient List</button>
              </Link>
            </div>
            <div className="calendar-2">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li className="called">
              <div>Call with john</div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="not-called">
              <div>Call with john</div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="not-called">
              <div>Call with john</div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="not-called">
              <div>Call with john</div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </div>
      </div>
    </Wrappers>
  );
};

export default DoctorDashboard;
