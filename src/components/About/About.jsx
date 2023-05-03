import React from "react";
import Photo from "../../img/ilikhachev42.jpg";
import HTMLSVG from "../../img/html5.svg";
import CSSVG from "../../img/css3-alt.svg";
import JSVG from "../../img/js.svg";
import ReactSVG from "../../img/react.svg";
import BSVG from "../../img/bootstrap.svg";
import SASSVG from "../../img/sass.svg";

function About() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <main className="photo-container">
            <div className="big-spacer"></div>
            <h1 className="text-center big-heading text-about">About me</h1>
            <div className="spacer"></div>
            <img src={Photo} className="awesome" />
            <div className="awesome-icons">
              <img src={HTMLSVG} className="skill-icon html-icon" />
              <img src={CSSVG} className="skill-icon css-icon" />
              <img src={JSVG} className="skill-icon js-icon" />
              <img src={ReactSVG} className="skill-icon react-icon" />
              <img src={BSVG} className="skill-icon bs-icon" />
              <img src={SASSVG} className="skill-icon sass-icon" />
            </div>
            <div className="spacer"></div>
            <p>
              With a year of front-end development experience, I am dedicated to creating user-friendly and engaging web experiences.
            </p>
            <p>
              I have a strong passion for developing the perfect application logic and constantly seek to learn the most efficient ways of utilizing JavaScript and React. I am skilled in developing fully functional front-end sections and believe that I can maximize my potential as part of a team.
            </p>
            <p>
              Additionally, I am interested in web game development and am eager to take on projects using libraries such as PixiJS or Three.js.
            </p>
            <div className="big-spacer"></div>
        </main>
      </div>
    </div>
  )
}

export default About;