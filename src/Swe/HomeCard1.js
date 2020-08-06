// Swe homeCard1
import React from "react";
import "../style.css";
import { FaAngleRight } from "react-icons/fa";

function HomeCard1() {
  return (
    <section class="home-cards">
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4CFyx?ver=25c5&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=839&y=615&aim=true"
          alt="img 1"
        />
        <h3>Microsoft Teams</h3>
        <p>Chatta, håll möten, ring och samarbeta</p>
        <a href="#">
          Läs mer <FaAngleRight className="angle-right" />
        </a>
      </div>

      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tj4A?ver=592d&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="img 2"
        />
        <h3>Detta är ditt 365</h3>
        <p>Upptäck allt du kan göra med Microsoft 365.</p>
        <div>
          <a href="#">
            För upp till 6 personer <FaAngleRight className="angle-right" />
          </a>
          <a href="#">
            För 1 person <FaAngleRight className="angle-right" />
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4dUlg?ver=c684&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="img 3"
        />
        <h3>Xbox Game Pass Ultimate</h3>
        <p>
          Xbox Live Gold och fler än 100 toppspel för konsoler och datorer.
          Spela med kompisar och upptäck ditt nästa favoritspel.
        </p>
        <a href="#">
          Registrera dig nu <FaAngleRight className="angle-right" />
        </a>
      </div>

      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4zon6?ver=59fb&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="img 4"
        />
        <h3>Spara upp till 6.149 kr på Surface Pro 7</h3>
        <p>
          Surface Pro 7 är en ständigt anpassningsbar partner, nu med snabbare
          processor och fler anslutningar, plus batteritid för hela dagen
        </p>
        <div>
          <a href="#">
            Surface Pro 7 <FaAngleRight className="angle-right" />
          </a>
          <a href="#">
            Surface Pro 7 Startpaket <FaAngleRight className="angle-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeCard1;
