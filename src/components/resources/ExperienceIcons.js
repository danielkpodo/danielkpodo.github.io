import React from "react";

import { MdSchool } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { MdTimeline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

const School = () => {
  return <MdSchool />;
};

const GoReact = () => {
  return <DiReact />;
};

const Python = () => {
  return <DiPython />;
};

const Javascript = () => {
  return <DiJsBadge />;
};

const Health = () => {
  return <MdTimeline />;
};
const Covid = () => {
  return <BsPeople />;
};

export { GoReact, School, Health, Python, Javascript, Covid };
