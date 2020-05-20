import React, { Component } from 'react';
import { Link } from "react-router-dom";
import debounce from "utils/debounce";

import './HomePage.scss';

import HomeBox from 'components/HomeBox';

import WebsiteIcon from 'components/icons/Website';
import MusicIcon from 'components/icons/Music';
import MoodboardIcon from 'components/icons/Moodboard';
import ContactIcon from 'components/icons/Contact';

import WebsiteIconNew from 'components/icons/new/Website';

class HomePage extends Component {
  setHeightHP = () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const homePage = document.querySelector(".HomePage");

    const headerFooter = header.offsetHeight + footer.offsetHeight;

    // so the 64 here is the Site container paddding top and bottom which is 48px plus the HomePage's top margin of 16px

    const hpHeight = ((window.innerHeight - headerFooter) - 64);

    homePage.style.height = hpHeight + "px";
  }

  debounceHPHeight = () => {
    debounce(this.setHeightHP(), 100);
  }

  componentDidMount = () => {
    this.setHeightHP();
    window.addEventListener("resize", this.debounceHPHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceHPHeight);
  }

  render() {
    return (
      <div className="HomePage">
        <div className="flex full-height">
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
          <div className="flex flex-column col-12 ml1">
            <div className="HomePage__top-right col-12">
              <Link to="/music">
                <HomeBox
                    header="music"
                    icon={<MusicIcon />}
                />
              </Link>
            </div>
            <div className="HomePage__bottom-right col-12 mt1">
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
