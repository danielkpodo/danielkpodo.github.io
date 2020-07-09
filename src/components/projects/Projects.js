import React from "react";
import RepoCard from "./GithubRepo";

const Projects = () => {
  return (
    <section className="projects" id="projects">
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
    </section>
  );
};

export default Projects;
