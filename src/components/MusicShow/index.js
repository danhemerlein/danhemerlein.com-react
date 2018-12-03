import React, { Component } from "react";

import './MusicShow.scss'

export default class MusicShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
       project: []
    }
  }

  componentDidMount() {
    console.log(this.params);

    for (let project of this.props.projects) {
      console.log(project.id);
    }
  }

  render() {
    return (
      <div className="MusicShow">
        hihihih
        {this.props.title}
      </div>
    )
  }
}