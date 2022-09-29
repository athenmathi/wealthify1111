import React from "react";
import styled from "styled-components";

const Wrappers = styled.div`
  background-image: url("./nutritionBg.svg");
  width: 100%;
  height: 70vh;
  /* position: absolute;
  top: 200px; */
  h1 {
    text-align: center;
  }
`;

const PlansMain = ({ name }) => {
  return (
    <Wrappers>
      <div className="container">
        <h1>{name}</h1>
      </div>
    </Wrappers>
  );
};

export default PlansMain;
