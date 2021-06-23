// ar nav
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "../style.css";

function Nav() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="main-nav">
      <div onClick={handleToggle} className="menu-btn">
        <FaBars className="bars-menu" />
      </div>



      <div className="logo-container">
        <img
          src="https://i.ibb.co/wwLhz98/logo.png"
          alt="Logo"
          className="logo"
        />

        <h3>Clone app</h3>
      </div>

      <ul className={`main-menu ${toggle && "show"} ar`}>
        <li>
          <a href="#">Microsoft 365</a>
        </li>
        <li>
          <a href="#">Office</a>
        </li>
        <li>
          <a href="#">Windows</a>
        </li>
        <li>
          <a href="#">Xbox</a>
        </li>
        <li>
          <a href="#">الدعم</a>
        </li>
      </ul>

      <ul className="right-menu ar">
        <li>
          <a href="#">
            <FaSearch />
          </a>
        </li>
        <li>
          <a href="#">
            <FaShoppingCart />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
