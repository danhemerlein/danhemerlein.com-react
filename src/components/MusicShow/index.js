import React, { Component } from "react";
import { Link } from "react-router-dom";
import debounce from "utils/debounce";

import Image from 'components/base/Image';
import PlayIcon from 'components/icons/Play';
import CalendarIcon from 'components/icons/Calendar';
import ChecklistIcon from 'components/icons/Checklist';

import './MusicShow.scss'

export default class MusicShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      project: (this.props.projects[this.props.match.params.id - 1]),
      image: (this.props.images[this.props.match.params.id - 1])
    }
  }

  setHeightMS = () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const MusicShow = document.querySelector('.MusicShow');

    const headerFooter = header.offsetHeight + footer.offsetHeight;
    const MSHeight = ((window.innerHeight - headerFooter) - 32);
    console.log(MSHeight);
    console.log(headerFooter);
    console.log(window.innerHeight);

    MusicShow.style.height = MSHeight + "px";
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
    return (
      <div className="MusicShow flex justify-center">
        <div className="pt2 col-12 md-col-6">
          <Image src={this.state.image.fields.file.url} alt={this.state.image.fields.title} />
        </div>
        <div className="col-12 md-col-6">
          <div className="MusicShow__details-container flex justify-center items-center flex-column">
            <a href={this.state.project.link} className="block full-width" target="_blank" rel="noopener noreferrer">
            <h3 className="MusicShow__headline m0 body-serif full-width">{this.state.project.title.toUpperCase()}</h3>
            </a>
            <h3 className="MusicShow__subheadline body-serif full-width">BY {this.state.project.artist.toUpperCase()}</h3>
            <div className="flex items-center full-width">
              <div className="col-1">
                <CalendarIcon />
              </div>
              <div className="col-11">
                <h3 className="body-serif">{this.state.project.releaseDate.toUpperCase()}</h3>
              </div>
            </div>
            <div className="flex items-center full-width">
              <div className="col-1">
                <ChecklistIcon />
              </div>
              <div className="col-11">
                <h3 className="body-serif">{this.state.project.role.toUpperCase()}</h3>
              </div>
            </div>
            <a href={this.state.project.link} className="block full-width" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center full-width">
                <div className="col-1">
                  <PlayIcon />
                </div>
                <div className="col-11">
                  <h3 className="body-serif">LAUNCH PROJECT</h3>
                </div>
              </div>
            </a>
            <h3 className="full-width"><Link to={'/music/'}><span className="body-serif">GO BACK</span></Link></h3>
          </div>
        </div>
      </div>
    )
  }
}