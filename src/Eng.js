import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Eng() {
  return (
    <div className="body">
      <div class="menu-btn">
        <FaBars className="bars-menu" />
      </div>

      <div className="container">
        {/* Nav */}
        <nav className="main-nav">
          <img
            src="https://i.ibb.co/wwLhz98/logo.png"
            alt="Logo"
            className="logo"
          />

          <ul className="main-menu">
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

        {/* Showcase */}
        <header className="showcase">
          <div>
            <h2>Up to $600 of Surface Laptop 3</h2>
            <p>
              Power through assingments and reflect your style with long-lasting
              battery life in a stunning design
            </p>
            <a href="#" className="btn">
              Shop now <FaAngleRight className="angle-right" />
            </a>
          </div>
        </header>

        {/* Home card 1 */}
        <section class="home-cards">
          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4CFyx?ver=25c5&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=839&y=615&aim=true"
              alt="img 1"
            />
            <h3>Microsoft Teams</h3>
            <p>Chat, meet, call, and collaborate</p>
            <a href="#">
              Learn More <FaAngleRight className="angle-right" />
            </a>
          </div>

          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tj4A?ver=592d&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
              alt="img 2"
            />
            <h3>This is your 365</h3>
            <p>Discover what's possible every day with Microsoft 365.</p>
            <div>
              <a href="#">
                For up to 6 people <FaAngleRight className="angle-right" />
              </a>
              <a href="#">
                For 1 person <FaAngleRight className="angle-right" />
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4ztzT?ver=af61&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
              alt="img 3"
            />
            <h3>Up top $200 off Surface Book 3</h3>
            <p>
              Let inspiration strike with the fastest, most powerful Surface
              laptop yet.
            </p>
            <a href="#">
              Shop now <FaAngleRight className="angle-right" />
            </a>
          </div>

          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4CIak?ver=f78a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
              alt="img 4"
            />
            <h3>Make it you with Windows x HP</h3>
            <p>
              See where your passion takes you with technology designed to work
              the way you do.
            </p>
            <a href="#">
              Learn More <FaAngleRight className="angle-right" />
            </a>
          </div>
        </section>

        {/* Xbox */}
        <section className="xbox">
          <div className="content">
            <h2>Xbox Game Pass Ultimate</h2>
            <p>
              Xbox Live Gold and over 100 high-quality console and PC games.
              Play together with friends and discover your next favorite game.
            </p>
            <a href="#" className="btn">
              Join now <FaAngleRight className="angle-right" />
            </a>
          </div>
        </section>

        {/* Home card 2 */}
        <section class="home-cards">
          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Wknw?ver=ba19&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
              alt=""
            />
            <h3>Designed for the future of work</h3>
            <p>
              Shop the latest Surface for Business collection at Microsoft
              Store.
            </p>
            <a href="#">
              Shop Now <FaAngleRight className="angle-right" />
            </a>
          </div>
          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4CaqN?ver=9cb3&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
              alt=""
            />
            <h3>Return with confidence</h3>
            <p>
              Find out how a pre-built, easy-to-use Microsoft Power Platform
              solution can help workers return to a safer workplace.
            </p>
            <a href="#">
              Learn more <FaAngleRight className="angle-right" />
            </a>
          </div>
          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rvYV?ver=b9c8&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
              alt=""
            />
            <h3>Microsoft 365 for business</h3>
            <p>
              Powerful services that can help you run and grow your business.
            </p>
            <a href="#">
              Shop now <FaAngleRight className="angle-right" />
            </a>
          </div>
          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Vc2M?ver=4043&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
              alt=""
            />
            <h3>HoloLens 2</h3>
            <p>Mixed reality is ready for business.</p>
            <a href="#">
              Shop now <FaAngleRight className="angle-right" />
            </a>
          </div>
        </section>

        {/* Carbon */}
        <section className="carbon dark">
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

        {/* Follow */}
        <section className="follow">
          <p>Follow Microsoft</p>
          <a href="https://facebook.com">
            <img
              src="https://i.ibb.co/LrVMXNR/social-fb.png"
              alt="Facebook img"
            />
          </a>

          <a href="https://twitter.com">
            <img
              src="https://i.ibb.co/vJvbLwm/social-twitter.png"
              alt="Twitter"
            />
          </a>

          <a href="https://linkedin.com">
            <img
              src="https://i.ibb.co/b30HMhR/social-linkedin.png"
              alt="Linkedin"
            />
          </a>
        </section>
      </div>

      {/* Links */}
      <section className="links">
        <div className="links-inner">
          <ul>
            <li>
              <h3>What's New</h3>
            </li>
            <li>
              <a href="#">Surface Pro 2</a>
            </li>
            <li>
              <a href="#">Surface Book 3</a>
            </li>
            <li>
              <a href="#">Microsoft 365</a>
            </li>
            <li>
              <a href="#">Surface Pro X</a>
            </li>
            <li>
              <a href="#">Windows 10 apps</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Microsoft Store</h3>
            </li>
            <li>
              <a href="#">Account Profile</a>
            </li>
            <li>
              <a href="#">Download Center</a>
            </li>
            <li>
              <a href="#">Microsoft Store support</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Order tracking</a>
            </li>
            <li>
              <a href="#">Store locations</a>
            </li>
            <li>
              <a href="#">Vurtual workshops and training</a>
            </li>
            <li>
              <a href="#">Microsoft Store Promise</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Education</h3>
            </li>
            <li>
              <a href="#">Microsfot in education</a>
            </li>
            <li>
              <a href="#">Office for students</a>
            </li>
            <li>
              <a href="#">Office 365 for schools</a>
            </li>
            <li>
              <a href="#">Deals for students & parents</a>
            </li>
            <li>
              <a href="#">Microsfot Azure in education</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Enterprise</h3>
            </li>
            <li>
              <a href="#">Azure</a>
            </li>
            <li>
              <a href="#">AppSource</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Government</a>
            </li>
            <li>
              <a href="#">Healthcare</a>
            </li>
            <li>
              <a href="#">Manufacturing</a>
            </li>
            <li>
              <a href="#">Financial services</a>
            </li>
            <li>
              <a href="#">Retail</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Developer</h3>
            </li>
            <li>
              <a href="#">Microsoft Visual Studio</a>
            </li>
            <li>
              <a href="#">Windows Dev Center</a>
            </li>
            <li>
              <a href="#">Developer Network</a>
            </li>
            <li>
              <a href="#">TechNet</a>
            </li>
            <li>
              <a href="#">Microsoft developer program</a>
            </li>
            <li>
              <a href="#">Channel 9</a>
            </li>
            <li>
              <a href="#">Office Dev Center</a>
            </li>
            <li>
              <a href="#">Microsoft Garage</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About Microsoft</a>
            </li>
            <li>
              <a href="#">Company news</a>
            </li>
            <li>
              <a href="#">Privacy at Microsoft</a>
            </li>
            <li>
              <a href="#">Inverstors</a>
            </li>
            <li>
              <a href="#">Diversity and inclusion</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default Eng;
