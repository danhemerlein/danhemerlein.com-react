import React, { Component } from "react";

import MoodboardIcon from '../icons/Moodboard';

import './Moodboard.scss'

export default class Moodboard extends Component {
  render() {
    return (
      <div className="Moodboard">
        <h6>This is the moodboard</h6>
        <div>
          <MoodboardIcon />
        </div>
      </div>
    )
  }
}