import React, { Component } from 'react';

import './HomePage.scss';

import Header from '../Header';
import HomeBox from '../HomeBox';
import Footer from '../Footer';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <header>
          <Header />
        </header>
        <div className="my2">
          <div className="flex">
            <HomeBox header="code" />
            <HomeBox header="music" />
          </div>
          <div className="flex">
            <HomeBox header="moodboard" />
            <HomeBox header="keep in touch" />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default HomePage;