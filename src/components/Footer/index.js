import React, { Component } from "react";

import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="flex flex-column justify-center items-center">
          <ul className="list-style-none p0">
            <li className="inline-block">
              <a href="https://github.com/danhemerlein" target="_blank" rel="noopener noreferrer" titl="Github Icon">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li className="inline-block">
              <a href="https://www.linkedin.com/in/danhemerlein/" target="_blank" rel="noopener noreferrer" title="LinkedIn Icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="inline-block">
              <a href="https://open.spotify.com/user/123676733/playlist/5apn8cxFTIuQfDiRSv8zdn?si=MLCfQOJTRhKaR7hem34gRg" target="_blank" rel="noopener noreferrer" title="Headphone Icon">
                <i class="fa fa-headphones" aria-hidden="true"></i>
              </a>
            </li>
            <li className="inline-block">
              <a href="https://www.instagram.com/danhemerlein/" target="_blank" rel="noopener noreferrer" title="Instagram Icon">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <small className="self-end">
            Copyright Dan Hemerlein 2018
          </small>
        </div>
      </div>
    )
  }
}
