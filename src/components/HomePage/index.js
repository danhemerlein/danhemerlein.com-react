import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './HomePage.scss';

import Header from '../Header';
import HomeBox from '../HomeBox';
import Footer from '../Footer';
import MoodboardIcon from '../icons/Moodboard';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <header>
          <Header />
        </header>
        <div className="my2 flex">
          <div className="flex flex-column col-12">
            <div className="HomePage__top-left col-12 mb1">
              <Link to="/code">
                <HomeBox header="code" />            
              </Link>
            </div>
            <div className="HomePage__bottom-left col-12 mt1">
              <Link to="/moodboard">
                <HomeBox 
                    header="moodboard"
                    icon={<MoodboardIcon />}
                />
              </Link>
            </div>

          </div>
          <div className="flex flex-column col-12">
            <div className="HomePage__top-right col-12 ml2 mb1">
              <Link to="/music">
                <HomeBox header="music" />
              </Link>
            </div>
            <div className="HomePage__bottom-right col-12 ml2 mt1">
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