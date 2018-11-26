import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './HomePage.scss';

import HomeBox from '../HomeBox';
import MoodboardIcon from '../icons/Moodboard';
import MusicIcon from '../icons/Music';
import WebsiteIcon from '../icons/Website';
import ContactIcon from '../icons/Contact';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="my2 flex">
          <div className="flex flex-column col-12">
            <div className="HomePage__top-left col-12">
              <Link to="/code">
                <HomeBox
                    header="code"
                    icon={<WebsiteIcon />}
                />
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
            <div className="HomePage__top-right col-12 ml1">
              <Link to="/music">
                <HomeBox
                    header="music"
                    icon={<MusicIcon />}
                />
              </Link>
            </div>
            <div className="HomePage__bottom-right col-12 ml1 mt1">
              <Link to="keep-in-touch">
                <HomeBox
                    header="keep in touch"
                    icon={<ContactIcon />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;