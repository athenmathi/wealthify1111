import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AssessmentForm1 from "../../components/AssessmentForm1";
import AssessmentForm2 from "../../components/AssessmentForm2";
import AssessmentForm3 from "../../components/AssessmentForm3";
import AssessmentForm4 from "../../components/AssessmentForm4";
import AssessmentForm5 from "../../components/AssessmentForm5";
import useMultiStepForm from "../../customHooks/useMultiStepForm";
import nextBtn from "../image/nextBtn.svg";
import Wrappers from "./AssessmentForm1";

const initialData = {
  f_name: "",
  l_name: "",
  mobile_num: "",
  email: "",
  dob: "",
  agree: "",
  todayDate: "",
  sex: "",
  age: "",
  height: "",
  current_weight: "",
  normal_weight: "",
  weight_6_month_ago: "",
  bloodGroup: "",
  medicalCondition: "",
  seasonalAllergies: "",
};
const AssessmentFormContainer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      const { data } = await axios.post(
        `http://doctor.brandimagetech.com/patient.php?api_key=get_patient&ph_num=918939068212&assessmentData=${initialData}`
      );
      setResponseData(data);
    };
    getData();
    // next();
    // window.scrollTo(0, 0);
  };

  const updateFeilds = (feilds) => {
    setAssessmentData((prev) => {
      return { ...prev, ...feilds };
    });
  };
  const [assessmentData, setAssessmentData] = useState(initialData);
  const { steps, currentStepIndex, back, goTo, next, step } = useMultiStepForm([
    <AssessmentForm1
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm1>,
    <AssessmentForm2
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm2>,
    <AssessmentForm3
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm3>,
    <AssessmentForm4
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm4>,
    <AssessmentForm5
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm5>,
    // <div>two</div>,
  ]);
  const [responseData, setResponseData] = useState({});

  const nextPage = (e) => {
    e.preventDefault();
    next();
    // window.scrollTo(0, 0);
    console.log(currentStepIndex);
  };
  const prevPage = (e) => {
    e.preventDefault();
    back();
    window.scrollTo(0, 0);
  };
  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        {step}
        <Wrappers>
          {/* <footer>
            <div>Assessment Form 1</div>

            <button type="submit" className="btn" onClick={(e) => prevPage(e)}>
              <div className="back">
                <p>back</p>
                <Image src={nextBtn} />
              </div>
            </button>

            <button type="submit" className="btn" onClick={(e) => nextPage(e)}>
              <div className="next">
                <Image src={nextBtn} />
                <p>NEXT</p>
              </div>
            </button>
          </footer> */}

          <footer>
            <p>Assessment form 1 </p>
            <div className="prev btn-container">
              <button
                type="submit"
                className="btn prev-btn"
                onClick={(e) => prevPage(e)}
              >
                <Image src={nextBtn} />
              </button>
              <p>Back</p>
            </div>
            <div className="underline"></div>
            <div className="next btn-container" onClick={(e) => nextPage(e)}>
              <button className="btn next-btn">
                <Image src={nextBtn} />
              </button>
              <p>next</p>
            </div>
            <button type="submit">submit</button>
          </footer>
        </Wrappers>
        {/* <button type="submit" onClick={() => handleSubmit()}></button> */}
      </form>
    </>
  );
};

export default AssessmentFormContainer;
