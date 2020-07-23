import React from "react";
import Technologies from "./Technologies";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <section className="skills section scrollspy" id="skills">
      <div className="section-header center-align">
        <HeadShake>
          <h2>My Skills </h2>
        </HeadShake>
        <hr className="rule" />
        <p>
          I am proficient with the following languages, tools and technologies
        </p>
      </div>
      <Fade right>
        <Technologies />
      </Fade>
    </section>
  );
};

export default Skills;
