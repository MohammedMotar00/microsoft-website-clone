// ar footer
import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { FaGlobeEurope } from "react-icons/fa";

function Footer() {
  const [open, setOpen] = useState(false);

  const handleLanguageMenu = () => {
    setOpen(!open);
  };

  const closeLanguageMenu = () => {
    setOpen(false);
  };

  return (
    <footer>
      <div className="language-container">
        <ul className={`language-ul ${open && "show"}`}>
          <h1
            onClick={closeLanguageMenu}
            className={`close-language ${open && "show"}`}
          >
            X
          </h1>
          <div className={`text-contain ${open && "show"}`}>
            <h2 className={`${open && "show"}`}>Choose language</h2>
            <li className={`${open && "show"}`}>
              <Link to="/">United States - English</Link>
            </li>
            <li className={`${open && "show"}`}>
              <Link to="/swe">Sverige - Svenska</Link>
            </li>
            <li className={`${open && "show"}`}>
              <Link to="/ar">العراق - العربية</Link>
            </li>
          </div>
        </ul>
      </div>

      <h3>This is Microsoft Clone app and I will use it for my portfolio</h3>

      <div className="footer-inner">
        <div onClick={handleLanguageMenu} className="container-icon">
          <FaGlobeEurope className="globe-icon ar" />
          <span>العربية (العراق)</span>
        </div>
        <ul>
          <li>
            <a href="#">الاتصال بشركة Microsoft</a>
          </li>
          <li>
            <a href="#">بيان الخصوصية</a>
          </li>
          <li>
            <a href="#">بنود الاستخدام</a>
          </li>
          <li>
            <a href="#">العلامات التجارية</a>
          </li>
          <li>
            <a href="#">حول إعلاناتنا</a>
          </li>
          <li>
            <p href="#">&copy; Microsoft 2020</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
