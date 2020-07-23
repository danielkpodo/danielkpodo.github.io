import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

const Social = () => {
  const [socialIcons, setIcons] = useState([
    { icon: <FaGithub />, path: "", title: "Follow me on github" },
    { icon: <FaFacebook />, path: "", title: "Friend me on facebook" },
    { icon: <FaTwitter />, path: "", title: "Follow me on twitter" },
    { icon: <FaLinkedinIn />, path: "", title: "Connect with me on linkedin" },
    { icon: <FaRedditAlien />, path: "", title: "Follow me on reddit" }
  ]);

  const social = socialIcons.map((item, index) => (
    <a
      href="google.com"
      rel="noopener noreferrer"
      target="_blank"
      className="waves-effect waves-light hvr-sink"
      key={index}
      title={item.title}
    >
      {item.icon}
    </a>
  ));
  return (
    <div className="social-icons">
      {social}
      <a
        href="mailto:kpododanielnarh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="waves-effect waves-light hvr-sink google"
        title="Email me"
      >
        <FaGooglePlus />
      </a>
    </div>
  );
};

export default Social;
