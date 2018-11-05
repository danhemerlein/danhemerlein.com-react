import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
            <div className="col-12 mr1 mb1">
              <Link to="/code">
                <HomeBox header="code" />            
              </Link>
            </div>
            <div className="col-12 ml1 mb1">
              <Link to="/music">
                <HomeBox header="music" />
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="col-12 mr1 mt1">
              <Link to="/moodboard">              
                <HomeBox header="moodboard" />
              </Link>
            </div>
            <div className="col-12 ml1 mt1">
              <Link to="keepintouch">
                <HomeBox header="keep in touch" />
              </Link>
            </div>
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