import React, { useEffect, useState } from "react";
import Wrappers from "../assets/wrappers/Assessment4";
import FormRow from "./customComponents.js/FormRow";
const data = [
  {
    name: "Allergies (Please Specify type of allergy)",
    property: "allergies",
  },
  {
    name: "Anemia",
    property: "anemia",
  },
  {
    name: "Anxiety or Panic Attacks",
    property: "anxiety_or_panic_attacks",
  },
  {
    name: "Arthritis (osteoarthritis or rheumatoid",
    property: "arthritis",
  },
  {
    name: "Asthma",
    property: "asthma",
  },
  {
    name: "Autoimmune condition(specify type)",
    property: "autoimmune_condition",
  },
  {
    name: "Bronchitis",
    property: "bronchitis",
  },
  {
    name: "Cancer (specify type)",
    property: "cancer",
  },
  {
    name: "Chronic Fatigue Syndrome",
    property: "chronic_fatigue_syndrome",
  },
  {
    name: "Crohn's Disease or ulcerative Colitis",
    property: "crohns_disease_or_ulcerative_colitis",
  },
  {
    name: "Depression",
    property: "depression",
  },
  {
    name: "Diabetes (Specify:Type 1, 2, Prediabetes , Gestational Diabetes) ",
    property: "diabetes",
  },
  {
    name: "Dry , itchy skin , rashes, dermatitis",
    property: "dry_itchyskin_rashes_dermatitis",
  },
  {
    name: "Eczema",
    property: "eczema",
  },
  {
    name: "Emphysema",
    property: "emphysema",
  },
  {
    name: "Epilepsy , convulsions or seizures",
    property: "epilepsy_convulsions_or_seizures",
  },
  {
    name: "Eye Disease (please specify)",
    property: "eye_disease",
  },
  {
    name: "Fibromyalgia",
    property: "fibromyalgia",
  },
  {
    name: "Food Allergies or Sensitivities",
    property: "food_allergies_or_sensitivities",
  },
  {
    name: "Fungal Infection (athlete's food , ringworm, other",
    property: "fungal_infection",
  },
  {
    name: "Gallbladder Disease/Gallstones(specify)",
    property: "gallbladder_disease",
  },
  {
    name: "Gout",
    property: "gout",
  },
  {
    name: "Heart attack/ Angina",
    property: "heart_attack",
  },

  {
    name: "Heartburn",
    property: "heartburn",
  },
  {
    name: "Heart disease specify",
    property: "heart_disease",
  },
  {
    name: "Hepatitis",
    property: "hepatitis",
  },
  {
    name: "High blood fats (cholesterol, triglycerides)",
    property: "high_blood_fats",
  },
  {
    name: "High blood pressure (hypertension)",
    property: "high_blood_pressure",
  },
  {
    name: "Hypoglycemia (low blood sugar)",
    property: "hypoglycemia",
  },
  {
    name: "Intestinal Disease (specify)",
    property: "intestinal_disease",
  },
  {
    name: "Inflammatory Bowel Disease (Crohn's or Ulcerative Colitis)",
    property: "inflammatory_bowel_disease",
  },
  {
    name: "Irritable bowel syndrome",
    property: "irritable_bowel_syndrome",
  },
  {
    name: "Kidney disease/failure or Kidney stones",
    property: "kidney_disease",
  },
  {
    name: "Lung disease (specify)",
    property: "lung_disease",
  },
  {
    name: "Liver disease",
    property: "liverdisease",
  },
  {
    name: "Mononucleosis",
    property: "mononucleosis",
  },
  {
    name: "Osteoporosis",
    property: "osteoporosis",
  },
  {
    name: "PMS",
    property: "pms",
  },
  {
    name: "Polycystic Ovarian Syndrome",
    property: "polycystic_ovarian_syndrome",
  },
  {
    name: "Pneumonia",
    property: "pneumonia",
  },
  {
    name: "Prostate Problems",
    property: "prostate_problems",
  },
  {
    name: "Psychiatric Conditions",
    property: "psychiatric_conditions",
  },
  {
    name: "Seizures or epilepsy",
    property: "seizures_or_epilepsy",
  },
  {
    name: "Sinusitis",
    property: "sinusitis",
  },
  {
    name: "Sleep apnea",
    property: "sleep_apnea",
  },
  {
    name: "Stroke",
    property: "stroke",
  },
  {
    name: "Thyroid disease (hypo- or hyperthyroid)",
    property: "thyroid_disease",
  },
  {
    name: "Urinary Tract Infection",
    property: "urinary_tract_infection",
  },
  {
    name: "Other (describe)",
    property: "pfc_other",
  },
];
const AssessmentForm4 = ({ allergies, updateFeilds }) => {
  const handleInput = (e) => {
    let value = e.target.checked ? e.target.value : "";
    console.log({ [e.target.name]: value });
    // console.log(e.target.checked);
    updateFeilds({ [e.target.name]: e.target.value });
  };

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
            <th>Specifics(Date, Explaisn, etc) </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>
                  <div className="checkbox">
                    <label htmlFor="self">Self</label>
                    <FormRow
                      type={"checkBox"}
                      name={item.property + "_self"}
                      // name={item.split(" ")[0] + "_self"}
                      value={"1"}
                      handleChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="self">Family</label>
                    <FormRow
                      type={"checkBox"}
                      name={item.property + "_family"}
                      // name={item.property.split(" ")[0] + "_family"}
                      value={"1"}
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
                    {/* <textarea name="" id=""></textarea> */}
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
