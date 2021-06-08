import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends Component {
  render() {
    const data = fetch(
      "https://kfipmta4tf.execute-api.eu-west-2.amazonaws.com/porfoliowebsite_index/",
      {
        method: "GET",
      }
    ).then((response) => response.json());

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div
              id="portfolio_container"
              className="nes-container with-title"
              style={{ marginBottom: "20px" }}
            >
              <h3 className="title">Recent Projects</h3>

              {data.reverse().map((item) => (
                <div
                  class="row"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                >
                  <div class="col-xs-2">
                    <i
                      id={item["image"]["S"].split(4)}
                      class={item["image"]["S"]}
                    ></i>
                  </div>
                  <div class="col-xs-2">&nbsp;&nbsp;</div>
                  <div class="col-xs-8">
                    <h4>{item["project_name"]["S"]}</h4>
                    <p>{item["description"]["S"]}</p>
                    <a href={item["github_link"]["S"]} target="_blank" rel="noreferrer">
                      Source code
                    </a>
                    {item['web_link']['S'] !== '' ? ' | ': null}
                    {item['web_link']['S'] !== '' ? <a href={item["web_link"]["S"]} target="_blank" rel="noreferrer">
                      Site
                    </a>: null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
