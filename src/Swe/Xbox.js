// Swe xbox
import React from "react";
import "../style.css";
import { FaAngleRight } from "react-icons/fa";

function Xbox() {
  return (
    <section className="xbox swe">
      <div className="content">
        <h2>Xbox One S</h2>
        <p>
          Bästa valet för spel och underhållning, med inbyggd 4K Ultra HD
          Blu-ray och 4K-videostreaming
        </p>
        <a href="#" className="btn">
          Köp nu <FaAngleRight className="angle-right" />
        </a>
      </div>
    </section>
  );
}

export default Xbox;
