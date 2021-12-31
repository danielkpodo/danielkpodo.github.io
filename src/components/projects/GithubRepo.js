import React from "react";
import { GoRepo } from "react-icons/go";
import { GoPrimitiveDot } from "react-icons/go";
import { GoRepoForked } from "react-icons/go";
import { GoStar } from "react-icons/go";

/* eslint-disable no-unused-vars */
const GithubRepo = () => {
  return (
    <div className="col m6 repo-space z-depth-3">
      <a href="">
        <div className="repo">
          <div className="title">
            <p>
              <GoRepo style={{ fontSize: "25px", marginRight: "-15px" }} />
            </p>
            <p> Crazy developer portfolio</p>
          </div>
          <div className="repo-description">
            <p>
              Software Developer Portfolio Template that helps you showcase your
              work and skills as a software developer.
            </p>
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
                Javascript
              </span>
              &nbsp; &nbsp;
              <span>
                <GoRepoForked style={{ color: "#000", fontSize: "15px" }} />
                90
              </span>
              &nbsp; &nbsp;
              <span>
                <GoStar style={{ color: "red", fontSize: "15px" }} /> 20
              </span>
            </p>
            <p>300 KB</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GithubRepo;
