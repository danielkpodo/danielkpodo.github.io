import React from "react";
import { School, GoReact, Python, Javascript, Health } from "./ExperienceIcons";

export const Training = [
  {
    id: 1,
    title: "Lead Frontend Engineer",
    description:
      "Wireframed and implemented the UI for almost every project. Model database design for backend. Responsible for mentoring a team of Junior Developers",
    icon: <GoReact />,
    iconBg: "#61DBFB",
    date: "2020 - present",
    tagline: "work",
    position: "right"
  },
  {
    id: 2,
    title: "Zero-to-Mastery Academy",
    description:
      "Completed the zero to mastery web developer bootcamp and granted advanced python certification.Moreso,trained in a myriad of technologies ranging from javascript, git,react,nodejs,python, and data science among others",
    icon: <Python />,
    iconBg: "#F7518D",
    date: "2019 - 2020",
    tagline: "education",
    position: "left"
  },
  {
    id: 3,
    title: "FreeCodeCamp Online Education",
    description:
      "Trained in responsive web design, advanced javascript, data structures and algorithms",
    icon: <Javascript />,
    iconBg: "#0A0A22",
    date: "2018 - 2019",
    tagline: "education",
    position: "right"
  },
  {
    id: 4,
    title: "Public Health Officer & Data Analyst",
    description:
      "Managed vaccine logistics and equipments at Tema General Hospital, Ghana. Drafted an emergency preparedness plan during the recent H1N1 outbreak. Managed, entered, and analyzed health data at the public health unit",
    icon: <Health />,
    iconBg: "goldenrod",
    date: "2018 - 2019",
    tagline: "work",
    position: "right"
  },
  {
    id: 5,
    title: "University of Health And Allied Sciences (UHAS)",
    description:
      "Obtained a Bachelor's degree in Public with specialty in Disease Control. Education centered on research, health statistics, and epidemiology. Whilst in my final year, I dabbled with PHP and SQL on the side",
    icon: <School />,
    iconBg: "#018C41",
    date: "2013 - 2017",
    tagline: "education",
    position: "left"
  }
];
