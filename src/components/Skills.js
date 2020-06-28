import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiMaterializecss } from "react-icons/di";
import { DiTerminalBadge } from "react-icons/di";
import { DiSqllite } from "react-icons/di";
import { DiGoogleAnalytics } from "react-icons/di";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-header center-align">
        <h2>My Skills </h2>
        <hr className="rule" />
        <p>
          I am proficient with the following languages, tools and technologies
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col l12 technologies">
            <div className="tech-icons">
              <FaHtml5 className="stack" />
              <p>html-5</p>
            </div>
            <div className="tech-icons">
              <FaCss3 className="stack" />
              <p>css3</p>
            </div>
            <div className="tech-icons">
              <DiBootstrap className="stack" />
              <p>bootstrap</p>
            </div>
            <div className="tech-icons">
              <DiMaterializecss className="stack" />
              <p>materializecss</p>
            </div>
            <div className="tech-icons">
              <FaSass className="stack" />
              <p>sass</p>
            </div>
            <div className="tech-icons">
              <FaJs className="stack" />
              <p>javascript</p>
            </div>
            <div className="tech-icons">
              <DiJqueryLogo className="stack" />
              <p>jquery</p>
            </div>
            <div className="tech-icons">
              <FaReact className="stack" />
              <p>reactjs</p>
            </div>
            <div className="tech-icons">
              <FaNodeJs className="stack" />
              <p>nodejs</p>
            </div>
            <div className="tech-icons">
              <DiMongodb className="stack" />
              <p>mongodb</p>
            </div>
            <div className="tech-icons">
              <FaNpm className="stack" />
              <p>npm</p>
            </div>
            <div className="tech-icons">
              <FaYarn className="stack" />
              <p>yarn</p>
            </div>
            <div className="tech-icons">
              <FaGitAlt className="stack" />
              <p>git</p>
            </div>
            <div className="tech-icons">
              <DiTerminalBadge className="stack" />
              <p>commandline</p>
            </div>
            <div className="tech-icons">
              <FaGithub className="stack" />
              <p>github</p>
            </div>
            <div className="tech-icons">
              <FaPython className="stack" />
              <p>python</p>
            </div>
            <div className="tech-icons">
              <FaPhp className="stack" />
              <p>php</p>
            </div>
            <div className="tech-icons">
              <DiWordpress className="stack" />
              <p>wordpress</p>
            </div>
            <div className="tech-icons">
              <DiMysql className="stack" />
              <p>mysql</p>
            </div>
            <div className="tech-icons">
              <DiSqllite className="stack" />
              <p>sqlite</p>
            </div>
            <div className="tech-icons">
              <DiVisualstudio className="stack" />
              <p>vscode</p>
            </div>
            <div className="tech-icons">
              <DiGoogleAnalytics className="stack" />
              <p>analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
