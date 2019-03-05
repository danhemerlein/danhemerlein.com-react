import React, { Component } from "react";

import "./Menu.scss";

export default class Menu extends Component {
  render() {
    return (
      <h3 className="Menu body-serif pointer" onClick={this.props.clickHandler}>
        menu
      </h3>
    );
  }
}
