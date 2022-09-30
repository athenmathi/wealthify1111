import styled from "styled-components";

const Wrappers = styled.div`
  z-index: 200;
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: -2rem;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }

  .first-item {
  }

  .second-item > li {
    margin-left: -8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .third-item {
  }
  .btn-primary {
    background-color: var(--primary-700);
    padding: 0.75rem 2.5rem;
    border-radius: 1.5rem;
    text-decoration: none;
    border: none;
    color: white;
  }

  @media (max-width: 800px) {
    .second-item {
      display: none;
    }
    .third-item {
      display: none;
    }
  }
`;
export default Wrappers;
