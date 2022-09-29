import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    min-width: 700px;
    border-radius: 1rem;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-right: 5rem;
    margin-left: 3rem;
  }
  .name {
    color: var(--primary-700);
  }

  .name::after {
    content: "";
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--line-color-gray);
    margin-top: 1rem;
  }
  .subtitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default Wrappers;
