import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import CloseIcon from 'components/icons/Close';

import './MobileNav.scss'

export default class MobileNav extends Component {
  render() {
    return (
      <div className="MobileNav bg-white flex flex-column">
        <div className="flex items-end justify-end">
          <div className="MobileNav__close-icon pointer pr1">
            <CloseIcon clickHandler={this.props.clickHandler} />
          </div>
        </div>
        <Router>
          <nav role="navigation">
            <ul className="list-style-none p0 flex items-center justify-center flex-column">
              <li className="MobileNav__list-item body-serif my2">
                <Link to="/code">code</Link>
              </li>
              <li className="MobileNav__list-item  body-serif my2">
                <Link to="/music">music</Link>
              </li>
              <li className="MobileNav__list-item  body-serif my2">
                <Link to="/moodboard">moodboard</Link>
              </li>
              <li className="MobileNav__list-item  body-serif my2">
                <Link to="/about">about</Link>
              </li>
              <li className="MobileNav__list-item  body-serif my2">
                <Link to="/keep-in-touch">keep in touch</Link>
              </li>
              <li className="MobileNav__list-item  body-serif my2">
                <Link to="/">home</Link>
              </li>
            </ul>
          </nav>
        </Router>
      </div>
    );
  }
}
