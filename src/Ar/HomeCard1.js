// ar homeCard1
import React from "react";
import "../style.css";
import { FaAngleLeft } from "react-icons/fa";

function HomeCard1() {
  return (
    <section class="home-cards">
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4CFyx?ver=25c5&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=839&y=615&aim=true"
          alt="img 1"
        />
        <h3>Microsoft Teams</h3>
        <p>قم بالدردشة والاجتماع والاتصال والتعاون</p>
        <a href="#">
          ‬‏‫معرفة المزيد <FaAngleLeft className="angle-left" />
        </a>
      </div>

      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="img 2"
        />
        <h3>نقدم Microsoft Edge الجديد</h3>
        <p>أداء على مستوى عالمي مع خصوصية وإنتاجية وقيمة أكبر الاستعراض.</p>
        <div>
          <a href="#">
            تنزيل الآن <FaAngleLeft className="angle-left" />
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW6ivo?ver=2a13&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="img 3"
        />
        <h3>OneNote</h3>
        <p>نظّم ملاحظاتك وحياتك.</p>
        <a href="#">
          معرفة المزيد <FaAngleLeft className="angle-left" />
        </a>
      </div>

      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37Bcs?ver=e981&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="img 4"
        />
        <h3>Windows 10 Update</h3>
        <p>
          نقدم لك ميزات جديدة لمساعدتك في متابعة شغفك، والاتصال بشكل أفضل،
          واستعادة بعض الوقت.
        </p>
        <a href="#">
          معرفة المزيد <FaAngleLeft className="angle-left" />
        </a>
      </div>
    </section>
  );
}

export default HomeCard1;
