import Image from "next/image";
import React, { useState } from "react";
import Wrappers from "../assets/wrappers/OtpPage";
import loginBtn from "../assets/image/loginBtn.png";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
const OtpPage = ({ setModal, setNextPage, mobileNumber, otpValue }) => {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Define the string

    // Encode the String
    // var encodedString = window.btoa(otp);
    // console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

    // Decode the String
    var decodedString = window.atob(otp);

    if (otp === decodedString) {
      router.push("/assessment");
      // console.log("sucess");
    }
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
