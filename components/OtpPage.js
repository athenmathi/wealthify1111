import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/OtpPage";
import loginBtn from "../assets/image/loginBtn.png";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
const OtpPage = ({ setModal, setNextPage, mobileNumber }) => {
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
              <input className="number" type="number" name="otp" id="" />
              <button className="btn">
                <Image src={loginBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default OtpPage;
