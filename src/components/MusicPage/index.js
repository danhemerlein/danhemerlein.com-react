import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from 'components/base/Image';

import './MusicPage.scss'

export default class MusicPage extends Component {

  render() {
    return (
      <div>
        <div className="MusicPage mt2 flex flex-wrap items-center justify-center">
          {
            this.props.projects.map((project, key) => {
              return (
                <div className="col-12 md-col-4 flex flex-column items-center justify-center">
                  <div className="col-11">
                    <Link to={`/music/${project.id}`}>
                      <div className="MusicPage__container relative">
                        <div>
                          <Image src={this.props.images[key].fields.file.url} alt={this.props.images[key].fields.title} />
                        </div>
                        <div className="MusicPage__overlay bg-white flex justify-center flex-column items-center absolute left-0 top-0 right-0 bottom-0 full-width full-height">
                          <h3 className="body-serif m0">{project.title}</h3>
                          <h4 className="body-serif m0">by {project.artist}</h4>
                          <h5 className="body-serif bold m0">{project.role.toLowerCase()}</h5>
                        </div>
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
