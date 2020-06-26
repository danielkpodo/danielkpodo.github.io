import React from "react";
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro
        deserunt libero nostrum! Dolorum veritatis laudantium, enim neque
        deserunt dicta.
      </p>
    </div>
  );
}

export default App;
