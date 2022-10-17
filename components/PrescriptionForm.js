import Image from "next/image";
import React, { useState } from "react";
import Wrappers from "../assets/wrappers/PrescriptionForm";
import redCloseBtn from "../assets/image/redCloseBtn.svg";
const PrescriptionForm = ({ setOpenForm }) => {
  return (
    <Wrappers>
      <div>
        <div className="form">
          <div className="header">
            <div className="close-btn" onClick={() => setOpenForm(false)}>
              <Image src={redCloseBtn} />
            </div>
            <h1>Prescription</h1>
            <p>Please provide your information below.</p>
          </div>
          <div className="center-btn">
            <div className="inputcontainer">
              {/* Below are the text fields that record the user's information. Each uses the onChange event handler, and sets the user input value to the component's state in real time using e.target.value    */}
              <form action="">
                <div className="first-row">
                  <div>
                    <label htmlFor="firstName">Record For</label>
                    <input
                      className="two-row"
                      type="text"
                      id="firstName"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName">Record Date</label>

                    <input
                      type="date"
                      className="two-row"
                      id="firstName"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="first-row">
                  <div>
                    <label htmlFor="firstName">Record Name</label>
                    <input
                      className="two-row"
                      type="text"
                      id="firstName"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName">Record Prescribed By</label>

                    <input
                      type="text"
                      className="two-row"
                      id="firstName"
                      placeholder="john"
                    />
                  </div>
                </div>
                {/* <div>
                <label htmlFor="email">Record Name</label>
                <input type="text" id="email" />
              </div> */}
              </form>
            </div>
            <button className="btn-green">Submit</button>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default PrescriptionForm;
