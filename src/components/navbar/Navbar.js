import React, { Fragment, useState, useEffect } from "react";
import M from "materialize-css";

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
      <a href={item.path}>{item.text}</a>
    </li>
  ));

  return (
    <Fragment>
      <nav className="navbar">
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            Narh
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
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
