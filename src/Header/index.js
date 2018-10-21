
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Header">
        <h1 class="m0">Dan Hemerlein</h1>
        <h2 class="m0">Creative Coder / Music Producer</h2>
      </div>
    )
  }
}