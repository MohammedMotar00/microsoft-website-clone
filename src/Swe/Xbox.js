import React from "react";
import "../style.css";
import { FaAngleRight } from "react-icons/fa";

function Xbox() {
  return (
    <section className="xbox">
      <div className="content">
        <h2>Xbox Game Pass Ultimate</h2>
        <p>
          Xbox Live Gold and over 100 high-quality console and PC games. Play
          together with friends and discover your next favorite game.
        </p>
        <a href="#" className="btn">
          Join now <FaAngleRight className="angle-right" />
        </a>
      </div>
    </section>
  );
}

export default Xbox;
