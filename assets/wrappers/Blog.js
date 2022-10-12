import styled from "styled-components";

const Wrappers = styled.div`
  margin-bottom: 10rem;
  .heading {
    text-align: center;
  }
  .container {
  }
  .main-container {
    display: flex;
    flex-wrap: wrap;
  }
  .left-side {
    width: max(600px, 69%);
  }

  .left-side-top {
    display: flex;
  }

  .img,
  .content {
    width: 48%;
    margin-right: 1rem;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
  }
  .left-side-bottom {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    overflow-x: auto;
    margin-bottom: 2rem;
  }
  .left-side-bottom > div {
    width: 30%;
    /* width: 80vw; */
  }
  .right-side {
    width: 30%;
  }
  .topics {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    .left-side-top {
      display: none;
    }
    .left-side-bottom div {
      width: 300px;
    }
  }
  @media (max-width: 900px) {
    .left-side-bottom {
      width: 100vw;
    }
    .left-side-bottom div {
      width: 300px;
    }
    .right-side {
      width: 100%;
    }
  }
`;
export default Wrappers;
