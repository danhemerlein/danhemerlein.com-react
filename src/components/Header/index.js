import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="flex">
          <div className="col-6">
            <h1 className="heading-serif m0"><Link to="/">Dan Hemerlein</Link></h1>
            <h2 className="heading-serif m0"><Link to="/code">Creative Coder</Link> / <Link to="/music">Music Producer</Link></h2>
          </div>
          <div className="flex justify-end col-6">
            <nav role="navigation">
              <ul className="list-style-none p0">
                <li className="body-serif inline-block"><Link to="/keepintouch">keep in touch</Link></li>
                <li className="body-serif inline-block ml2"><Link to="/dansbook">about</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
