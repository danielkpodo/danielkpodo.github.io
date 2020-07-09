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

function App() {
  return (
    <div className="App">
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

export default App;
