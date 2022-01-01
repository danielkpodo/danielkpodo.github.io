import React from "react";
import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <a href="/me" className="brand-logo">
      <img
        src={logo}
        alt="Daniel Narh logo"
        style={{ height: "50px", padding: "5px" }}
      />
    </a>
  );
};
export default Logo;
