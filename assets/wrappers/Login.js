import styled from "styled-components";

const Wrappers = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  border-radius: 2rem;
  width: 300px;
  height: 100%;
  padding: 1rem;
  margin: 0 auto;
  .container {
  }
  .name {
    color: var(--primary-700);
  }
  .number {
    border: none;
    border-bottom: 1px solid black;
  }

  h4 {
    margin-top: -0.5rem;
  }
  .close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export default Wrappers;
