import React, { Component } from "react";

import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="flex justify-center items-center">
          <ul className="Footer__list list-style-none p0">
            <li className="inline-block">
              <a
                href="https://github.com/danhemerlein"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li className="inline-block ml2">
              <a
                href="https://workingnotworking.com/58170-dan"
                target="_blank"
                rel="noopener noreferrer"
              >
                working not working
              </a>
            </li>
            {/* <li className="inline-block ml2">
              <a
                href="https://www.linkedin.com/in/danhemerlein/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li> */}
            <li className="inline-block ml2">
              <a
                href="https://open.spotify.com/user/123676733/playlist/5apn8cxFTIuQfDiRSv8zdn?si=MLCfQOJTRhKaR7hem34gRg"
                target="_blank"
                rel="noopener noreferrer"
              >
                spotify
              </a>
            </li>
            <li className="inline-block ml2">
              <a
                href="https://www.instagram.com/danhemerlein/"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </li>
          </ul>
          <div className="Footer__small-container flex">
            <small className="Footer__small self-end">
              © Dan Hemerlein 2020
            </small>
          </div>
        </div>
      </div>
    );
  }
}
