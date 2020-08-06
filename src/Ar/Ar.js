import React from "react";
import "../style.css";
import "./ar.css";

import Nav from "./Nav";
import Showcase from "./Showcase";
import HomeCard1 from "./HomeCard1";
import Xbox from "./Xbox";
import HomeCard2 from "./HomeCard2";
import Carbon from "./Carbon";
import Follow from "./Follow";
import Links from "./Links";
import Footer from "./Footer";

function Ar() {
  return (
    <div dir="rtl" className="body">
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

export default Ar;
