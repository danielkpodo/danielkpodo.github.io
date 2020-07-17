import React from "react";
import {
  School,
  GoReact,
  Python,
  Javascript,
  Health,
  Covid
} from "./ExperienceIcons";

export const Training = [
  {
    id: 1,
    title: "Lead Frontend Engineer 🧑‍ 	",
    description:
      "Wireframed and implemented the UI for almost every project. Model database design for backend. Responsible for mentoring a team of Junior Developers",
    icon: <GoReact />,
    iconBg: "#f25f4c",
    date: "Jan 2020 - present",
    tagline: "work",
    position: "right"
  },
  {
    id: 2,
    title: "TMA Children's Clinic (HIO) ",
    description:
      "Responsible for monthly data entry, anaylysis, and reporting. Lead investigator for covid19 suspected covid-19 cases",
    icon: <Covid />,
    iconBg: "#f25f4c",
    date: "Aug 2019 - July 2020",
    tagline: "work",
    position: "left"
  },
  {
    id: 3,
    title: "Zero to Mastery Academy ",
    description:
      "Completed the zero to mastery web developer bootcamp and granted advanced python certification.Moreso,trained in a myriad of technologies ranging from javascript, git,react,nodejs,python, and data science among others",
    icon: <Python />,
    iconBg: "#f25f4c",
    date: "2019 - 2020",
    tagline: "education",
    position: "right"
  },
  {
    id: 4,
    title: "FreeCodeCamp 🔥 ",
    description:
      "Trained in responsive web design, advanced javascript, data structures and algorithms",
    icon: <Javascript />,
    iconBg: "#f25f4c",
    date: "2018 - 2019",
    tagline: "education",
    position: "left"
  },
  {
    id: 5,
    title: "Public Health Officer & Data Analyst 🏷️",
    description:
      "Managed vaccine logistics and equipments at Tema General Hospital, Ghana. Drafted an emergency preparedness plan during the recent H1N1 outbreak. Managed, entered, and analyzed health data at the public health unit",
    icon: <Health />,
    iconBg: "#f25f4c",
    date: "2018 - 2019",
    tagline: "work",
    position: "right"
  },
  {
    id: 6,
    title: "University of Health And Allied Sciences (UHAS) 📚",
    description:
      "Obtained a Bachelor's degree in Public with specialty in Disease Control. Education centered on research, health statistics, and epidemiology. Whilst in my final year, I dabbled with PHP and SQL on the side",
    icon: <School />,
    iconBg: "#f25f4c",
    date: "2013 - 2017",
    tagline: "education",
    position: "left"
  }
];
