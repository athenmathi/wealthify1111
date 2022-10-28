import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";
import Wrappers from "../assets/wrappers/Login";
import closeBtn from "../assets/image/closeBtn.svg";
import loginBtn from "../assets/image/loginBtn.png";
import Link from "next/link";
const Login = ({ setModal }) => {
  return ReactDOM.createPortal(
    <Wrappers>
      <div className="overlay">
        <div className="container">
          <h1 className="name">Hi</h1>
          <div className="close-btn" onClick={() => setModal(false)}>
            <Image src={closeBtn} />
          </div>
          <h3>Please enter your mobile number to login</h3>
          <div className="enter-btn">
            <input className="number" type="text" placeholder="+91" />
            {/* <Image /> */}
            <Link href={"/assessment"}>
              <div className="login-btn" onClick={() => setModal(false)}>
                <Image src={loginBtn} />
              </div>
            </Link>
          </div>
          <div className="referal">
            <label htmlFor="">Referal Id</label>
            <input type="text" className="number" />
          </div>
          <p className="subtitle">
            OTP will be sent to this number by SMS And Whatsapp
          </p>
          {/* <div className="align-horizontal"> */}

          <div className="signup">
            <input type="checkbox" name="" id="" />
            <p>By signing up, I agree to the</p>
          </div>
          {/* </div> */}

          <h4>Privacy Policy, Terms and conditions of Dr. Wealthify</h4>
        </div>
      </div>
    </Wrappers>,
    document.getElementById("modal-root")
  );
};

export default Login;
