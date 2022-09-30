import styled from "styled-components";

const Wrappers = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=poppins&display=swap");

  body {
    font-family: "poppins";
    background-color: #fafafa;
  }

  /* .Nutrition {
  background-image: url(../images/Ellipse1.svg), url(../images/Path1.svg),
    url(../images/Path2.svg), url(../images/veggies/Group3.svg);

  /* display: block; 
  background-repeat: no-repeat;
  background-position-x: 1035px, center, -1.2px, 1035px;
  background-position-y: 219px, center, 130.54px, 100px;
  background-size: 80px 80px, cover, cover, 136.09px 489.19px;
  position: relative;
  height: 300px;
  opacity: 0.2, 1, 1;
  margin-bottom: 50px;
} */
  .search-icon {
    margin-left: 29rem;
    margin-bottom: -3rem;
  }
  .Nutrition h3 {
    /* position: relative;
    text-align: center;
    padding-top: 194px; */
    font-size: 60px;
    font-weight: 300;
    display: block;
    text-align: center;
    font-family: bite-chocolate;
    color: var(--font-color);
    margin-top: 2rem;
  }

  .Nutrition {
    background-image: url("./nutritionBg.svg");
    position: relative;
    height: 30vh;
    width: 100%;
    background-size: cover;
    margin-bottom: 50px;
    background-repeat: no-repeat;
  }

  /* .Nutrition::after {
  position: absolute;
  z-index: -1;
} */

  .cover1 {
    opacity: 0.25;
  }

  .Nutrition h3 {
    text-align: center;
    font-size: 60px;
    font-weight: 300;
  }

  .searchbar input {
    border: 2px solid grey;

    border-radius: 20px;
    margin-left: 65px;
    width: 450px;
    height: 38px;
    /* background-color: red; */
    font-size: 24px;
  }

  .searchbar input::placeholder {
    font-size: 20px;
    padding-left: 20px;
    color: #e0e0e0;
  }
  /* 
div i {
  background-color: red;
  width: 100px;
  margin-top: 20px;
} */

  /* .fa-search {
  width: 100px;
  margin-top: 20px;
} */

  .searchbar i {
    position: absolute;
    width: 100px;
    margin-top: 25px;
  }

  .icon {
    padding: 10;
    padding-left: 435px;
    padding-top: 1px;
    color: #787878;
    min-width: 50px;
    text-align: center;
    justify-items: center;
  }

  .searchrec {
    position: absolute;
    border-left: 2px solid #b2b2b2;
    height: 26px;
    /* width: 100%; */
    max-width: 50px;
    padding: 7px;
    margin-top: 0.5rem;
    margin-left: 450px;
  }

  .searchbar .button {
    width: 150px;
    height: 50px;
    background-color: yellow;
    border-radius: 50px;
    margin-left: 12px;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px white;
    /* padding-top: 10px; */
    justify-content: space-between;
    color: green;
    font-weight: 200;
    text-align: center;
    cursor: pointer;
  }

  .fruitgrid {
    display: grid;
    grid-template-columns:
      250px 250px 250px
      250px;
    margin-top: 50px;
    /* margin-left: 50px; */
    justify-content: space-evenly;
    grid-auto-flow: row;
  }

  /* .fruitgrid div {
   border: 1px solid red; 
} */

  .fruitgrid div p {
    /* border: 1px solid blue; */
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    body {
      font-family: "poppins";
      background-color: #fafafa;
    }

    .searchbar input {
      border: 2px solid grey;

      border-radius: 20px;
      margin-left: 18px;
      width: 250px;
      height: 42px;
      /* background-color: red; */
      font-size: 24px;
      display: flex;
    }

    .searchrec {
      position: absolute;
      border-left: 2px solid #b2b2b2;
      height: 14px;
      /* width: 100%; */
      max-width: 50px;
      padding: 7px;
      margin-top: 12px;
      margin-left: 220px;
    }

    .icon {
      padding: 10;
      padding-left: 200px;
      padding-top: 1px;
      color: #787878;
      min-width: 50px;
      text-align: center;
      justify-items: center;
    }
    .fruitgrid {
      display: grid;
      grid-template-columns: 250px;
      margin-top: 50px;
      /* margin-left: 50px; */
      justify-content: space-evenly;
    }
  }
`;

export default Wrappers;
