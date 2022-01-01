import React from "react";
import { GoRepo } from "react-icons/go";
import { GoPrimitiveDot } from "react-icons/go";
import { GoRepoForked } from "react-icons/go";
import { GoStar } from "react-icons/go";

/* eslint-disable no-unused-vars */
const GithubRepo = (props) => {
  const {
    repository: { repo, description, language, stars, link, forks },
  } = props;
  return (
    <div className="col m6 repo-space z-depth-3">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="repo">
          <div className="title">
            <p>
              <GoRepo style={{ fontSize: "25px", marginRight: "-15px" }} />
            </p>
            <p> {repo}</p>
          </div>
          <div className="repo-description">
            <p>{description}</p>
          </div>
          <div className="repo-footer">
            <p>
              <span>
                <GoPrimitiveDot
                  style={{
                    color: "gold",
                    fontSize: "13px",
                  }}
                />
                {language}
              </span>
              &nbsp; &nbsp;
              <span>
                <GoRepoForked style={{ color: "#000", fontSize: "15px" }} />
                {forks}
              </span>
              &nbsp; &nbsp;
              <span>
                <GoStar style={{ color: "red", fontSize: "15px" }} /> {stars}
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GithubRepo;
