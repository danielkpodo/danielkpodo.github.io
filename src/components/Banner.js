import React from "react";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="row">
        <div className="col l6">
          <h1>
            Hello, I'm Narh{" "}
            <span role="img" aria-label="emoji hand">
              🖐
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatem facere vitae temporibus excepturi veritatis! At
            architecto, provident voluptates veniam aspernatur obcaecati. Vel,
            illo maxime, sapiente dolorum quam magni ipsa assumenda eos sunt
            voluptates non eaque quos, architecto quisquam dolorem quaerat iure
            quibusdam officiis earum! Saepe suscipit ut illo consectetur.
          </p>
        </div>
        <div className="col l6">Image here</div>
      </div>
    </div>
  );
};

export default Banner;
