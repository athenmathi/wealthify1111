import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    min-width: 200px;
    border-radius: 1rem;
    padding: 1rem 3rem;
    margin-top: 1rem;
    margin-right: 5rem;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
  }

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

  .contents {
    display: flex;
  }
  .underline {
    width: 100%;
    height: 3px;
    text-align: center;
    background-color: gray;
  }
  .name {
    margin-right: 1.6rem;
  }
  .payment-history {
  }
  .btn-green {
    background-color: var(--primary-700);
    padding: 1rem 7rem;
    border-radius: 2rem;
    text-decoration: none;
    border: none;
    color: white;
    margin-top: 3rem;
    margin-left: 15rem;
  }
  .contents > p {
    color: black;
  }
  @media (max-width: 480px) {
    .container {
      /* max-width: 350px;
      margin-right: 1rem;
      margin-left: -2rem; */
      min-width: 300px;
    }
    margin-left: 9rem;
    .physical-details {
      width: 400px;
    }
  }
`;

export default Wrappers;
