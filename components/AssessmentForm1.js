import React from "react";
import Wrappers from "../assets/wrappers/AssementForm1";

const AssessmentForm1 = () => {
  return (
    <Wrappers>
      <div className="container">
        <section className="form-section">
          <h1 className="heading">
            Nutrition Assessment Forms & Questionnaires
          </h1>
          <p>Welcome to Wealthify </p>
          <form action="">
            <div className="first-row">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  className="two-row"
                  type="text"
                  id="firstName"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="firstName">First Name</label>

                <input
                  type="text"
                  className="two-row"
                  id="firstName"
                  placeholder="John"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" />
            </div>
          </form>
        </section>
        <section className="img-section"></section>
      </div>
    </Wrappers>
  );
};

export default AssessmentForm1;
