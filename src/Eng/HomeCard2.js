// Eng homeCard2
import React from "react";
import "../style.css";
import { FaAngleRight } from "react-icons/fa";

function HomeCard2() {
  return (
    <section class="home-cards">
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Wknw?ver=ba19&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />
        <h3>Designed for the future of work</h3>
        <p>
          Shop the latest Surface for Business collection at Microsoft Store.
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
        <p>Powerful services that can help you run and grow your business.</p>
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
  );
}

export default HomeCard2;
