import Image from "next/image";
import React, { useEffect } from "react";
import Wrappers from "../assets/wrappers/MembershipCard";
import Tag from "../assets/image/Tag.svg";
import axios from "axios";
import { getRequest, postRequest } from "../utils/request/postRequest";
const MembershipCard = ({ price, planType, month, calls, dietChart }) => {
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.post(
  //         `http://doctor.brandimagetech.com/subscription.php`,
  //         { api_key: "get", p_id: 6 },
  //         {
  //           "Content-Type": "application/json;charset=UTF-8",
  //           "Access-Control-Allow-Origin": "*",
  //         }
  //       );
  //       console.log("a");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

  const buyPlans = async () => {
    postRequest("subscription", {
      api_key: "add",
      data: { p_id: 6, plan_type: planType, plan_id: 1 },
    });
  };
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
          <button
            className="upgrade-btn  btn"
            onClick={() => {
              buyPlans();
            }}
          >
            Upgrade
          </button>
        </div>
      </div>
    </Wrappers>
  );
};

export default MembershipCard;
