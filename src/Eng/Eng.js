import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "./eng.css";

// import { FaSearch } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Nav from "./Nav";
import Showcase from "./Showcase";
import HomeCard1 from "./HomeCard1";
import Xbox from "./Xbox";
import HomeCard2 from "./HomeCard2";
import Carbon from "./Carbon";
import Follow from "./Follow";
import Links from "./Links";
import Footer from "./Footer";

function Eng() {
  return (
    <div className="body">
      {/* <div class="menu-btn">
        <FaBars className="bars-menu" />
      </div> */}

      <div className="container">
        {/* Nav */}
        <Nav />

        {/* Showcase */}
        <Showcase />

        {/* Home card 1 */}
        <HomeCard1 />

        {/* Xbox */}
        <Xbox />

        {/* Home card 2 */}
        <HomeCard2 />

        {/* Carbon */}
        <Carbon />

        {/* Follow */}
        <Follow />
      </div>

      {/* Links */}
      <Links />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Eng;
