import React from "react";
import styled from "styled-components";
const Wrappers = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 300px;
  }
`;
const History = () => {
  return (
    <Wrappers>
      <div>History</div>
    </Wrappers>
  );
};

export default History;
