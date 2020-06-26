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
            Make an api call to github to fetch about Rerum voluptatem facere
            vitae temporibus excepturi veritatis! At architecto, provident
            voluptates veniam aspernatur obcaecati. Vel, illo maxime, sapiente
          </p>
          <Social />
          <div className="actions">
            <a className="waves-effect waves-light btn-small">Button</a>
            <a className="waves-effect waves-light btn-small">Button</a>
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
