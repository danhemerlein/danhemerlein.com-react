import React, { Component } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GoHomeBack from "components/base/GoHomeBack";
import cx from "classnames";

import './Code.scss'

export default class Code extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topLinks: [],
      listLinks: [],
      bottomLinks: [],
    }
  }

  componentDidMount() {
    const topLinks = [];
    const listLinks = [];
    const bottomLinks = [];

    for (let project of this.props.projects) {
      if (project.fields.isListLink) {
        listLinks.push(project);
      } else if (project.fields.order <= 4) {
        topLinks.push(project);
      } else if (project.fields.order >= 4) {
        bottomLinks.push(project);
      }
    }

    this.setState({
      topLinks: topLinks,
      listLinks: listLinks,
      bottomLinks: bottomLinks
    })
  }


  render() {
    console.log(this.props.projects);
    console.log(this.state);
    return (
      <div className="Code my2 flex items-center justify-center flex-column">
        {this.state.topLinks.map((project, key) => {
          let highlight = false;
          if (project.fields.timelineLaunchDate === "Coming Eventually") {
            highlight = true;
          }
          return (
            <div
              key={key}
              className={cx("Code__project p2 full-width", {
                "Code__project-highlight": highlight === true,
              })}
            >
              <div className="Code__title-container flex">
                <a
                  href={project.fields.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="Code__title m0 body-serif">
                    {project.fields.title}
                  </h4>
                </a>
                <h4 className="Code__timeline body-serif">
                  ({project.fields.timelineLaunchDate})
                </h4>
              </div>

              <div className="body-serif mt2">
                {documentToReactComponents(
                  project.fields.description.content[0]
                )}
              </div>
            </div>
          );
        })}

        <div className="Code__list-link-container  full-width  flex  flex-column  items-center body-serif">
          <p className="px2  full-width">
            In my spare time, I enjoy developing, hosting and maintaining
            websites for my musician friends. Below are few recent selections.
          </p>

          <div className="Code__list-links-container flex col-12 md-col-8-dh">
            {this.state.listLinks.map((project, key) => {
              return (
                <div key={key} className="Code__list-link col-12 md-col-6-dh">
                  <div className="Code__title-container flex">
                    <a
                      href={project.fields.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <h4 className="Code__list-link-title m0 body-serif">
                        {project.fields.title}
                      </h4>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Code__list-link-container  full-width  flex  flex-column  items-center body-serif mt2">
          <p className="px2  full-width">
            Below are a few{" "}
            <span className="Code__markdown bg-solitude">just for fun</span>{" "}
            projects I've done:
          </p>
          <div className="mt2">
            {this.state.bottomLinks.map((project, key) => {
              return (
                <div key={key} className={cx("Code__project p2 full-width")}>
                  <div className="Code__title-container flex">
                    <a
                      href={project.fields.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4 className="Code__title m0 body-serif">
                        {project.fields.title}
                      </h4>
                    </a>
                    <h4 className="Code__timeline body-serif">
                      ({project.fields.timelineLaunchDate})
                    </h4>
                  </div>

                  <div className="body-serif mt2">
                    {documentToReactComponents(
                      project.fields.description.content[0]
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt2">
          <GoHomeBack destination="/" cta="go home" white={false} />
        </div>
      </div>
    );
  }
}
