import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

const Social = () => {
  const [socialIcons, setIcons] = useState([
    { icon: <FaGithub />, path: "", title: "Github" },
    { icon: <FaFacebook />, path: "", title: "Facebook" },
    { icon: <FaGooglePlus />, path: "", title: "Email me" },
    { icon: <FaTwitter />, path: "", title: "Follow me on twitter" },
    { icon: <FaLinkedinIn />, path: "", title: "Connet with me on linkedin" },
    { icon: <FaRedditAlien />, path: "", title: "Follow me on reddit" }
  ]);

  const social = socialIcons.map((item, index) => (
    <a
      href="google.com"
      target="_blank"
      className="waves-effect waves-light hvr-sink"
      style={{ fontSize: "30px", color: "#a7a9be" }}
      key={index}
      title={item.title}
    >
      {item.icon}
    </a>
  ));
  return <div className="social-icons">{social}</div>;
};

export default Social;
