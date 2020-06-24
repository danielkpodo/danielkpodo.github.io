import React from "react";
import Headroom from "react-headroom";
import GithubCorner from "react-github-corner";
import Header from "../components/navbar/Header";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Particles from "react-particles-js";
import { particlesOption } from "./particlesOption";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOption} />
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <GithubCorner
        href="https://github.com/danielkpodo/covid19/tree/master"
        size="55"
        bannerColor="#ff8906"
        className="github"
        target="_blank"
      />
    </div>
  );
}

export default App;
