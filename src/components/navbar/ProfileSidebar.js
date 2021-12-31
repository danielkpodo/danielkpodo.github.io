import React, { useContext } from "react";
import pattern from "../assets/images/pattern.png";
import { TwitterFollowButton } from "react-twitter-embed";
import GithubContext from "../../context/GithubContext";

const ProfileSidebar = () => {
  const githubUser = useContext(GithubContext);
  return (
    <div className="profile-sidebar">
      <li>
        <div className="user-view">
          <div className="background">
            <img src={pattern} alt="Profile background" />
          </div>
          <a href="#user">
            <img
              className="circle responsive-img"
              src={githubUser.user.avatar_url}
              alt="Daniel Narh "
            />
          </a>
          <a href="#name">
            <span className="white-text name">Daniel Narh</span>
          </a>
          <TwitterFollowButton screenName={"NarhKpodo"} />
          <a href="mailto:kpododanielnarh@gmail.com" title="Email me now">
            <span className="white-text email">kpododanielnarh@gmail.com</span>
          </a>
        </div>
      </li>
    </div>
  );
};

export default ProfileSidebar;
