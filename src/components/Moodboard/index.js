import React, { Component } from "react";

import './Moodboard.scss'

export default class Moodboard extends Component {
  render() {
    console.log(this.props.images);
    return (
      <div>
        <div className="Moodboard">
          <h6>This is the moodboard</h6>
        </div>
      </div>
    )
  }
}