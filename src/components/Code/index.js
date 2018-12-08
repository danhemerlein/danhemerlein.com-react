import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Code.scss'

export default class Code extends Component {
  render() {
    return (
      <div className="Code mt2 flex items-center justify-center flex-column">
        {
          this.props.projects.map((project, key) => {
            return (
              <div className="Code__project px2 my2 full-width">
                <div className="Code__title-container flex">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"><h4 className="Code__project__title m0 body-serif">{project.title}</h4></a>
                  <h4 className="Code__project__timeline body-serif">({project.timeline})</h4>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer"><h4 className="m0 body-serif">Open Site</h4></a>
                <p className="body-serif">{project.description}</p>
              </div>
            )
          })
        }
        <Link to="/" className="go-home body-serif">Go Home</Link>
      </div>
    )
  }
}
