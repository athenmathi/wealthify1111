import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    /* margin-left: 9rem; */
    background-color: white;
    max-width: 450px;
  }
  li {
    list-style-type: none;
  }
  .item {
    display: flex;
    align-items: center;
    /* border: 2px solid black; */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    border-radius: 1rem;
    padding: 1rem;
  }
  .item:active {
    border-left: 2px solid var(--primary-700);
    border-right: 2px solid var(--primary-700);
    border-top: 1px solid var(--primary-700);
    border-bottom: 1px solid var(--primary-700);
  }
  .text {
    margin-left: 2rem;
    width: 20rem;
  }
  .rightCheveron {
  }
`;
export default Wrappers;
