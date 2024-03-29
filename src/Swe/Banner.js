// Swe banner
import React from "react";
import "../style.css";
import { FaAngleRight } from "react-icons/fa";

function Banner() {
  return (
    <header className="banner swe">
      <div>
        <h2>Kraftfull prestanda</h2>
        <p>
          Nya Surface Book 3 är den kraftfullaste Surface-datorn hittills med
          mångsidigheten hos en bärbar dator, surfplatta och bärbar studio
        </p>
        <a href="#" className="btn">
          Köp nu <FaAngleRight className="angle-right" />
        </a>
      </div>
    </header>
  );
}

export default Banner;
