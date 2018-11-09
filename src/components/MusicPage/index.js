import React, { Component } from "react";

import './MusicPage.scss'

import Header from '../Header';
import Footer from '../Footer';

export default class MusicPage extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="MusicPage">
          <h6>This is the music page</h6>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
