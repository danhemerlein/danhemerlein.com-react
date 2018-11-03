import React, { Component } from 'react';

import './HomePage.scss';

import Header from '../Header';
import HomeBox from '../HomeBox';
import Footer from '../Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div class="my2">
          <div class="flex">
            <HomeBox header="code" />
            <HomeBox header="music" />
          </div>
          <div class="flex">
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