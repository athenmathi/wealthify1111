import { handReceiving } from "fontawesome";
import React from "react";
import Wrappers from "../assets/wrappers/AssessementForm5";
import FormRow from "./customComponents.js/FormRow";
const data1 = [
  {
    name: "Back injury",
    property: "back_injury",
  },
  {
    name: "Broken (specify)",
    property: "broken",
  },
  {
    name: "Head injury",
    property: "head_injury",
  },
  {
    name: "Neck injury",
    property: "neck_injury",
  },
  {
    name: "Other (describe)",
    property: "pfi_other",
  },
];
const data2 = [
  {
    name: "Barium Enema",
    property: "barium_benema",
  },
  {
    name: "Bone Scan",
    property: "bone_scan",
  },
  {
    name: "CAT Scan: Abdomen, Brain, Spine (specify)",
    property: "cat_scan",
  },
  {
    name: "Chest X-ray",

    property: "chest_x_ray",
  },
  {
    name: "Colonoscopy or Sigmoidoscopy (specify)",
    property: "colonoscopy_or_sigmoidoscopy",
  },
  {
    name: "EKG",
    property: "ekg",
  },
  {
    name: "Liver scan",
    property: "liver_scan",
  },
  {
    name: "NMR/MRI",
    property: "nmr_mri",
  },
  {
    name: "Upper GI Series",
    property: "upper_gi_series",
  },
  {
    name: "Other (describe)",
    property: "ds_other",
  },
  {
    name: "Operations",
    property: "operations",
  },
  {
    name: "Dental Surgery",
    property: "dental surgery",
  },
  {
    name: "Gall Bladder",
    property: "gall_bladder",
  },
  {
    name: "Hernia",
    property: "hernia",
  },
  {
    name: "Hysterectomy",
    property: "hysterectomy",
  },
  {
    name: "Tonsillectomy",
    property: "tonsillectomy",
  },
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
const data4 = [
  { name: "Do you use tobacco in any way?", property: "tobacco" },
  { name: "Do you use alcohol in any way?", property: "alcohol" },
  { name: "Did you recently stop smoking?", property: "smoking" },
];
const AssessmentForm5 = ({ updateFeilds }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios.post(
          `http://doctor.brandimagetech.com/patient.php?api_key=get_patient&ph_num=918939068212`,
          { f_name: "rajesh" }
        );
        setResponseData(data);
      };
      getData();
    }, []);
    // next();
    // window.scrollTo(0, 0);
  };

  const handleInput = (e) => {
    let value = e.target.checked ? e.target.value : "";
    console.log({ [e.target.name]: value });
    // console.log(e.target.checked);
    updateFeilds({ [e.target.name]: e.target.value });
  };
  const handleRadio = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

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
                  <td>{item.name}</td>
                  <td>
                    <div className="checkbox">
                      <label htmlFor="self">Self</label>
                      <FormRow
                        type={"checkBox"}
                        // name={item.split(" ")[0] + "_self"}
                        name={item.property + "_self"}
                        value={"self"}
                        handleChange={(e) => handleInput(e)}
                      />
                      <label htmlFor="self">Family</label>
                      <FormRow
                        type={"checkBox"}
                        // name={item.split(" ")[0] + "_family"}
                        name={item.property + "_family"}
                        value={"family"}
                        handleChange={(e) => handleInput(e)}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="text-area">
                      <FormRow
                        type={"text"}
                        name={item.property + "_specifics"}
                        // name={item.property.split(" ")[0] + "_specific"}
                        // value={"family"}
                        handleChange={(e) => handleInput(e)}
                      />
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
                  <td>{item.name}</td>
                  <td>
                    <div className="checkbox">
                      <label htmlFor="self">Self</label>
                      <FormRow
                        type={"checkBox"}
                        name={item.property + "_specifics"}
                        // name={item.split(" ")[0] + "_family"}
                        value={"self"}
                        handleChange={(e) => handleInput(e)}
                      />
                      <label htmlFor="self">Family</label>
                      <FormRow
                        type={"checkBox"}
                        name={item.property + "_specifics"}
                        // name={item.split(" ")[0] + "_family"}
                        value={"family"}
                        handleChange={(e) => handleInput(e)}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="text-area">
                      <FormRow
                        type={"text"}
                        name={item.property + "_specifics"}
                        // name={item.property.split(" ")[0] + "_specific"}
                        // value={"family"}
                        handleChange={(e) => handleInput(e)}
                      />
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
        {data4.map((item, index) => {
          return (
            <div className="questions-container">
              <p> {item.name} </p>
              <div className="questions-input">
                <input
                  type="radio"
                  className="checkbox"
                  value="yes"
                  name={item.property}
                  onChange={(e) => handleRadio(e)}
                />
                Yes
                <input
                  type="radio"
                  className="checkbox"
                  value="No"
                  name={item.property}
                  onChange={(e) => handleRadio(e)}
                />
                NO
              </div>
            </div>
          );
        })}
        {/* <div className="questions-container">
          <p>Do you use tobacco in any way? </p>
          <div className="questions-input">
            <input
              type="checkBox"
              name="tobacco"
              className="checkbox"
              onChange={(e) => handleInput(e)}
            />
            <label htmlFor="">Yes</label>
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">No</label>
          </div>
        </div>
        <div className="questions-container">
          <p>Do you use alcohol in any way? </p>
          <div className="questions-input">
            <input
              type="radio"
              className="checkbox"
              value="yes"
              name="alcohol"
              onChange={(e) => handleRadio(e)}
            />
            Yes
            <input
              type="radio"
              className="checkbox"
              value="No"
              name="alcohol"
              onChange={(e) => handleRadio(e)}
            />
            NO
          </div>
        </div>
        <div className="questions-container">
          <p>Did you recently stop smoking ?</p>
          <div className="questions-input">
            <input
              type="checkBox"
              className="checkbox"
              name="smoking"
              onChange={(e) => handleInput(e)}
            />
            <label htmlFor="">Yes</label>
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">No</label>
          </div>
        </div> */}
      </div>
      <div className="food-area">
        <p>Are there certain foods that you do not eat ever? Why?</p>
        <textarea
          className="food-textarea"
          name="food_never_eat"
          id=""
          cols="30"
          rows="10"
          onChange={(e) => handleRadio(e)}
        ></textarea>
      </div>
      <button onSubmit={(e) => handleSubmit(e)} className="btn" type="submit">
        submit
      </button>
    </Wrappers>
  );
};

export default AssessmentForm5;
