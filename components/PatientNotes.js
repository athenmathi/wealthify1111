import React from "react";
import styled from "styled-components";
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
const PatientNotes = () => {
  return (
    <Wrappers>
      <form action="">
        <label for="fname">Enter your Notes</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your notes.."
        ></input>
      </form>
      <ul>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptas perferendis iste eos cumque! Provident culpa at id minus a
          aliquam adipisci rem nesciunt incidunt eos quae, impedit quos porro.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius aliquam
          deleniti nulla quidem quibusdam assumenda vel reprehenderit saepe
          libero maxime, eos similique ducimus eum omnis, excepturi animi
          laudantium velit fugiat!
        </li>
      </ul>
    </Wrappers>
  );
};

export default PatientNotes;
