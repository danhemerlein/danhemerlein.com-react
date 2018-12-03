import React, { Component } from "react";
import { Link } from "react-router-dom";

import './MusicPage.scss'

export default class MusicPage extends Component {
  render() {
    return (
      <div>
        <div className="MusicPage flex flex-wrap items-center justify-center">
          {
            this.props.projects.map(project => {
              return (
                <div className="col-12 md-col-4 flex flex-column items-center justify-center">
                  <div className="col-11">
                    <Link to={`/music/${project.id}`}>
                      <div className="MusicPage__project my2 flex flex-column items-center justify-center">
                        <h3 className="m0">{project.title}</h3>
                        <h4 className="m0">by {project.artist}</h4>
                        <h5 className="bold m0">{project.role.toLowerCase()}</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
