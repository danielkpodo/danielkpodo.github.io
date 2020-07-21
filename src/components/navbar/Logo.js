import React from "react";
import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <a href="/" className="brand-logo">
      <img src={logo} alt="Daniel Narh logo" style={{ height: "50px" }} />
    </a>
  );
};
export default Logo;
