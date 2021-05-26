import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "10px", fontSize: "90%" }}>
        <div
          className="col-xs-12"
          style={{ textAlign: "center", color: "#a9f9a9", background: "#000" }}
        >
          <a
            href="https://github.com/BradWebb101/portfolio_website"
            target="_blank"
          >
            Source Code
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
