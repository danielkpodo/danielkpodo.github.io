import React from "react";
import { MdPersonPinCircle } from "react-icons/md";
import Social from "../social/Social";
import profile_img from "../assets/images/danny.jpg";
import HeadShake from "react-reveal/HeadShake";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <section className="contact-me section scrollspy" id="contact-me">
      <div className="section-header center-align">
        <HeadShake>
          <h2>Contact Me</h2>
        </HeadShake>
        <hr className="rule" />
        <p>Leave me a message on anything dev related or an opportunity</p>
      </div>
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col s12 l8 reach-out">
              <h3>Reach Out to Me</h3>
              <p>
                Discuss a project, job opportunity,collaboration or just wanna
                say hi
              </p>
              <h4>
                Fullstack Engineer | Data Analyst | MERN Developer | Python
                Developer | Researcher
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
          </Fade>
          <div className="col s12 l4">
            <Pulse>
              <div className="profile">
                <img
                  src={profile_img}
                  alt="daniel narh"
                  className="responsive-img z-depth-5"
                />
              </div>
            </Pulse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
