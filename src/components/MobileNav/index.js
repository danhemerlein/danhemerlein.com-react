import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import CloseIcon from 'components/icons/Close';

import './MobileNav.scss'

export default class MobileNav extends Component {
  render() {
    return (
      <div className="MobileNav absolute bg-white full-width full-height z4">
        <Router>
          <nav role="navigation">
            <ul className="list-style-none p0 flex items-center justify-center flex-column">
              <li className="body-serif" onClick={this.props.listItemClickHandler}><Link to="/code">code</Link></li>
              <li className="body-serif" onClick={this.props.listItemClickHandler}><Link to="/music">music</Link></li>
              <li className="body-serif" onClick={this.props.listItemClickHandler}><Link to="/moodboard">moodboard</Link></li>
              <li className="body-serif" onClick={this.props.listItemClickHandler}><Link to="/about">about</Link></li>
              <li className="body-serif" onClick={this.props.listItemClickHandler}><Link to="/keep-in-touch">keep in touch</Link></li>
            </ul>
          </nav>
        </Router>
        <div className="col-12 pointer">
          <CloseIcon
            clickHandler={this.props.clickHandler}
          />
        </div>
      </div>
    )
  }
}