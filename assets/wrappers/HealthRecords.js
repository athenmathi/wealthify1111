import styled from "styled-components";

const Wrappers = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  min-width: 700px;
  border-radius: 1rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  margin-right: 5rem;
  margin-left: 3rem;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .line {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--line-color-gray);
    margin-top: 1rem;
  }
  .name {
    color: var(--primary-700);
  }
  .physical-details {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .height,
  .weight,
  .blood {
    display: flex;
    flex-direction: column;
  }
  .img {
  }
`;

export default Wrappers;
