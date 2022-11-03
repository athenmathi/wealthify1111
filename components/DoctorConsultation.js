import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import PrescriptionForm from "./PrescriptionForm";

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
  .btn-green {
    background-color: var(--primary-700);
    padding: 1rem 7rem;
    border-radius: 2rem;
    text-decoration: none;
    border: none;
    color: white;
    margin-top: 3rem;
    margin-left: 15rem;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const DoctorConsultation = () => {
  const [openForm, setOpenForm] = useState(false);
  const [state, setState] = useState(false);
  const handleSubmit = async (e) => {
    try {
      const { data } = await axios.post(
        `
     http://doctor.brandimagetech.com/healthrecords.php`,
        {
          api_key: "send_otp",
          ph_num: loginData.mobileNumber,
          referal_id: loginData.referalId,
        },
        {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          // Accept: "application/json",
        }
      );
    } catch (error) {
      console.log({ error: error.response });
    }
  };
  return (
    <Wrappers>
      <h2>Doctor Consultation</h2>

      <p>
        <strong>Tip:</strong>
        Doctor Write your notes here
      </p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea placeholder="Some text..."></textarea>
        <button type="submit" className="">
          submit
        </button>
      </form>
      {openForm ? <PrescriptionForm setOpenForm={setOpenForm} /> : null}

      <button onClick={() => setOpenForm(true)} className="btn-green">
        ADD PRESCRIPTION
      </button>
    </Wrappers>
  );
};

export default DoctorConsultation;
