import React, { Component } from "react";

import './HomeBox.scss'

export default class HomeBox extends Component {
  render() {
    return (
      <div className="HomeBox flex justify-center items-center col-12">
        {/* <h4 className="body-serif">{this.props.header}</h4> */}
        <div className="flex justify-center items-center full-width full-height">
          {this.props.icon}
        </div>
      </div>
    )
  }
}
