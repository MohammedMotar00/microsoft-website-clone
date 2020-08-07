// ar banner
import React from "react";
import "../style.css";
import { FaAngleLeft } from "react-icons/fa";

function Banner() {
  return (
    <header className="banner ar">
      <div>
        <h2>ها هو برنامج Microsoft 365</h2>
        <p>اكتشف ما يمكنك القيام به كل يوم باستخدام Microsoft 365</p>
        <a href="#" className="btn">
          لعدد يصل إلى 6 أشخاص <FaAngleLeft className="angle-left" />
        </a>
        <a href="#">
          لشخص واحد
          <FaAngleLeft className="angle-left" />
        </a>
      </div>
    </header>
  );
}

export default Banner;
