import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/app.scss';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Code from './components/Code';
import MusicPage from './components/MusicPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dansbook" component={AboutPage} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/music" component={MusicPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
