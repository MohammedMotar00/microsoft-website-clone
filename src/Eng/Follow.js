// eng follow
import React from "react";
import "../style.css";

function Follow() {
  return (
    <section className="follow">
      <p>Follow Microsoft</p>

      <div>
        <a href="https://facebook.com">
          <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook img" />
        </a>

        <a href="https://twitter.com">
          <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
        </a>

        <a href="https://linkedin.com">
          <img
            src="https://i.ibb.co/b30HMhR/social-linkedin.png"
            alt="Linkedin"
            />
        </a>
        <a href="https://youtube.com">
          <img
            src="https://www.microsoft.com/onerfstatics/marketingsites-neu-prod/_h/c79952ca/coreui.statics/images/social/youtube.png"
            alt="Youtube"
            />
        </a>
        <a href="https://instagram.com">
          <img
            src="//www.microsoft.com/onerfstatics/marketingsites-neu-prod/_h/439c9edb/coreui.statics/images/social/instagram.png"
            alt="Linkedin"
            />
        </a>
      </div>
    </section>
  );
}

export default Follow;
