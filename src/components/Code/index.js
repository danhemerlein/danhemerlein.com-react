import React, { Component } from "react";

import './Code.scss'

import Header from '../Header';
import Footer from '../Footer';

export default class Code extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="Code">
          <h6>This is the code page</h6>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
