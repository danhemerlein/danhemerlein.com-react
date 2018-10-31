import React, { Component } from "react";

import './HomeBox.scss'

export default class HomeBox extends Component {
  render() {
    return (
      <div className="HomeBox m1 flex justify-center items-center col-6">
        <h4>{this.props.header}</h4>
      </div>
    )
  }
}
