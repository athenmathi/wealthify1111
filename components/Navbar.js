import Image from "next/image";
import Link from "next/link";
import {} from "../styles/Navbar.module.css";
import WealthifyLogo from "../assets/image/WealthifyLogo.png";
import Wrappers from "../assets/wrappers/Navbar.js";
import Home from "./Home";
import { useState } from "react";
import Login from "./Login";
import Menu from "../components/Menu";
const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Wrappers>
      <div className="navbar-container">
        <div className="first-item">
          <Image
            className="logo"
            src={WealthifyLogo}
            width="200px"
            height="200px"
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
                <a href="">Nutrition Database</a>
              </Link>
            </ul>
            <ul onClick={() => setModal(!modal)}>
              <Link href={""}>
                <a href=""> Login</a>
              </Link>
            </ul>
          </li>
        </div>
        <div className="third-item" onClick={() => setMenu(!menu)}>
          <button className="btn-primary">Doctor Login</button>
        </div>
      </div>
      {modal && <Login setModal={setModal} />}
      {menu && <Menu setMenu={setMenu} />}
    </Wrappers>
  );
};

export default Navbar;
