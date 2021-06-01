//Importing react elements
import React, { Component } from "react";

//Importing CSS and Font files
import "typeface-press-start-2p";
import "bootstrap/dist/css/bootstrap.min.css";
import "nes.css/css/nes.min.css";

//Importing custom individual components
import BasicInfo from "./components/BasicInfo";
import Projects from "./components/Projects";
import Canvas from "./components/Canvas"
import Footer from "./components/Footer";

//Importing custom css files
import '../src/custom.css'

//Rending html components
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
