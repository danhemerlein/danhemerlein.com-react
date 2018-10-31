import React, { Component } from 'react';

import './styles/app.scss';

import Header from './components/Header';
import HomeBox from './components/HomeBox';
import Footer from './components/Footer';

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
