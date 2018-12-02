import React, { Component } from "react";

import './HomeBox.scss'

export default class HomeBox extends Component {
  render() {
    return (
      <div className="HomeBox flex justify-center items-center full-width">
        <div className="Homebox__c block relative">
          <div className="HomeBox__svg flex justify-center items-center full-width full-height">
            {this.props.icon}
          </div>
          <div className="HomeBox__overlay bg-white flex justify-center items-center absolute left-0 top-0 right-0 bottom-0 full-width full-height">
            <h3 className="HomeBox__header full-width center body-serif absolute m0">{this.props.header}</h3>
          </div>
        </div>
      </div>
    )
  }
}
