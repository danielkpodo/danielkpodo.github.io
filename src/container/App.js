import React, { useState, useEffect } from "react";
import axios from "axios";
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
import GithubContext from "../context/GithubContext";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  async function getUserDetails(username) {
    try {
      const user_url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
      const response = await axios.get(user_url);
      const user_data = response.data;
      setUser(user_data);
      setUserLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const githubUsername = "danielkpodo";
    getUserDetails(githubUsername);
  }, []);
  console.log("User-Details", user);

  return (
    <div className="App" id="read-container">
      {/* add this.state.loading to make it dynamic */}
      <TopBarProgress />
      <Particles className="particles" params={particlesOption} />
      <GithubContext.Provider value={{ user, userLoading }}>
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
            icon="fa fa-hand-o-up"
            position={{ bottom: "5%", right: "2%" }}
            radius={20}
            background="#f25f4c"
            hover={{ background: "#ff8906" }}
          />
        </main>
      </GithubContext.Provider>
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
