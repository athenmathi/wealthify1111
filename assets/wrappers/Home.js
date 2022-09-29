import styled from "styled-components";
const Wrappers = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: var(--background-light-green);
  background-size: cover;
  background-image: url("./homeBg.svg"), url("./homeHand.svg"),
    url("./homeHeart.svg");
  background-repeat: no-repeat;
  background-size: 100%, 100% 550px, 450px 500px, 600px;
  /* position: relative; */
  background-position-x: 100%, 230px, 85%;
  background-position-y: 100%, bottom, 200px;
  background-blend-mode: darken;
  .container {
    position: relative;
    top: 45%;
    margin-left: 10%;
  }
`;

export default Wrappers;
