import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    display: flex;
  }
  .form-section {
    margin-left: 4rem;
    width: 70%;
    /* background-color: lightcoral; */
  }
  .img-section {
  }
  form div {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 2rem;
  }
  .first-row {
    display: flex;
    flex-direction: row;
  }
  input {
    padding: 1rem;
  }
  .two-row {
    width: 40vh;
    margin-right: 2rem;
  }
  label {
    position: absolute;
    top: -0.6rem;
    left: 1.5rem;
    background-color: white;
  }
`;
export default Wrappers;
