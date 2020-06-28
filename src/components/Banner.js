import React from "react";
import narh from "./assets/images/narh.svg";
import Social from "./social/Social";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="row">
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
            building web applications with JavaScript / Reactjs / Nodejs / Flask
            and a knack for complex data analysis with Python
          </p>
          <Social />
          <div className="actions">
            <a
              href="#!"
              className="waves-effect waves-light btn-small contact "
            >
              Contact me
            </a>
            <a href="#!" className="waves-effect waves-light btn-small resume">
              View resume
            </a>
          </div>
        </div>
        <div className="col s12 l5">
          <img
            src={narh}
            alt="Daniel Narh sitting as a programmer"
            className="programmer-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
