import React from "react";
import RepoCard from "./GithubRepo";
import MoreProjects from "./MoreProjects";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section
      className="projects section scrollspy pattern-dots-md"
      id="projects"
    >
      <div className="section-header center-align">
        <HeadShake>
          <h2> Projects & Works </h2>
        </HeadShake>
        <hr className="rule" />
        <p>Here are a couple of my open source projects on github</p>
      </div>
      <div className="container">
        <div className="row">
          <Fade right>
            <RepoCard />
          </Fade>
          <Fade right>
            <RepoCard />
          </Fade>
          <Fade right>
            <RepoCard />
          </Fade>
          <Fade right>
            <RepoCard />
          </Fade>
          <Fade right>
            <RepoCard />
          </Fade>
          <Fade right>
            <RepoCard />
          </Fade>
        </div>
      </div>
      <MoreProjects />
    </section>
  );
};

export default Projects;
