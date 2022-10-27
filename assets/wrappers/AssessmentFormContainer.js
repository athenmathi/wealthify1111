import Image from "next/image";
import React, { useState } from "react";
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
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  dob: "",
  agree: "",
  todayDate: "",
  sex: "",
  age: "",
  height: "",
  currentWeight: "",
  normalWeight: "",
  pastWeight: "",
  bloodGroup: "",
  medicalCondition: "",
  seasonalAllergies: "",
  allergies: { self: "", family: "", specifics: "" },
};
const AssessmentFormContainer = () => {
  const updateFeilds = (feilds) => {
    setData((prev) => {
      return { ...prev, ...feilds };
    });
  };
  const [data, setData] = useState(initialData);
  const { steps, currentStepIndex, back, goTo, next, step } = useMultiStepForm([
    <AssessmentForm1 {...data} updateFeilds={updateFeilds}></AssessmentForm1>,
    <AssessmentForm2 {...data} updateFeilds={updateFeilds}></AssessmentForm2>,
    <AssessmentForm3 {...data} updateFeilds={updateFeilds}></AssessmentForm3>,
    <AssessmentForm4 {...data} updateFeilds={updateFeilds}></AssessmentForm4>,
    <AssessmentForm5 {...data} updateFeilds={updateFeilds}></AssessmentForm5>,
    // <div>two</div>,
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    next();
    window.scrollTo(0, 0);
    console.log(data);
  };
  return (
    <>
      <form action="">
        {step}
        <Wrappers>
          <footer>
            <div>Assessment Form 1</div>
            <button
              type="submit"
              className="btn"
              onClick={(e) => handleSubmit(e)}
            >
              <div className="next">
                <Image src={nextBtn} />
                <p>NEXT</p>
              </div>
            </button>
          </footer>
        </Wrappers>
        {/* <button type="submit" onClick={() => handleSubmit()}></button> */}
      </form>
    </>
  );
};

export default AssessmentFormContainer;
