import styled from "styled-components";

const Wrappers = styled.div`
  margin-top: 65vh;
  .vision-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    text-align: center;
    /* max-width: 900px; */
  }
  .title {
    text-align: center;
  }
  .paragraph {
    padding-top: 2.3rem;
    font-size: 1.2rem;
    line-height: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  .our-vision {
    background-color: var(--primary-700);
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 0 2rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
  .title {
    color: white;
    padding-top: 1rem;
  }
  .subtitle {
    color: white;
    padding-bottom: 2.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    .our-vision,
    .paragraph {
      margin: 0 1.5rem;
    }
  }
`;

export default Wrappers;
