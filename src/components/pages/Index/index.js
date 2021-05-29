import CodeIcon from "components/base/icons/Code";
import ContactIcon from "components/base/icons/Contact";
import MoodboardIcon from "components/base/icons/Moodboard";
import MusicIcon from "components/base/icons/Music";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import debounce from "utils/debounce";
import HomeBox from "./HomeBox";
import "./Index.scss";

class Index extends Component {
  componentDidMount = () => {
    this.setHeightHP();
    window.addEventListener("resize", this.debounceHPHeight);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceHPHeight);
  }

  setHeightHP = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const indexPage = document.querySelector(".Index");

    const headerFooter = header.offsetHeight + footer.offsetHeight;

    // so the 64 here is the Site container paddding top and bottom which is 48px plus the indexPage's top margin of 16px

    if (window.innerWidth >= 720) {
      const hpHeight = window.innerHeight - headerFooter - 64;
      indexPage.style.height = `${hpHeight}px`;
    } else {
      indexPage.style.height = "auto";
    }
  };

  debounceHPHeight = () => {
    debounce(this.setHeightHP(), 100);
  };

  render() {
    return (
      <div className="Index mt1 mb1 md:mb0">
        <div className="flex h100 flex-col md:flex-row">
          <div className="flex flex-row md:flex-col w100 flex-wrap md:flex-nowrap">
            <div className="Index__top-left w100">
              <Link to="/code">
                <HomeBox header="code" icon={<CodeIcon />} />
              </Link>
            </div>

            <div className="Index__bottom-left w100 mt1 none md:block">
              <Link to="/moodboard">
                <HomeBox header="moodboard" icon={<MoodboardIcon />} />
              </Link>
            </div>

            <div className="Index__bottom-left w100 mt1 md:mt0 block md:none">
              <Link to="/music">
                <HomeBox header="music" icon={<MusicIcon />} />
              </Link>
            </div>
          </div>

          <div className="flex flex-row md:flex-col w100 md:ml1 flex-wrap md:flex-nowrap">
            <div className="Index__top-right w100 mt1 md:mt0 none md:block">
              <Link to="/music">
                <HomeBox header="music" icon={<MusicIcon />} />
              </Link>
            </div>

            <div className="Index__top-right w100 mt1 block md:none">
              <Link to="/moodboard">
                <HomeBox header="moodboard" icon={<MoodboardIcon />} />
              </Link>
            </div>

            <div className="Index__bottom-right w100 mt1">
              <Link to="about">
                <HomeBox header="about" icon={<ContactIcon />} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
