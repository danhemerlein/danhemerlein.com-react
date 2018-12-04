import React, { Component } from "react";

import './MusicShow.scss'

export default class MusicShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
       project: (this.props.projects[this.props.match.params.id - 1])
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="MusicShow flex justify-center items-center flex-column">
        <h3>{this.state.project.title}</h3>
        <h3>by {this.state.project.artist}</h3>
        <h3>{this.state.project.releaseDate}</h3>
        <h3>{this.state.project.role}</h3>
        <h3><a href={this.state.project.link} target="_blank" rel="noopener noreferrer">Launch Project</a></h3>
      </div>
    )
  }
}