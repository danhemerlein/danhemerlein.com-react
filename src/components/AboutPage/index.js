import React, { Component } from 'react';

import './AboutPage.scss';

import Header from '../Header';
import HomeBox from '../HomeBox';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <h1>This is the about page</h1>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;