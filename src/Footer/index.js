import React, { Component } from "react";

import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="flex flex-column justify-center items-center">
          <small className="self-end">
            Copyright Dan Hemerlein 2018
          </small>
        </div>
      </div>
    )
  }
}