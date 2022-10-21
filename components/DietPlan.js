import React from "react";
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
  return (
    <Wrappers>
      <div className="reports-container">
        <div className="file-form">
          <label htmlFor="">Please submit your test Reports</label>
          <form action="" type="submit">
            <input type="file" />
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
