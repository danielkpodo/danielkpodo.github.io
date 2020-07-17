import React from "react";
import Header from "../components/navbar/Header";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Particles from "react-particles-js";
import Experience from "../components/experience/Experience";
import Achievement from "../components/achievements/Achievement";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import { particlesOption } from "./particlesOption";
import TopBarProgress from "react-topbar-progress-indicator";
import BackToTop from "react-back-top";
import "./App.css";

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
        <Achievement />
        <Contact />
        <Footer />
        <BackToTop
          shape="round"
          icon="fa fa-arrow-up"
          position={{ bottom: "5%", right: "2%" }}
          radius={20}
          background="#f25f4c"
        />
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
