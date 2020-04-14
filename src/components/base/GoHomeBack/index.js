import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from "classnames";

import "./GoHomeBack.scss";

export default class GoHomeBack extends Component {
  render() {
    return (
      <div
          className={cx("GoHomeBack", {
            "GoHomeBack__white ": this.props.white
          })}
        >
        <Link to={this.props.destination}>
          <span className="body-serif">{this.props.cta}</span>
        </Link>
      </div>
    )
  }
}
