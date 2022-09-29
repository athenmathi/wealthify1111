import React from "react";
import styled from "styled-components";
// images
import thyroid from "../assets/image/thyroid.svg";
import obesity from "../assets/image/obesity.svg";
import pocs from "../assets/image/pocs.svg";

import Card from "./Card";
const Wrappers = styled.div`
  margin-top: 3rem;
  .cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .line-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }
`;
const Plans = () => {
  return (
    <Wrappers>
      <div className="line-container">
        <h1 className="heading">Active and fit plans</h1>
        <div className="green-line"></div>
      </div>
      <div className="cards">
        <Card
          img={thyroid}
          name={"Thyroid"}
          subtitle={"Can you control thyroid andweight issue with food?"}
        />
        <Card
          img={obesity}
          name={"Obesity"}
          subtitle={"Can you lose weight andsubstain it by eating more?"}
        />
        <Card
          img={pocs}
          name={"Pocs"}
          subtitle={"Can my diet managePcos Issues?"}
        />
      </div>
    </Wrappers>
  );
};

export default Plans;
