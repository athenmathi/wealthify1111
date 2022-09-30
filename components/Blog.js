import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/Blog";
import blogImg from "../assets/image/blogImg.jpg";
const Blog = () => {
  return (
    <Wrappers>
      <div className="line-container">
        <h1 className="blog-title">Blogs</h1>
        <div className="green-line" style={{ width: "5rem" }}></div>
      </div>
      <div className="blog">
        <div className="recentPosts">
          <div className="mainPosts">
            <div className="longRectangle">HEALTH</div>

            <Image src={blogImg} />
          </div>
          <div className="mainPostsContent">
            <h4>Binge Eating Disorder</h4>
            <p>
              Binge eating disorder is a serious eating disorder where you
              frequently eat large amounts of food, and the temptation to eat
              more never stops. It is characterized by a condition where one
              overeats at every occasion, and may even feel guilty of
              overeating.
            </p>
            <div className="postFooter">
              <div className="author" style={{ paddingTop: "30px" }}>
                <span>By</span> Maudy Will
              </div>
              <div className="readmore" style={{ paddingTop: "30px" }}>
                <u>
                  {" "}
                  <a href="#">Readmore >></a>{" "}
                </u>
              </div>
            </div>
          </div>
          {/* <!--horizontal line --> */}

          <div className="verticalLine"></div>
          <div className="recentPosts2">
            <div className="trendingTopic">
              <h4>
                <u>TRENDING TOPIC</u>
              </h4>
            </div>
            <div className="latestUpdate">
              <u>
                <h4>LATEST UPDATE</h4>
              </u>
            </div>
            <div className="postContents">
              <b>
                White House on defensive as Manchin raises concerns about new
                spending
              </b>
            </div>
            <div className="subContents">
              Lorem ipsum dolor sit amet. Est galisum unde a itaque qui iste
              autem id earum eaque et adipisci consequuntur et harum excepturi.
              Sed odit doloremque aut expedita deserunt et expedita saepe. Aut
              officia mollitia sed voluptas tempore id enim aliquam.
              <div className="postFooter">
                <div className="author">
                  <span>By</span> Michael Jordy
                </div>
                <div className="readmore">
                  <u>
                    <a href="#">Readmore >></a>
                  </u>
                </div>
              </div>
            </div>
            {/* <!-- hr --> */}
            <hr className="horizontalLine" />
            {/* <!-- post 2--> */}
            <div className="postContents">
              <b>
                White House on defensive as Manchin raises concerns about new
                spending
              </b>
            </div>
            <div className="subContents">
              Lorem ipsum dolor sit amet. Est galisum unde a itaque qui iste
              autem id earum eaque et adipisci consequuntur et harum excepturi.
              Sed odit doloremque aut expedita deserunt et expedita saepe. Aut
              officia mollitia sed voluptas tempore id enim aliquam.
              <div className="postFooter">
                <div className="author">
                  <span>By</span> Michael Jordy
                </div>
                <div className="readmore">
                  <u>
                    <a href="#">Readmore >></a>
                  </u>
                </div>
              </div>
            </div>
            <hr className="horizontalLine" />
            <div className="postContents">
              <b>
                White House on defensive as Manchin raises concerns about new
                spending
              </b>
            </div>

            <div className="subContents">
              Lorem ipsum dolor sit amet. Est galisum unde a itaque qui iste
              autem id earum eaque et adipisci consequuntur et harum excepturi.
              Sed odit doloremque aut expedita deserunt et expedita saepe. Aut
              officia mollitia sed voluptas tempore id enim aliquam.
              <div className="postFooter">
                <div className="author">
                  <span>By</span> Michael Jordy
                </div>
                <div className="readmore">
                  <u>
                    <a href="#">Readmore >></a>
                  </u>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="shortRectangle">LIFESTYLE</div>
            <div className="subposts">
              <Image src={blogImg} />
              <div>
                <b>Diabetic Neuropathy: Putting your best foot forward</b>
              </div>
              <div className="subpostFooter">
                <div className="author">
                  <span>By</span> Michael Jordy
                </div>
                <div className="readmore">
                  <u>
                    <a href="#">Readmore >></a>
                  </u>
                </div>
              </div>
            </div>

            <div className="subposts">
              <span className="shortRectangle">HEALTH</span>
              <Image src={blogImg} />
              <div>
                <b>A Small Guide to Understanding Obesity</b>
              </div>
              <div className="subpostFooter">
                <div className="author">
                  <span>By</span> Michael Jordy
                </div>
                <div className="readmore">
                  <u>
                    <a href="#">Readmore >></a>
                  </u>
                </div>
              </div>
            </div>
            <div className="subposts">
              <span className="shortRectangle" style={{ fontSize: "14px" }}>
                TECHNOLOGY
              </span>
              <Image src={blogImg} />
              <div>
                <b> HYPERTENSION</b>
              </div>
              <div className="subpostFooter">
                <div className="author">
                  <span>By</span> Michael Jordy
                </div>
                <div className="readmore">
                  <u>
                    <a href="#"> Readmore >></a>
                  </u>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Blog;
