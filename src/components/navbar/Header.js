import React from "react";

const Header = (props) => {
  return (
    <header className="head-overview pattern-cross-sm">{props.children}</header>
  );
};

export default Header;
