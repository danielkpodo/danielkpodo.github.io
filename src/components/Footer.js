import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col s12">
          <h6>
            Made with <span role="img" aria-label="heart"></span>💓 by{" "}
            <a href="mailto:kpododanielnarh@gmail.com">Daniel Narh</a>
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
