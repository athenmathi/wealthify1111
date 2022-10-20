import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/MembershipCard";
import Tag from "../assets/image/Tag.svg";
const MembershipCard = ({ price, planType, month, calls, dietChart }) => {
  return (
    <Wrappers>
      <div className="tag-container">
        <Image src={Tag} />
        <p className="price">
          {price} <br />
          INR
        </p>
      </div>
      <div className="container">
        <ul>
          <li>{month}</li>
          <li>{calls}</li>
          <li>{dietChart}</li>
        </ul>
        <div className="upgrade-div">
          <button className="upgrade-btn btn">Upgrade</button>
        </div>
      </div>
    </Wrappers>
  );
};

export default MembershipCard;
