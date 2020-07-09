import React from "react";
import { School, GoReact, Python, Javascript, Health } from "./ExperienceIcons";

export const Training = [
  {
    title: "University of Health And Allied Sciences (UHAS)",
    description:
      "Obtained a bachelor's degree in Public Health.Education focused on research, statistics, scientific analysis, and database management. Dabbled with PHP on the side",
    icon: <School />,
    iconBg: "#00ff00",
    date: "2013 - 2017",
    tagline: "education"
  },
  {
    title: "Public Health Officer & Data Entry Clerk (NSS)",
    description:
      "Managed vaccine logistics and equipments at Tema General Hospital, Ghana. Drafted an emergency preparedness plan during the recent H1N1 outbreak. Managed, entered, and analyzed health data at the public health unit",
    icon: <Health />,
    iconBg: "red",
    date: "2018 - 2019",
    tagline: "work"
  },
  {
    title: "FreeCodeCamp Online Education (FCC)",
    description:
      "Trained in responsive web design, advanced javascript, data structures and algorithms",
    icon: <Javascript />,
    iconBg: "yellow",
    date: "2018 - 2019",
    tagline: "education"
  },
  {
    title: "Zerotomastery Academy (ZTM)",
    description:
      "Completed the zero to mastery web developer bootcamp. Trained in a myriad of technologies ranging from javascript, git,react,nodejs,python, and data science among others",
    icon: <Python />,
    iconBg: "blue",
    date: "2019 - 2020",
    tagline: "education"
  },
  {
    title: "Fullstack Engineer(HDX Technologies)",
    description:
      "Wireframed and implemented the UI for almost every project. Model database design for backend. Responsible for mentoring a team of Junior Developers",
    icon: <GoReact />,
    iconColor: "magenta",
    date: "2020 - present",
    tagline: "work"
  }
];
