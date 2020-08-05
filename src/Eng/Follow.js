import React from "react";
import "../style.css";

function Follow() {
  return (
    <section className="follow">
      <p>Follow Microsoft</p>
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
    </section>
  );
}

export default Follow;
