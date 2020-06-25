import React, { Fragment, useState, useEffect } from "react";
import Logo from "./Logo";
import M from "materialize-css";
import { MdSort } from "react-icons/md";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState([
    { text: "Home", path: "/" },
    { text: "Skills", path: "/skills", id: "#skills" },
    { text: "Experiences", path: "/experience", id: "#experience" },
    { text: "Projects", path: "/projects", id: "#projects" },
    { text: "Achievements", path: "/achievements", id: "#achievement" },
    { text: "About", path: "/about", id: "#about" }
  ]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  const menuLinks = navLinks.map((item, index) => (
    <li key={index}>
      <a href={item.path} className="hvr-grow">
        {item.text}
      </a>
    </li>
  ));

  return (
    <Fragment>
      <nav className="navbar">
        <div className="nav-wrapper container">
          <Logo />
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <MdSort style={{ fontSize: "50px", paddingTop: "15px" }} />
          </a>
          <ul className="right hide-on-med-and-down">{menuLinks}</ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {menuLinks}
      </ul>
    </Fragment>
  );
};

export default Navbar;
