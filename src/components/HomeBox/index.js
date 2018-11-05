import React, { Component } from "react";

import './HomeBox.scss'

export default class HomeBox extends Component {
  render() {
    return (
      <div className="HomeBox flex justify-center items-center col-12">
        <h4>{this.props.header}</h4>
      </div>
    )
  }
}
