import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './styles/app.scss';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dansbook" component={AboutPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
