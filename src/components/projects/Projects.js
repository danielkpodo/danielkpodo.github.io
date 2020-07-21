import React from "react";
import RepoCard from "./GithubRepo";
import MoreProjects from "./MoreProjects";

const Projects = () => {
  return (
    <section
      className="projects section scrollspy pattern-dots-md"
      id="projects"
    >
      <div className="section-header center-align">
        <h2> Projects & Works </h2>
        <hr className="rule" />
        <p>Here are a couple of my open source projects on github</p>
      </div>
      <div className="container">
        <div className="row">
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
        </div>
      </div>
      <MoreProjects />
    </section>
  );
};

export default Projects;
