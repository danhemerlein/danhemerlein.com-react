import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from 'components/base/Image';

import './MusicShow.scss'

export default class MusicShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      project: (this.props.projects[this.props.match.params.id - 1]),
      image: (this.props.images[this.props.match.params.id - 1])
    }
  }

  render() {
    return (
      <div className="MusicShow mt2 flex justify-center items-center">
        <div className="col-6">
          <Image src={this.state.image.fields.file.url} alt={this.state.image.fields.title} />
        </div>
        <div className="col-6">
          <div className="flex justify-center items-center flex-column">
            <h3>{this.state.project.title}</h3>
            <h3>by {this.state.project.artist}</h3>
            <h3>{this.state.project.releaseDate}</h3>
            <h3 className="bold">{this.state.project.role.toLowerCase()}</h3>
            <h3><a href={this.state.project.link} target="_blank" rel="noopener noreferrer">launch project</a></h3>
            <h3><Link to={'/music/'}><span className="body-serif">Go Back</span></Link></h3>
          </div>
        </div>
      </div>
    )
  }
}