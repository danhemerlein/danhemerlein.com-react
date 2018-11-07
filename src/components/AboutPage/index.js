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
        <div className="AboutPage flex justify-center">
          
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default AboutPage;