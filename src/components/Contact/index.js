import React, { Component } from "react";

import './Contact.scss'

import Header from '../Header';
import Footer from '../Footer';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="Contact">
          <h6>This is the contact page</h6>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
