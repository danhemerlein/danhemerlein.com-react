import React, { Component } from 'react';

import './styles/app.scss';

import Header from './Header';
import HomeBox from './HomeBox';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div class="my2">
          <div class="flex">
            <HomeBox header="code"/>
            <HomeBox header="music" />
          </div>
          <div class="flex">
            <HomeBox header="moodboard" />
            <HomeBox header="contact" />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
