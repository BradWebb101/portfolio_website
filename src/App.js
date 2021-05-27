import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "nes.css/css/nes.min.css";
import "typeface-press-start-2p";

import BasicInfo from "./components/BasicInfo";
import Projects from "./components/Projects";
import Canvas from "./components/Canvas"
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
            <Canvas></Canvas>
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
