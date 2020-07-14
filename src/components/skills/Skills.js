import React from "react";
import Technologies from "./Technologies";

const Skills = () => {
  return (
    <section className="skills scrollspy" id="skills">
      <div className="section-header center-align">
        <h2>My Skills </h2>
        <hr className="rule" />
        <p>
          I am proficient with the following languages, tools and technologies
        </p>
      </div>
      <Technologies />
    </section>
  );
};

export default Skills;
