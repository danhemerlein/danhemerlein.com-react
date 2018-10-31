import React, { Component } from "react";

import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="flex">
          <div className="col-6">
            <h1 className="m0">Dan Hemerlein</h1>
            <h2 className="m0">Creative Coder / Music Producer</h2>
          </div>
          <div className="flex justify-end col-6">
            <h3>Keep In Touch</h3>
          </div>
        </div>
      </div>
    )
  }
}
