import styled from "styled-components";
// import Reversal from "../image/Reversal.svg";
import df from "../../public/Logo.svg";
const Wrappers = styled.div`
  width: 100%;
  height: 700px;
  background-color: var(--background-light-green);
  background-image: url("./Reversal.svg");
  background-size: cover;
  background-blend-mode: darken;

  .title-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-top: 7rem;
    font-size: 3rem;
  }
  .subtitle {
    font-size: 2rem;
    font-weight: 400;
  }
  .dark-title {
    margin-top: 5rem;
    border-radius: 0.5rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    color: white;
    max-width: 1300px;
    text-align: center;
    font-size: 2rem;
  }
  .sub-dark-title {
    background-color: black;
    color: white;
    padding: 1rem 4rem;
    border-radius: 2rem;
    font-weight: 400;
  }
`;
export default Wrappers;
