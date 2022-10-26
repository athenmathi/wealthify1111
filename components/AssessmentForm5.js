import React from "react";
import Wrappers from "../assets/wrappers/AssessementForm5";
import FormRow from "./customComponents.js/FormRow";
const data1 = [
  "Back injury",
  "Broken (specify)",
  "Head injury",
  "Neck injury",
  "Other (describe)",
];
const data2 = [
  "Barium Enema",
  "Bone Scan",
  "CAT Scan: Abdomen, Brain, Spine (specify)",
  "Chest X-ray",
  "Colonoscopy or Sigmoidoscopy (specify)",
  "EKG",
  "Liver scan",
  "NMR/MRI",
  "Upper GI Series",
  "Other (describe)",
  "Operations",
  "Dental Surgery",
  "Gall Bladder",
  "Hernia",
  "Hysterectomy",
  "Tonsillectomy",
];
const data3 = [
  "Appetite",
  "Constipation",
  "Menstrual difficulties",
  "Bleeding gums",
  "Diarrhea",
  "Seeing in dim light",
  "Bruising",
  "Edema",
  "Sudden weight change",
  "Chewing or swallowing",
  "Indigestion",
  "Stress",
];
const AssessmentForm5 = ({ updateFeilds }) => {
  const handleInput = (e) => {
    let value = e.target.checked ? e.target.value : "";
    console.log({ [e.target.name]: value });
    // console.log(e.target.checked);
    updateFeilds({ [e.target.name]: e.target.value });
  };

  return (
    <Wrappers>
      <h1 className="heading">INJURIES</h1>
      <div className="table-one">
        <table>
          <thead>
            <tr>
              <th>
                Please indicate if you of a blood relative has been diagnose
                with or experienced any of the following conditions or symptoms
              </th>
              <th>Self or Family Member?</th>
              <th>Specifics(Date, Explain, etc) </th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item) => {
              return (
                <tr>
                  <td>{item}</td>
                  <td>
                    <div className="checkbox">
                      <label htmlFor="self">Self</label>
                      <FormRow
                        type={"checkBox"}
                        name={item.split(" ")[0] + "_self"}
                        value={"self"}
                        handleChange={(e) => handleInput(e)}
                      />
                      <label htmlFor="self">Family</label>
                      <FormRow
                        type={"checkBox"}
                        name={item.split(" ")[0] + "_family"}
                        value={"family"}
                        handleChange={(e) => handleInput(e)}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="text-area">
                      <textarea name="" id=""></textarea>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h1 className="heading">DIAGNOSTIC STUDIES</h1>
      <div className="table-two">
        <table>
          <thead>
            <tr>
              <th>
                Please indicate if you of a blood relative has been diagnose
                with or experienced any of the following conditions or symptoms
              </th>
              <th>Self or Family Member?</th>
              <th>Specifics(Date, Explain, etc) </th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => {
              return (
                <tr>
                  <td>{item}</td>
                  <td>
                    <div className="checkbox">
                      <label htmlFor="self">Self</label>
                      <FormRow
                        type={"checkBox"}
                        name={item.split(" ")[0] + "_family"}
                        value={"self"}
                        handleChange={(e) => handleInput(e)}
                      />
                      <label htmlFor="self">Family</label>
                      <FormRow
                        type={"checkBox"}
                        name={item.split(" ")[0] + "_family"}
                        value={"family"}
                        handleChange={(e) => handleInput(e)}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="text-area">
                      <textarea name="" id=""></textarea>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3 className="heading">
        Do you have complaints about any of the following ?
      </h3>
      <div className="checkbox-container">
        {data3.map((item) => {
          return (
            <div className="check">
              <input
                type="checkBox"
                className="checkbox"
                name={item}
                value={true}
                onChange={(e) => handleInput(e)}
              />
              <label htmlFor="">{item}</label>
            </div>
          );
        })}
      </div>
      <div className="bottom-container">
        <div className="questions-container">
          <p>Do you use tobacco in any way? </p>
          <div className="questions-input">
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">Yes</label>
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">No</label>
          </div>
        </div>
        <div className="questions-container">
          <p>Do you use alcohol in any way? </p>
          <div className="questions-input">
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">Yes</label>
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">No</label>
          </div>
        </div>
        <div className="questions-container">
          <p>Did you recently stop smoking ?</p>
          <div className="questions-input">
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">Yes</label>
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">No</label>
          </div>
        </div>
      </div>
      <div className="food-area">
        <p>Are there certain foods that you do not eat ever? Why?</p>
        <textarea
          className="food-textarea"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </Wrappers>
  );
};

export default AssessmentForm5;
