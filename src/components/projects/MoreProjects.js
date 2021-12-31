import React, { useContext } from "react";
import Githubcontext from "../../context/GithubContext";

const MoreProjects = () => {
  const githubUser = useContext(Githubcontext);
  return (
    <div className="more-projects">
      <a
        href={githubUser.user.html_url}
        className="btn waves-effect waves-light z-depth-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects
      </a>
    </div>
  );
};

export default MoreProjects;
