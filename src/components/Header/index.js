import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Header.scss'

import HamburgerIcon from '../icons/Hamburger';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="flex">
          <div className="Header__title col-10 md-col-6">
            <h1 className="heading-serif m0"><Link to="/">{this.props.title}</Link></h1>
            <h2 className="xs-hide heading-serif m0"><Link to="/code">{this.props.subTitle}</Link> / <Link to="/music">{this.props.subTitleTwo}</Link></h2>
          </div>
          <div className="flex justify-end items-center col-2 sm-col-6">
            <nav className="xs-hide" role="navigation">
              <ul className="list-style-none p0">
                <li className="body-serif inline-block"><Link to="/keep-in-touch">keep in touch</Link></li>
                <li className="body-serif inline-block ml2"><Link to="/about">about</Link></li>
              </ul>
            </nav>
            <div className="sm-hide md-hide lg-hide full-width">
              <div className="pointer">
                <HamburgerIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
