import Image from "next/image";
import Link from "next/link";
import {} from "../styles/Navbar.module.css";
import WealthifyLogo from "../assets/image/WealthifyLogo.svg";
import Wrappers from "../assets/wrappers/Navbar.js";
import Home from "./Home";
import { useState } from "react";
import Login from "./Login";
const Navbar = () => {
  const [modal, setModal] = useState(true);
  return (
    <Wrappers>
      <div className="navbar-container">
        <div className="first-item">
          <Image
            className="logo"
            src={WealthifyLogo}
            width="317px"
            height="250px"
          />
        </div>
        <div className="second-item">
          <li>
            <ul>
              <Link href={"/homeLoggedOut"}>Before Login</Link>
            </ul>
            <ul>
              <Link href={"/"}>Home</Link>
            </ul>
            <ul>
              <Link href={"/aboutus"}>
                <a href="">About us</a>
              </Link>
            </ul>
            <ul>
              <Link href={"/plans"}>
                <a href="">Plans</a>
              </Link>
            </ul>

            <ul>
              <Link href={"/recipe"}>
                <a href="">Recipes</a>
              </Link>
            </ul>
            <ul>
              <Link href={"/nutrition"}>
                <a href="">Nutrition Data base</a>
              </Link>
            </ul>
            <ul onClick={() => setModal(!modal)}>Login </ul>
          </li>
        </div>
        <div className="third-item">
          <button className="btn-primary">Doctor Login</button>
        </div>
      </div>
      {/* {modal && <Login />} */}
    </Wrappers>
  );
};

export default Navbar;
