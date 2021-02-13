import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
         About this page: han's first react app
      </span>
      <span>− 20210213 </span>
    </div>
  );
}

export default About;