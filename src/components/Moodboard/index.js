import React, { Component } from "react";

import './Moodboard.scss'

import Header from '../Header';
import Footer from '../Footer';

export default class Moodboard extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="Moodboard">
          <h6>This is the moodboard</h6>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}