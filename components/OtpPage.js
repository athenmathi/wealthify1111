import Image from "next/image";
import React, { useState } from "react";
import Wrappers from "../assets/wrappers/OtpPage";
import loginBtn from "../assets/image/loginBtn.png";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppcontext } from "../context/appContext";
const OtpPage = ({ setModal, setNextPage, mobileNumber, loginInformation }) => {
  const router = useRouter();
  const { otpValue, numberExist, patientId } = useAppcontext();
  console.log(loginInformation);
  const [otp, setOtp] = useState("");
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    var decodedString = window.btoa(otp);

    if (otpValue === decodedString) {
      localStorage.setItem("p_id", patientId);
      // localStorage.setItem("number_exist", loginInformation.number_exist);
      // localStorage.setItem("phoneNumber2", mobileNumber);
      if (numberExist === 0) {
        router.push("/assessment");
      }
      setModal(false);
      console.log("sucess");
      router.reload(window.location.pathnames);
    } else {
      alert("Otp is wrong please try again");
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
                className="text"
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
