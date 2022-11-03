import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
const Wrappers = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .file-form {
    margin-left: 4rem;
    margin-top: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .btn {
    margin-top: 2rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    color: white;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
const DietPlan = () => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      console.log("please select any files");
      return;
    }
    const url = "http:localhost:4000";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrappers>
      <div className="reports-container">
        <div className="file-form">
          <label htmlFor="">Please submit your Diet Plan</label>
          <form action="" type="submit">
            <input type="file" onChange={(e) => handleChange(e)} />
            <div>
              <button className="btn" onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="file-display"></div>
      </div>
    </Wrappers>
  );
};

export default DietPlan;
