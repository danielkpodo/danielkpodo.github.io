import React from "react";
import RepoCard from "./GithubRepo";
import MoreProjects from "./MoreProjects";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function getPinnedRepos(username) {
    try {
      const url = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${username}`;
      const response = await axios.get(url);
      const repos = response.data;
      setPinnedRepos(repos);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching pinned repos: ", err);
    }
  }

  useEffect(() => {
    const username = "danielkpodo";
    getPinnedRepos(username);
  }, []);

  console.log("Repos pinned", pinnedRepos);

  function displayRepos(repos) {
    return repos.map((repo, index) => {
      return (
        <Fade key={index} right>
          <RepoCard repository={repo} />
        </Fade>
      );
    });
  }

  let loader = isLoading ? (
    <p style={{ textAlign: "center", color: "#eee" }}>
      Loading repositories...
    </p>
  ) : (
    displayRepos(pinnedRepos)
  );

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
        <div className="row">{loader}</div>
      </div>
      <MoreProjects />
    </section>
  );
};

export default Projects;
