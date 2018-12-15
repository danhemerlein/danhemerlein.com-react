import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import CloseIcon from 'components/icons/Close';

import './MobileNav.scss'

export default class MobileNav extends Component {
  render() {
    return (
      <div className="MobileNav absolute bg-white full-width full-height z4 flex flex-column">
      <div className="flex items-end justify-end">
        <div className="col-2 pointer">
          <CloseIcon
            clickHandler={this.props.clickHandler}
          />
        </div>
        </div>
          <Router>
            <nav crole="navigation">
              <ul className="list-style-none p0 flex items-center justify-center flex-column">
                <li className="body-serif my2" onClick={this.props.listItemClickHandler}><Link to="/code">code</Link></li>
                <li className="body-serif my2" onClick={this.props.listItemClickHandler}><Link to="/music">music</Link></li>
                <li className="body-serif my2" onClick={this.props.listItemClickHandler}><Link to="/moodboard">moodboard</Link></li>
                <li className="body-serif my2" onClick={this.props.listItemClickHandler}><Link to="/about">about</Link></li>
                <li className="body-serif my2" onClick={this.props.listItemClickHandler}><Link to="/keep-in-touch">keep in touch</Link></li>
              <li className="body-serif my2" onClick={this.props.listItemClickHandler}><Link to="/">home</Link></li>
              </ul>
            </nav>
          </Router>
      </div>
    )
  }
}