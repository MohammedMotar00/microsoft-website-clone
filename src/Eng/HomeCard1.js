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
          Let inspiration strike with the fastest, most powerful Surface laptop
          yet.
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
          See where your passion takes you with technology designed to work the
          way you do.
        </p>
        <a href="#">
          Learn More <FaAngleRight className="angle-right" />
        </a>
      </div>
    </section>
  );
}

export default HomeCard1;
