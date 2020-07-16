import React from "react";

const Header = (props) => {
  return (
    <header className="head-overview pattern-dots-md">{props.children}</header>
  );
};

export default Header;
