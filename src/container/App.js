import React from "react";
import Header from "../components/navbar/Header";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Particles from "react-particles-js";
import Experience from "../components/experience/Experience";
import { particlesOption } from "./particlesOption";
import "./App.css";
import TopBarProgress from "react-topbar-progress-indicator";

function App() {
  return (
    <div className="App" id="read-container">
      {/* add this.state.loading to make it dynamic */}
      <TopBarProgress />
      <Particles className="particles" params={particlesOption} />
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <main>
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}

TopBarProgress.config({
  barColors: {
    "0": "#e53170",
    "0.5": "#ff8906",
    "1.0": "#ff8906"
  },
  shadowBlur: 5
});

export default App;
