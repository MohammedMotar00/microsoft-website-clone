import React from "react";
import "../style.css";
import "./swe.css";

import Nav from "./Nav";
import Banner from "./Banner";
import HomeCard1 from "./HomeCard1";
import Xbox from "./Xbox";
import HomeCard2 from "./HomeCard2";
import Follow from "./Follow";
import Links from "./Links";
import Footer from "./Footer";

function Swe() {
  return (
    <div className="body">
      <div className="container">
        {/* Nav */}
        <Nav />

        {/* banner */}
        <Banner />

        {/* Home card 1 */}
        <HomeCard1 />

        {/* Xbox */}
        <Xbox />

        {/* Home card 2 */}
        <HomeCard2 />

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

export default Swe;
