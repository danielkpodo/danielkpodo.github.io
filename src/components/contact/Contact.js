import React from "react";
import { MdPersonPinCircle } from "react-icons/md";
import Social from "../social/Social";

const Contact = () => {
  return (
    <section className="contact-me scrollspy" id="contact-me">
      <div className="section-header center-align">
        <h2>Contact Me</h2>
        <hr className="rule" />
        <p>Leave me a message on anything dev related or an opportunity</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col m8 reach-out">
            <h3>Reach Out to Me</h3>
            <p>
              Discuss a project, job opportunity,collaboration or just wanna say
              hi
            </p>
            <h4>
              Fullstack Engineer | Data Analyst | MERN Developer | Python
              Developer & Prolific Writer
            </h4>
            <div className="location">
              <p>
                <MdPersonPinCircle className="loc" />
                Tema, Ghana
              </p>
              <p>Open for Opportunities: yes</p>
              <Social />
            </div>
          </div>
          <div className="col m4">Other things here</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
