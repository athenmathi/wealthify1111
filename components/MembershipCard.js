import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/MembershipCard";
import Tag from "../assets/image/Tag.svg";
const MembershipCard = ({ months }) => {
  return (
    <Wrappers>
      <div className="tag-container">
        <Image src={Tag} />
        <p className="price">
          2000.23 <br />
          INR
        </p>
      </div>
      <div className="container">
        <ul>
          <li>2 Months</li>
          <li>3 calls</li>
          <li>3 DIET CHART/ MONTH</li>
        </ul>
        <button className="upgrade-btn btn">Upgrade</button>
      </div>
    </Wrappers>
  );
};

export default MembershipCard;
