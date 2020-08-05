import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { FaGlobeEurope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="language-container">
          <ul className="language-nav show">
            <h1 className="close-language">X</h1>
            <h2>Choose language</h2>
            <li>
              <Link to="/eng">United States - English</Link>
            </li>
            <li>
              <Link to="/swe">Sverige - Svenska</Link>
            </li>
            <li>
              <Link to="/ar">العراق - العربية</Link>
            </li>
          </ul>
        </div>
        <div>
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