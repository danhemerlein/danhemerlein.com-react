import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as contentful from 'contentful';
import keys from './config';

import './styles/app.scss';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Code from './components/Code';
import MusicPage from './components/MusicPage';
import Contact from './components/Contact';
import Moodboard from './components/Moodboard';
import Header from './components/Header';
import Footer from './components/Footer';

const client = contentful.createClient({
  space: keys.spaceId,
  accessToken: keys.accessToken
})

client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if (entry.fields) {
      console.log(entry.fields)
    }
  })
})


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <header>
              <Header />
            </header>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dansbook" component={AboutPage} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/music" component={MusicPage} />
            <Route exact path="/keepintouch" component={Contact} />
            <Route exact path="/moodboard" component={Moodboard} />
            <footer>
              <Footer />
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
