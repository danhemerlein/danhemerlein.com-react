import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="flex">
        <div class="col-6">
          <h1 class="m0">Dan Hemerlein</h1>
          <h2 class="m0">Creative Coder / Music Producer</h2>
        </div>
        <div class="flex justify-end col-6">
          <h3>Keep In Touch</h3>
        </div>
      </div>
    )
  }
}
