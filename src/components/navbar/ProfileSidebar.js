import React from "react";
import pattern from "../assets/images/pattern1.jpg";
import danny from "../assets/images/Danny_nice.jpeg";

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      <li>
        <div className="user-view">
          <div className="background">
            <img src={pattern} alt="background for profile picture" />
          </div>
          <a href="#user">
            <img
              className="circle responsive-img"
              src={danny}
              alt="Daniel Narh "
            />
          </a>
          <a href="#name">
            <span className="white-text name">Daniel Narh</span>
          </a>
          <a
            className="twitter-follow-button"
            href="https://twitter.com/NarhKpodo"
            target="_blank"
          >
            Follow @NarhKpodo
          </a>
          <a href="mailto:kpododanielnarh@gmail.com" title="Email me now">
            <span className="white-text email">kpododanielnarh@gmail.com</span>
          </a>
        </div>
      </li>
    </div>
  );
};

export default ProfileSidebar;
