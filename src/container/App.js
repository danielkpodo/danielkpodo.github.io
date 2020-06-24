import React from "react";
import Headroom from "react-headroom";
import Header from "../components/navbar/Header";
import Navbar from "../components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar />
        <p>main content here</p>
      </Header>
    </div>
  );
}

export default App;
