import React from "react";
import narh from "./assets/images/narh.svg";
import Social from "./social/Social";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div className="container banner scrollspy" id="home">
      <div className="row">
        <Fade left>
          <div className="col s12 l7">
            <h1>
              <span style={{ color: "#f25f4c" }}>Hi</span>, I'm{" "}
              <Typed
                strings={[
                  "Narh",
                  "Fullstack Dev",
                  "Js Dev",
                  "React Dev",
                  "<em>MERN Dev</em>",
                  "Data Analyst",
                  "Python Dev"
                ]}
                typeSpeed={130}
                backSpeed={10}
                loop
              />
            </h1>
            <p>
              A passionate Software Developer & Data Scientist having experience
              building web applications with JavaScript / Reactjs / Nodejs /
              Flask and a knack for complex data analysis with Python
            </p>
            <Social />
            <div className="actions">
              <a
                href="#!"
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
