import React, { Component } from "react";

import canvas from './canvas.pokemon'

class Game extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="nes-container with-title non-mobile">
              <h3 className="title">Go on take a break, you deserve it</h3>
              <div className="row">
                <div className="canvas-container">
                  Use arrow keys{" "}
                  <span
                    className="badge badge-primary m-2"
                    style={{ marginTop: "0px", marginBottom: "0px" }}
                  >
                    ←
                  </span>{" "}
                  <span
                    className="badge badge-primary m-2"
                    style={{ marginTop: "0px", marginBottom: "0px" }}
                  >
                    →
                  </span>{" "}
                  to move!
                  <p />
                  <canvas id="canvas" width={1044} height={458} />
                  {canvas}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
