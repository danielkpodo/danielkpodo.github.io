import React from "react";

import { MdSchool } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { MdDirectionsRun } from "react-icons/md";

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
  return <MdDirectionsRun />;
};

export { GoReact, School, Health, Python, Javascript };
