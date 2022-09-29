import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/Login";

const Login = () => {
  return (
    <Wrappers>
      <div className="container">
        <h1 className="name">Hi</h1>
        <div className="h3">Please enter your mobile number to login</div>
        <div className="number">
          <input type="number" />
          <Image />
        </div>
        <p className="subtitle">
          OTP will be sent to this number by SMS And Whatsapp
        </p>
        <input type="checkbox" name="" id="" />
        <p>By signing up, I agree to the</p>

        <h6>Privacy Policy, Terms and conditions of Dr. Wealthify</h6>
      </div>
    </Wrappers>
  );
};

export default Login;
