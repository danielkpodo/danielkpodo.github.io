import React, { Fragment, useState, useEffect } from "react";
import Logo from "./Logo";
import M from "materialize-css";
import { MdSort } from "react-icons/md";
import ProfileSidebar from "./ProfileSidebar";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState([
    { text: "Skills", path: "#skills" },
    { text: "Projects", path: "#projects" },
    { text: "Experience", path: "#experience" },
    { text: "Achievements", path: "#achievements" },
    { text: "Contact", path: "#contact" }
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
      <div className="navbar-fixed">
        <nav className="navbar">
          <div className="nav-wrapper container">
            <Logo />
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <MdSort style={{ fontSize: "50px", paddingTop: "15px" }} />
            </a>
            <ul className="right hide-on-med-and-down">{menuLinks}</ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <ProfileSidebar />
        {menuLinks}
      </ul>
    </Fragment>
  );
};

export default Navbar;
