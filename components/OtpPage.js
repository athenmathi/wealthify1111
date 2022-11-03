import Image from "next/image";
import React, { useState } from "react";
import Wrappers from "../assets/wrappers/OtpPage";
import loginBtn from "../assets/image/loginBtn.png";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
const OtpPage = ({ setModal, setNextPage, mobileNumber }) => {
  const [otp, setOtp] = useState("");
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  console.log(otp);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Define the string
    var string = "28099";

    // Encode the String
    var encodedString = window.btoa(otp);
    console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

    // Decode the String
    var decodedString = window.atob(encodedString);
    console.log(decodedString);
  };
  return (
    <Wrappers>
      <div className="overlay">
        <div className="container">
          <div className="top-section">
            <div className="left-arrrow">
              <AiOutlineArrowLeft onClick={() => setNextPage(false)} />
            </div>
            <div className="close-btn">
              <AiOutlineClose onClick={() => setModal(false)} />
            </div>
            <h2>great</h2>
            <p>{`Now type in the OTP sent to  ${mobileNumber} for authentication`}</p>
            <div className="otp-container">
              <input
                className="number"
                type="text"
                name="otp"
                id=""
                onChange={(e) => handleChange(e)}
              />
              <button className="btn">
                <Image src={loginBtn} onClick={(e) => handleSubmit(e)} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default OtpPage;
