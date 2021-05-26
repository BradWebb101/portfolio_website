import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "nes.css/css/nes.min.css";
import "typeface-press-start-2p";

import BasicInfo from "./components/BasicInfo";
import Projects from "./components/Projects";
// import Game from "./components/Game";
import Footer from "./components/Footer";

import '../src/custom.css'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <div id="colorlib-main">
            <BasicInfo></BasicInfo>
            <Projects></Projects>
            {/* <Game></Game> */}
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
