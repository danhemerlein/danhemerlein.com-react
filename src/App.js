import React, { Component } from 'react';
import Header from './Header';
import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
