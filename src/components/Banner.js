import React, { useContext } from "react";
import narh from "./assets/images/narh.svg";
import Social from "./social/Social";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import GithubContext from "../context/GithubContext";

const Banner = () => {
  const githubUser = useContext(GithubContext);
  console.log("User in Banner", githubUser.user);
  const userSpinkit =
    githubUser.userLoading === true ? (
      <p>Loading github profile...</p>
    ) : (
      <p>{githubUser.user.bio}</p>
    );
  return (
    <div className="container banner scrollspy" id="home">
      <div className="row">
        <Fade left>
          <div className="col s12 l7">
            <h1>
              <span style={{ color: "#f25f4c" }}>Hi</span>, I'm{" "}
              <Typed
                strings={["Narh", "Js Lover", "MERN Dev", "a Pythonista"]}
                typeSpeed={130}
                backSpeed={10}
                loop
              />
            </h1>
            {userSpinkit}
            <Social />
            <div className="actions">
              <a
                href="#contact-me"
                className="waves-effect waves-light btn-small contact "
              >
                Contact me
              </a>
              <a
                href="#!"
                className="waves-effect waves-light btn-small resume"
              >
                View resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col s12 l5 hide-on-med-and-down">
            <img
              src={narh}
              alt="Daniel Narh sitting as a programmer"
              className="programmer-img"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
