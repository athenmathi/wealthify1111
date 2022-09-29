import styled from "styled-components";

const Wrappers = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  min-width: 700px;
  border-radius: 1rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  margin-right: 5rem;
  margin-left: 3rem;

  .title {
    text-align: center;
    color: var(--primary-700);
  }
  .first-container {
    width: 600px;
    background-color: var(--background-gray);
    border-radius: 2rem;
    padding: 1rem 3rem 1rem 1rem;
  }
  .weeks {
    margin-left: 2.3rem;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    margin-bottom: 2rem;
  }
`;
export default Wrappers;
