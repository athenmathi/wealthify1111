import React from "react";
import Wrappers from "../../assets/wrappers/AssessmentForm1";

const FormRow = ({ type, name, value, handleChange, labelText, unMatch }) => {
  return (
    <Wrappers>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className={unMatch ? "form-input active" : "form-input"}
      />
    </Wrappers>
  );
};

export default FormRow;
