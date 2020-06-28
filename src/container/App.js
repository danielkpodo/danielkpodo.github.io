import React from "react";
import Header from "../components/navbar/Header";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Skills from "../components/skills/Skills";
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
      <main>
        <Skills />
      </main>
    </div>
  );
}

export default App;
