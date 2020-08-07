import React from "react";
import "../style.css";
import "./ar.css";

import Nav from "./Nav";
import Banner from "./Banner";
import HomeCard1 from "./HomeCard1";
import OneDrive from "./OneDrive";
import HomeCard2 from "./HomeCard2";
import Links from "./Links";
import Footer from "./Footer";

function Ar() {
  return (
    <div dir="rtl" className="body">
      <div className="container">
        {/* Nav */}
        <Nav />

        {/* banner */}
        <Banner />

        {/* Home card 1 */}
        <HomeCard1 />

        {/* Xbox */}
        <OneDrive />

        {/* Home card 2 */}
        <HomeCard2 />
      </div>

      {/* Links */}
      <Links />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Ar;
