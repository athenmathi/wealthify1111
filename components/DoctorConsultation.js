import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
const Wrappers = styled.div`
  width: 700px;
  height: 300px;
  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .notes-container {
    height: 150px;
    overflow: scroll;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
  li {
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
let doctorId;
if (typeof window !== "undefined") {
  doctorId = localStorage.getItem("doctorId");
}
const PatientNotes = () => {
  const { getArrOfObj, details } = useAppcontext();
  useEffect(() => {
    getArrOfObj("healthrecord", {
      api_key: "get_healthrecord_doc_notes",
      data: {
        doctor_id: doctorId,
        patient_id: 1,
      },
    });
  }, []);
  const { queryId, postData } = useAppcontext();

  const [notes, setNotes] = useState();
  const handleChange = (e) => {
    setNotes(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setNotes("");
    postData("healthrecord", {
      api_key: "add_healthrecord_test_notes",
      data: {
        patient_id: queryId,
        doctorId: doctorId,
        notes: notes,
      },
    });
  };
  if (!details) {
    return;
  }
  return (
    <Wrappers>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="fname">Enter your Notes</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          value={notes}
          onChange={(e) => handleChange(e)}
          placeholder="Your notes.."
        ></input>

        <input type="submit" className="" />
      </form>
      <ul className="notes-container">
        {details.map((item) => {
          return <li>{item.notes}</li>;
        })}
      </ul>
    </Wrappers>
  );
};

export default PatientNotes;
