import Image from "next/image";
import React from "react";
import footerLogo from "../assets/image/footerLogo.svg";
import Wrappers from "../assets/wrappers/Footer.js";
const Footer = () => {
  return (
    <Wrappers>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <div className="footerLogo">
                <Image src={footerLogo} />
              </div>
              <div id="follow">Follow Us</div>

              <div className="socialLinks">
                <a href="#">
                  <i className="fa-brands fa-facebook-f fa-lg"></i>
                </a>

                <a href="#">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>

                <a href="#">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </div>
            </div>
            {/* <!-- <div className="algin-rectangle"> --> */}
            <div className="footer-rec">
              <div className="none rectangle"></div>
            </div>
            {/* <!-- </div> --> */}

            {/* <!--next col--> */}
            <div className="footer-col">
              {/* <!-- style="padding-left: 50px; padding-right: 50px" --> */}

              <span>Quick Links</span>
              <div className="common">
                <div className="quicklinks">
                  <ul>
                    <a href="#">Home</a>
                  </ul>
                  <ul>
                    <a href="#">About Us</a>
                  </ul>
                  <ul>
                    <a href="#">Plan's</a>
                  </ul>
                  <ul>
                    <a href="#">Why Us</a>
                  </ul>
                </div>
                <div className="quicklinks2">
                  <ul>
                    <a href="#">Enroll Us</a>
                  </ul>
                  <ul>
                    <a href="#">Blog</a>
                  </ul>
                  <ul>
                    <a href="#">FAQ</a>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- rectangle--> */}
            <div className="footer-rec">
              <div className="rectangle"></div>
            </div>
            {/* <!--next col--> */}
            <div className="footer-col">
              <div className="footer-col-div">
                <span>Contact Us</span>
                <ul>
                  <ul>
                    Email: dr.wealthify@gmail.com<a href="#"></a>
                  </ul>

                  <ul>
                    Phone: +91 6383 6465 41<a href="#"></a>
                  </ul>
                </ul>
              </div>
            </div>
            {/* <!-- rectangle--> */}
            <div className="footer-rec">
              <div className="rectangle"></div>
            </div>
            {/* <!--next col--> */}
            <div className="footer-col">
              <div className="footer-col-div">
                <span>Location</span>
                <ul>
                  <ul className="weight">HeadQuaters Address</ul>

                  <ul>
                    637/2 VallalarNagar,Pachal,
                    <br />
                    Tiruppatur District.
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cc">
          <p className="cc-content">
            © 2022 &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Terms of
            Service
          </p>
        </div>
      </footer>
    </Wrappers>
  );
};

export default Footer;
