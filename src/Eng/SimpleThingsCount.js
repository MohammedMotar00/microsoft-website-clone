// Eng carbon
import React from "react";
import "../style.css";
import "./eng.css";
import { FaAngleRight } from "react-icons/fa";

function SimpleThingsCount() {
  return (
    <section className="simple-things dark">
      <div className="content">
        <h2>Simple Things Count</h2>
        <p>
          Get real-world tips for accessibility and inclusion from seven
          prominent advocates for perople with disabilities
        </p>
        <a href="#" className="btn">
          Learn more <FaAngleRight className="angle-right" />
        </a>
      </div>
    </section>
  );
}

export default SimpleThingsCount;
