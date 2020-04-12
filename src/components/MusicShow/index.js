import React, { Component } from "react";
import { Link } from "react-router-dom";
import debounce from "utils/debounce";

import Image from 'components/base/Image';
import PlayIcon from 'components/icons/Play';
import CalendarIcon from 'components/icons/Calendar';
import ChecklistIcon from 'components/icons/Checklist';

import './MusicShow.scss'

export default class MusicShow extends Component {
  setHeightMS = () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const MusicShow = document.querySelector('.MusicShow');

    const headerFooter = header.offsetHeight + footer.offsetHeight;
    const MSHeight = ((window.innerHeight - headerFooter) - 32);

    if (window.innerWidth >= 832) {
      MusicShow.style.height = MSHeight + "px";
    } else {
      MusicShow.style.height = "auto";
    }
  }

  debounceMSHeight = () => {
    debounce(this.setHeightMS(), 100);
  }

  componentDidMount = () => {
    this.setHeightMS();
    window.addEventListener("resize", this.debounceMSHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceMSHeight);
  }

  render() {
    return <div className="MusicShow flex items-center">
        <div className="col-12 md-col-4 pt2 flex justify-center">
          <Image src={this.props.project.fields.artwork.fields.file.url} alt={this.props.project.fields.artwork.fields.file.title} />
        </div>

        <div className="col-12 md-col-6">
          <div className="MusicShow__details-container flex justify-center items-center flex-column">
            <div className="block full-width">
              <h3 className="MusicShow__headline m0 body-serif full-width">
                {this.props.project.fields.title}
              </h3>
            </div>
            <h3 className="MusicShow__subheadline body-serif full-width">
              by {this.props.project.fields.artist}
            </h3>
            <div className="flex items-center full-width">
              <div className="col-11">
                <h3 className="body-serif">
                  {this.props.project.fields.releaseDate}
                </h3>
              </div>
            </div>
            <div className="flex items-center full-width">
              <div className="col-11">
                <h3 className="body-serif">
                  {this.props.project.fields.role}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <h3 className="full-width">
          <Link to={"/music/"}>
            <span className="body-serif">go back</span>
          </Link>
        </h3>
      </div>;
  }
}
