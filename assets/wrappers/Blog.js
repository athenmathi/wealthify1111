import styled from "styled-components";

const Wrappers = styled.div`
  margin-bottom: 10rem;
  @import url("https://fonts.googleapis.com/css2?family=poppins&display=swap");

  body {
    font-family: "poppins";
    background-color: #fafafa;
  }

  .blog {
    background-color: white;
    display: grid;
  }

  .blog h3 {
    margin-top: 50px;
    text-align: left;
    font-weight: 900;
    font-size: 48;
  }
  .headingGrid {
    display: grid;
    grid-template-columns: 60px auto 8rem;
  }
  .profilePic img {
    position: relative;
    /* background-color: grey; */
    border: 2px none;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-left: 22px;
  }
  .name {
    padding-top: 22px;
    padding-left: 2rem;
    font-size: 20px;
  }
  .postDate {
    font-size: 16px;
    color: #aaaaaa;
  }

  .post img {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px none;
    margin: 20px;
    min-width: 1300px;
    min-height: 555px;
    border-radius: 22px;
  }

  .description {
    margin: 20px;
    text-align: left;
    font-size: 32;
    font-weight: 800;
  }

  .content {
    text-align: justify;
    font-size: medium;
    padding: 20px;
  }

  .recentPosts {
    display: grid;
    /* border: 2px solid black; */
    grid-template-columns: 43.5% 27.5% 1% 28.5%;
    grid-template-rows: 340px 285px;
  }
  .recentPosts .longRectangle {
    position: absolute;
    width: 10%;
    height: 6%;
    background-color: #06913d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    z-index: 1;
  }
  .mainPosts img {
    border: 2px solid grey;
  }
  .mainPostsContent h4 {
    font-size: 28px;
  }
  .mainPostsContent {
    margin-right: 20px;
    margin-bottom: 70px;
    margin-top: 0px;
  }
  .mainPostsContent footer {
    justify-content: right;
    padding-top: 65px;
  }
  .recentPosts2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    align-content: baseline;
    /* padding-left: 20px; */
    /* border: black; */
    flex-wrap: wrap;
  }

  .trendingTopic,
  .latestUpdate {
    cursor: pointer;
    color: green;
  }
  .postContents {
    padding: 9px;
    padding-top: 10px;
    padding-bottom: 0px;
  }

  .subContents {
    /* padding-left: 20px; */
    padding: 10px 20px 10px 11px;
    font-size: 14px;
  }

  .postFooter {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 25px;
  }

  .postFooter .readmore u a:link {
    color: green;
  }
  .author span {
    color: #aaaaaa;
  }
  .readmore {
    color: green;
  }

  .verticalLine {
    height: 525px;
    margin-top: 75px;
    border-left: 2px solid #b2b2b2;
  }

  .horizontalLine {
    position: relative;
    width: 389px;
    border: 1px solid #b2b2b2;
    border-radius: 2px;
  }
  .card {
    width: 305px;
    display: grid;
    grid-template-columns: 90% 90% 90%;
    grid-template-rows: 216px 37px 33px;
    grid-gap: 30px;
  }

  .card .shortRectangle,
  .card .subposts .shortRectangle {
    position: absolute;
    width: 122px;
    height: 40px;
    background-color: #06913d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    font-size: 14px;
    z-index: 1;
  }
  .subPosts img {
    width: 290px;
    height: 217px;
    border: 2px solid grey;
  }

  .subPosts div {
    font-size: 15px;
    padding-top: 10px;
  }

  .subpostFooter {
    display: flex;
    /* flex-wrap: nowrap; */
    flex-direction: row;
    /* justify-content: space-between; */
    padding-top: 18px;
  }

  .subpostFooter .readmore {
    padding-left: 100px;
  }

  a:-webkit-any-link {
    color: green;
  }

  @media only screen and (max-width: 600px) {
    body {
      font-family: "poppins";
      background-color: #fafafa;
    }

    .blog h3 {
      margin-top: 50px;
      /* text-align: left; */
      font-weight: 900;
      font-size: 30;
      max-width: 28%;
    }
    .headingGrid {
      display: grid;
      grid-template-columns: 4% 15% 98%;
    }

    .post img {
      display: flex;
      /* justify-content: right; */
      /* align-items: center; */
      text-align: left;
      border: 2px solid black;

      margin: 26px 0px 20px 0px;
      max-width: 27%;
      min-height: 70%;
      border-radius: 21px;
    }

    .description {
      margin: 20px;
      text-align: left;
      font-size: 28;
      font-weight: 800;
      max-width: 28%;
    }
    .content {
      text-align: left;
      font-size: medium;
      padding: 20px;
      max-width: 26%;
    }

    .recentPosts {
      display: grid;
      /* border: 2px solid black; */
      grid-template-columns: 580px 338px 8px 420px;
      grid-template-rows: 340px 285px;
    }
  }
`;
export default Wrappers;
