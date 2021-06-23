// eng follow
import React from "react";
import "../style.css";

function Follow() {
  return (
    <section className="follow">
      <p>Follow Microsoft</p>

      <div>
        <a href="#">
          <img
            src="https://i.ibb.co/LrVMXNR/social-fb.png"
            alt="Facebook img"
          />
        </a>

        <a href="#">
          <img
            src="https://i.ibb.co/vJvbLwm/social-twitter.png"
            alt="Twitter"
          />
        </a>

        <a href="#">
          <img
            src="https://i.ibb.co/b30HMhR/social-linkedin.png"
            alt="Linkedin"
          />
        </a>
      </div>
    </section>
  );
}

export default Follow;
