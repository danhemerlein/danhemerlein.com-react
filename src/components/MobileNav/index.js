import React, { Component } from "react";
import { Link } from "react-router-dom";

import CloseIcon from 'components/icons/Close';

import './MobileNav.scss'

export default class MobileNav extends Component {
  render() {
    return (
      <div className="MobileNav bg-white flex flex-column p1">
        <div className="flex items-end justify-end">
          <div className="MobileNav__close-icon pointer">
            <CloseIcon clickHandler={this.props.clickHandler} />
          </div>
        </div>
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

            <hr className="MobileNav__hr"></hr>

            <li className="MobileNav__list-item  body-serif my2">
              <a
                href="https://github.com/danhemerlein"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>

            <li className="MobileNav__list-item  body-serif my2">
              <a
                href="https://workingnotworking.com/58170-dan"
                target="_blank"
                rel="noopener noreferrer"
              >
                working not working
              </a>
            </li>

            {/* <li className="MobileNav__list-item  body-serif my2">
              <a
                href="https://www.linkedin.com/in/danhemerlein/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li> */}

            {/* <li className="MobileNav__list-item  body-serif my2">
              <a
                href="https://open.spotify.com/user/123676733/playlist/5apn8cxFTIuQfDiRSv8zdn?si=MLCfQOJTRhKaR7hem34gRg"
                target="_blank"
                rel="noopener noreferrer"
              >
                spotify
              </a>
            </li> */}

            <li className="MobileNav__list-item  body-serif my2">
              <a
                href="https://www.instagram.com/danhemerlein/"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
