import React, { Component } from "react";

import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="xs-hide flex justify-center items-center">
          <div className="col-6">
            <ul className="Footer__list list-style-none p0">
              <li className="inline-block">
                <a href="https://github.com/danhemerlein" target="_blank" rel="noopener noreferrer" titl="Github Icon">
                  <span>github</span>
                </a>
              </li>
              <li className="inline-block ml2">
                <a href="https://www.linkedin.com/in/danhemerlein/" target="_blank" rel="noopener noreferrer" title="LinkedIn Icon">
                  <span>linkedin</span>
                </a>
              </li>
              <li className="inline-block ml2">
                <a href="https://open.spotify.com/user/123676733/playlist/5apn8cxFTIuQfDiRSv8zdn?si=MLCfQOJTRhKaR7hem34gRg" target="_blank" rel="noopener noreferrer" title="Headphone Icon">
                  <span>spotify</span>
                </a>
              </li>
              <li className="inline-block ml2">
                <a href="https://www.instagram.com/danhemerlein/" target="_blank" rel="noopener noreferrer" title="Instagram Icon">
                  <span>instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 flex justify-end">
            <small className="Footer__small self-end">
              Copyright Dan Hemerlein 2018
            </small>
          </div>
        </div>
        <div className="full-width mt2 center">
          <small className="Footer__small">
            Copyright Dan Hemerlein 2018
          </small>
        </div>
      </div>
    )
  }
}
