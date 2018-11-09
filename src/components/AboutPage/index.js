import React, { Component } from 'react';

import './AboutPage.scss';

import Header from '../Header';
import Footer from '../Footer';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="AboutPage">
          this is the about page
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default AboutPage;