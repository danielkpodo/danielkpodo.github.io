import React from "react";
import RepoCard from "./GithubRepo";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-header center-align">
        <h2> Projects & Works </h2>
        <hr className="rule" />
        <p>Here are a couple of my open source prjects on github</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col m6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              officia, eveniet totam molestias, ratione repellat, optio quod non
              ullam quis harum ipsum beatae nostrum! Delectus commodi ex
              architecto error eligendi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
