import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "../style.css";

function Nav() {
  return (
    // <>
    // <div class="menu-btn">
    //   <FaBars className="bars-menu" />
    // </div>

    <nav className="main-nav">
      <div class="menu-btn">
        <FaBars className="bars-menu" />
      </div>

      <img
        src="https://i.ibb.co/wwLhz98/logo.png"
        alt="Logo"
        className="logo"
      />

      <ul className="main-menu show">
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
          <a href="#">Surface</a>
        </li>
        <li>
          <a href="#">Xbox</a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>

      <ul className="right-menu">
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
    // </>
  );
}

export default Nav;
