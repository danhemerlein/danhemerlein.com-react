import React, { Component } from "react";
import { Link } from "react-router-dom";


import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="flex">
          <div className="col-6">
            <h1 className="m0">Dan Hemerlein</h1>
            <h2 className="m0">Creative Coder / Music Producer</h2>
          </div>
          <div className="flex justify-end col-6">
            <nav rol="navigation">
              <ul className="list-style-none p0">
                <li className="inline-block">keep in touch</li>
                <li className="inline-block ml2"><Link to="/dansbook">about</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
