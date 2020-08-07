// ar homeCard2
import React from "react";
import "../style.css";
import { FaAngleLeft } from "react-icons/fa";

function HomeCard2() {
  return (
    <section class="home-cards ar">
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rvYV?ver=b9c8&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />
        <h3>Microsoft 365 for business</h3>
        <p>
          يوفر Microsoft 365 للأعمال خدمات قوية يمكن أن تساعدك في إدارة أعمالك
          وتنميتها.
        </p>
        <a href="#">
          التسوق الآن <FaAngleLeft className="angle-left" />
        </a>
      </div>
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />
        <h3>Windows 10 Enterprise</h3>
        <p>
          نزِّل النسخة التجريبية المجانية لمدة 90 يومًا المخصصة لمحترفي تقنية
          المعلومات.
        </p>
        <a href="#">
          تنزيل الآن <FaAngleLeft className="angle-left" />
        </a>
      </div>
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />
        <h3>الحصول على Visual Studio 2019</h3>
        <p>
          قم بتنزيل Visual Studio 2019، بيئة التطوير المتكامل المنتجة والحديثة
          والمبتكرة.
        </p>
        <a href="#">
          تنزيل الآن <FaAngleLeft className="angle-left" />
        </a>
      </div>
      <div>
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4nwBI?ver=b8c6&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt=""
        />
        <h3>Microsoft Edge الجديد</h3>
        <p>الأداء، والتوافق، والأمان. المستعرض الخاص بالأعمال.</p>
        <a href="#">
          تنزيل الآن <FaAngleLeft className="angle-left" />
        </a>
      </div>
    </section>
  );
}

export default HomeCard2;
