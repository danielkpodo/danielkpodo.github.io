import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";

/* eslint-disable no-unused-vars */
const Social = () => {
  const [socialIcons, setIcons] = useState([
    {
      icon: <FaGithub />,
      path: "https://github.com/danielkpodo",
      title: "Follow me on github",
    },
    {
      icon: <FaTwitter />,
      path: "https://twitter.com/narhKpodo",
      title: "Follow me on twitter",
    },
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/daniel-narh-kpodo/",
      title: "Connect with me on linkedin",
    },
  ]);

  const social = socialIcons.map((item, index) => (
    <a
      href={item.path}
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
        <GoMail />
      </a>
    </div>
  );
};

export default Social;
