import React, { useContext } from "react";
import { MdPersonPinCircle } from "react-icons/md";
import Social from "../social/Social";
import profile_img from "../assets/images/danny.jpg";
import HeadShake from "react-reveal/HeadShake";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import GithubContext from "../../context/GithubContext";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Contact = () => {
  const githubUser = useContext(GithubContext);
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
                  {githubUser.user.location
                    ? githubUser.user.location
                    : "Not Available"}
                </p>
                <p>
                  Open for Opportunities:{" "}
                  {githubUser.user.hireable === true ? (
                    <FaCheck style={{ color: "green" }} />
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </p>
                <p>
                  Github Public Repos:
                  {githubUser.user.public_repos ? (
                    <strong>{githubUser.user.public_repos}</strong>
                  ) : (
                    "Not Available"
                  )}
                </p>
                <p>
                  Current Company:
                  {githubUser.user.company ? (
                    <a
                      href="https://webbermill.com/"
                      target="_blank"
                      style={{ color: "#F25F4C", textDecoration: "underline" }}
                    >
                      {githubUser.user.company}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </p>
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
