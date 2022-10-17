import React from "react";
import styled from "styled-components";

const Wrappers = styled.div`
  width: 700px;
  height: 400px;
  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }
`;

const DoctorConsultation = () => {
  return (
    <Wrappers>
      <h2>Doctor Consultation</h2>

      <p>
        <strong>Tip:</strong>
        Doctor Write your notes here
      </p>

      <form>
        <textarea>Some text...</textarea>
      </form>
    </Wrappers>
  );
};

export default DoctorConsultation;
