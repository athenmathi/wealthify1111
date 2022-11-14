import axios from "axios";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const TestReports = () => {
  const { postData, getTestReport, imageData } = useAppcontext();
  useEffect(() => {
    getTestReport("healthrecord", {
      api_key: "get_diet_plan",
      data: { p_id: 6 },
    });
  }, []);
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
  const convertToImage = (string) => {
    return decodeURIComponent(
      atob(string)
        .split("")
        .map((item) => {
          return "%" + ("00" + item.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("please select any files");
      return;
    }

    const base64 = await convertBase64(file);

    const obj = {
      api_key: "add_diet_plan",
      data: { p_id: 6, file: base64 },
    };
    postData("healthrecord", obj);
  };
  if (!imageData) {
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
        </div>
      </Wrappers>
    );
  }

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
        <div className="file-display">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th> Uploaded Date </th>
                <th> File </th>
              </tr>
            </thead>

            {imageData.map((item) => {
              const { s_no, patient_id, file } = item;
              return (
                <tr>
                  <td> {s_no} </td>
                  <td> {patient_id} </td>
                  <td>
                    {/* <img src={convertToImage(file)} alt="ds" srcset="" />{" "} */}
                    <a href={convertToImage(file)} target="_blank">
                      click here
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Wrappers>
  );
};
const Wrappers = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .file-form {
    margin-left: 4rem;
    margin-top: 2rem;
    position: absolute;
    top: 1rem;
    left: 20%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .btn {
    margin-top: 2rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    color: white;
  }
  .file-display {
    width: 600px;
    height: 200px;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
export default TestReports;
