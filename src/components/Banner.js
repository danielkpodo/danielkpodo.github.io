import React from "react";
import narh from "./assets/images/narh.svg";
import Social from "./social/Social";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="row">
        <div className="col s12 l6">
          <h1>
            Hello, I'm Narh{" "}
            <span role="img" aria-label="emoji hand">
              🖐
            </span>
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
        <div className="col s12 l6">
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
