import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends Component {
  render() {
    // const data = fetch(
    //   "https://kfipmta4tf.execute-api.eu-west-2.amazonaws.com/porfoliowebsite_index/",
    //   {
    //     method: "GET",
    //   }
    // ).then((response) => response.json());

    const data = [
      {
        display_front: { S: "yes" },
        project_name: { S: "Covid data RestAPI - Python" },
        image: { S: "nes-charmander" },
        project_number: { N: "3" },
        github_link: { S: "https://github.com/BradWebb101/Covid-data" },
        web_link: { S: "" },
        description: { S: "Python RestAPI, using Flask and DynamoDB" },
      },
      {
        project_name: { S: "Room temperature - Node" },
        display_front: { S: "yes" },
        image: { S: "nes-squirtle" },
        project_number: { N: "2" },
        github_link: { S: "https://github.com/BradWebb101/living_room_temp" },
        web_link: { S: "" },
        description: {
          S: "Node GraphQL Server, using Apollo Server and DynamoDB",
        },
      },
      {
        display_front: { S: "yes" },
        project_name: { S: "#Balr Twitter - Python, HTML, CSS, JS" },
        image: { S: "nes-bulbasaur" },
        project_number: { N: "1" },
        github_link: { S: "https://github.com/BradWebb101/balr_twitter" },
        web_link: { S: "https://balr-twitter.bradwebb101.com/" },
        description: { S: "A Twitter dashboard, using Tweepy and DynamoDB" },
      },
    ];

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
