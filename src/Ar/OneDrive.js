// ar xbox
import React from "react";
import "../style.css";
import { FaAngleLeft } from "react-icons/fa";

function OneDrive() {
  return (
    <section dir="ltr" className="xbox ar">
      <div className="content">
        <h2>Microsoft OneDrive</h2>
        <p>
          احفظ ملفاتك وصورك على OneDrive وتمتع بالوصول إليها من أي جهاز، في أي
          مكان
        </p>
        <a href="#" className="btn ar">
          <FaAngleLeft className="angle-left" /> معرفة المزيد
        </a>
      </div>
    </section>
  );
}

export default OneDrive;
