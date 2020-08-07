// Eng banner
import React from "react";
import "../style.css";
import { FaAngleRight } from "react-icons/fa";

function Banner() {
  return (
    <header className="banner eng">
      <div>
        <h2>Up to $600 of Surface Laptop 3</h2>
        <p>
          Power through assingments and reflect your style with long-lasting
          battery life in a stunning design
        </p>
        <a href="#" className="btn">
          Shop now <FaAngleRight className="angle-right" />
        </a>
      </div>
    </header>
  );
}

export default Banner;
