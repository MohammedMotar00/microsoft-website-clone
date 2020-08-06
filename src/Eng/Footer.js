// Eng footer
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
      <div className="footer-inner">
        {/* <div className="language-container">
          <ul className={`language-ul ${open && "show"}`}>
            <h1
              onClick={closeLanguageMenu}
              className={`close-language ${open && "show"}`}
            >
              X
            </h1>
            <div>
              <h2 className={`${open && "show"}`}>Choose language</h2>
              <li className={`${open && "show"}`}>
                <Link to="/eng">United States - English</Link>
              </li>
              <li className={`${open && "show"}`}>
                <Link to="/swe">Sverige - Svenska</Link>
              </li>
              <li className={`${open && "show"}`}>
                <Link to="/ar">العراق - العربية</Link>
              </li>
            </div>
          </ul>
        </div> */}
        <div onClick={handleLanguageMenu} style={{ cursor: "pointer" }}>
          <FaGlobeEurope className="globe-icon" />
          English (United States)
        </div>
        <ul>
          <li>
            <a href="#">Sitemap</a>
          </li>
          <li>
            <a href="#">Contact Microsoft</a>
          </li>
          <li>
            <a href="#">Privacy & cookies</a>
          </li>
          <li>
            <a href="#">Terms of use</a>
          </li>
          <li>
            <a href="#">Trademarks</a>
          </li>
          <li>
            <a href="#">Safety & eco</a>
          </li>
          <li>
            <a href="#">About our ads</a>
          </li>
          <li>
            <a href="#">&copy; Microsoft 2020</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
