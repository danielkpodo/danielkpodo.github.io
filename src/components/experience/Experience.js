import React, { useState } from "react";
import { Training } from "../resources/Training";
import Timeline from "./Timeline";
/* eslint-disable no-unused-vars */
const Experience = () => {
  const [timeline, setTimeline] = useState([...Training]);

  return (
    <section className="experience section scrollspy" id="experience">
      <div className="section-header center-align">
        <h2> Education &amp; Work </h2>
        <hr className="rule" />
        <p>The timeline illustrates my education &amp; developer training</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            {timeline.map((experience, index) => (
              <Timeline experiences={experience} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
