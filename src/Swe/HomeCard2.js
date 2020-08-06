// Swe homeCard2
import React from "react";
import "../style.css";
import { FaAngleRight } from "react-icons/fa";

function HomeCard2() {
  return (
    <section class="home-cards">
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4ualc?ver=b589&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="bild1"
        />
        <h3>Liten enhet, stor effekt</h3>
        <p>Förändra hur du arbetar med nya Surface Go 2 för företag.</p>
        <a href="#">
          Köp nu <FaAngleRight className="angle-right" />
        </a>
      </div>
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rvYV?ver=b9c8&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="bild2"
        />
        <h3>Microsoft 365 för företag</h3>
        <p>
          Med Microsoft 365 för företag får du kraftfulla funktioner som kan
          hjälpa dig att driva och utveckla din verksamhet.
        </p>
        <a href="#">
          Köp nu <FaAngleRight className="angle-right" />
        </a>
      </div>
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzs9?ver=5f61&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=329&y=155&aim=true"
          alt="bild3"
        />
        <h3>Skapa ett onlineklassrum</h3>
        <p>
          Få experttips på hur du använder Microsoft Teams utan extra kostnad
          för lärare och elever för att skapa uppgifter, samarbeta virtuellt och
          mycket annat.
        </p>
        <a href="#">
          Läs mer <FaAngleRight className="angle-right" />
        </a>
      </div>
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4vkSt?ver=7fe0&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="bild4"
        />
        <h3>Lösningar för dagens utmaningar</h3>
        <p>
          Läs mer om hur du håller verksamheten igång med prisvärda och
          praktiska lösningar.
        </p>
        <a href="#">
          Läs mer <FaAngleRight className="angle-right" />
        </a>
      </div>
    </section>
  );
}

export default HomeCard2;
