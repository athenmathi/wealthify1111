import styled from "styled-components";

const Wrappers = styled.div`
  /* table  */
  position: absolute;
  top: 0px;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  .container {
    top: 20%;
    background-color: white;
    height: 470px;
    width: 70%;
    margin: 0 auto;
    border-radius: 2rem;
    overflow: auto;
    position: relative;
  }
  .doctor-details {
    display: flex;
    width: 200px;
    margin: 0 auto;
    justify-content: space-between;
  }
  .close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1rem;
    padding: 0;
    border: none;
    background-color: none;
  }
  .doctor-heading {
    border-collapse: collapse;
    width: max(400px, 80%);
    margin: 0 auto;
  }
  tr:has(th) {
    position: sticky;
    top: 0;
  }
  .doctor-heading th {
    text-align: center;
    padding: 1rem 0;
    background-color: #a1c334;
  }
  .doctor-heading td {
    padding: 0.75rem 0;
    text-align: center;
  }
  .doctor-heading tr:nth-child(odd) {
    background-color: #c9cbc5;
  }
  .btn {
    background-color: var(--primary-700);
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
  }
`;

export default Wrappers;
