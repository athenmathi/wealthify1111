import React from "react";
import Wrappers from "../assets/wrappers/Assessment4";
import FormRow from "./customComponents.js/FormRow";

const AssessmentForm4 = ({ allergies, updateFeilds }) => {
  const handleInput = (e) => {
    console.log({ [e.target.name]: e.target.value });
    updateFeilds({ [e.target.name]: e.target.value });
  };
  const data = [
    "Allergies(Please Specify type of allergy)",
    "Anemia",
    "Anxiety or Panic Attacks",
    "Arthritis(osteoarthritis or rheumatoid",
    "Asthma",
    "Autoimmune condition(specify type)",
    "Bronchitis",
    "Cancer (specify type)",
    "Chronic Fatigue Syndrome",
    "Crohn's Disease or ulcerative Colitis",
    "Depression",
    "Diabetes (Specify:Type 1, 2, Prediabetes, Gestational Diabetes) ",
    "Dry, itchy skin , rashes, dermatitis",
    "Eczema",
    "Emphysema",
    "Epilepsy, convulsions or seizures",
    "Eye Disease (please specify)",
    "Fibromyalgia",
    "Food Allergies or Sensitivities",
    "Fungal Infection (athlete's food , ringworm, other",
    "Gallbladder Disease/Gallstones(specify)",
    "Gout",
    "Heart attack/ Angina",
    "Heartburn",
    "Heart disease specify",
    "Hepatitis",
    "High blood fats (cholesterol, triglycerides)",
    "High blood pressure (hypertension)",
    "Hypoglycemia (low blood sugar)",
    "Intestinal Disease (specify)",
    "Inflammatory Bowel Disease (Crohn's or Ulcerative Colitis)",
    "Irritable bowel syndrome",
    "Kidney disease/failure or Kidney stones",
    "Lung disease (specify)",
    "Liver disease",
    "Mononucleosis",
    "Osteoporosis",
    "PMS",
    "Polycystic Ovarian Syndrome",
    "Pneumonia",
    "Prostate Problems",
    "Psychiatric Conditions",
    "Seizures or epilepsy",
    "Sinusitis",
    "Sleep apnea",
    "Stroke",
    "Thyroid disease (hypo- or hyperthyroid)",
    "Urinary Tract Infection",
    "Other (describe)",
  ];
  return (
    <Wrappers>
      <table>
        <thead>
          <tr>
            <th>
              Please indicate if you of a blood relative has been diagnose with
              or experienced any of the following conditions or symptoms
            </th>
            <th>Self or Family Member?</th>
            <th>Specifics(Date, Explain, etc) </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item}</td>
                <td>
                  <div className="checkbox">
                    <label htmlFor="self">Self</label>
                    <FormRow
                      type={"checkBox"}
                      // name="allergies_self"
                      value={"self"}
                      handleChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="self">Family</label>
                    <FormRow
                      type={"checkBox"}
                      // name="allergies_family"
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
    </Wrappers>
  );
};

export default AssessmentForm4;
