import React from "react";
import Wrappers from "../assets/wrappers/Home.js";
const Home = () => {
  return (
    <Wrappers>
      <div className="container">
        <h1>Diabetes Reversal</h1>
        <p>A personalized evidence-based path to</p>
        <b>Type-2 diabetes & Pre- diabetes Reversal</b>
        <div className="2nd-container verline">
          <p>
            Book The Diabetes Reversal <br />
            Session With Dr. Wealthify to know how{" "}
          </p>
        </div>
        <button className="btn">Get in touch</button>
      </div>
    </Wrappers>
  );
};

export default Home;
