import React from "react";
import narh from "./narh.svg";

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
