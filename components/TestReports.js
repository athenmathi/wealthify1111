import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";

const TestReports = () => {
  const { postData } = useAppcontext();
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("please select any files");
      return;
    }

    const base64 = await convertBase64(file);

    const obj = {
      api_key: "add_healthrecord_test_report",
      data: { p_id: 6, file: base64 },
    };
    const config = {
      headers: {
        "content-type": "",
      },
    };
  };
  return (
    <Wrappers>
      <div className="reports-container">
        <div className="file-form">
          <label htmlFor="">Please submit your test Reports</label>
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
const Wrappers = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

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
export default TestReports;
