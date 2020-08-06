import React, { createContext } from "react";

const GithubContext = createContext({
  user: {},
  pinned_repos: [],
  userLoading: true
});

export default GithubContext;
