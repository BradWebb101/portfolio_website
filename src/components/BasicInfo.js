import React, { Component } from "react";

class BasicInfo extends Component {
  render() {
    return (
      <div>
        <nav
          style={{
            padding: "20px",
            borderBottom: "3px solid #ccc",
            marginBottom: "10px",
          }}
        >
          <div className="container">
            <h2 style={{ marginBottom: 0 }}>
              <i className="snes-jp-logo" />
              &nbsp;Brad Webb's Online Portfolio
            </h2>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            {/* left */}
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div
                className="nes-container with-title"
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <h3 className="title">This is me</h3>
                <div>
                  <div className="img-container">
                    <img
                      src="images/headshot.png"
                      alt="headshot"
                      width={280}
                      height={420}
                      className="centre"
                      padding-left={50}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* right      */}
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div
                className="nes-container with-title"
                style={{ marginTop: "10px", marginBottom: "16px" }}
              >
                <h3 className="title">Skill set</h3>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon trophy"></i>
                    &nbsp;Python
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon trophy"></i>
                    &nbsp;Business Stats
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon heart"></i>
                    &nbsp;Node
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon heart"></i>
                    &nbsp;Data Engineering
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon trophy"></i>
                    &nbsp;SQL
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon trophy"></i>
                    &nbsp;Econometrics
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon heart"></i>
                    &nbsp;Git
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <i className="nes-icon heart"></i>
                    &nbsp;Docker
                  </div>
                </div>
              </div>
              <div
                className="nes-container with-title"
                style={{ marginTop: "19px", marginBottom: "16px" }}
              >
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <i className="nes-icon star"></i>
                    &nbsp;Masters of Applied Finance
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <i className="nes-icon star"></i>
                    &nbsp;Bachelour of Business - Finance
                  </div>
                </div>
              </div>
              <div
                className="nes-container with-title"
                style={{ marginTop: "19px", marginBottom: "20px" }}
              >
                <div className="title">Contact details</div>
                <div>
                  <a href="https://www.linkedin.com/in/brad-webb-101/">
                    <i className="nes-icon linkedin" />
                  </a>
                  &nbsp;
                  <a href="https://github.com/BradWebb101">
                    <i className="nes-icon github" />
                  </a>
                  &nbsp;
                  <a href="mailto:bradwebb101@outlook.com">
                    <i className="nes-icon gmail" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BasicInfo;
