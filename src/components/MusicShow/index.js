import React, { Component } from "react";

import debounce from "utils/debounce";

import Image from 'components/base/Image';
import GoHomeBack from 'components/base/GoHomeBack';

import './MusicShow.scss'

export default class MusicShow extends Component {

  constructor(props) {
    super(props)

    this.state = {
       links: [],
    }
  }


  setHeightMS = () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const MusicShow = document.querySelector('.MusicShow');

    const headerFooter = header.offsetHeight + footer.offsetHeight;
    const MSHeight = ((window.innerHeight - headerFooter) - 32);

  }

  debounceMSHeight = () => {
    debounce(this.setHeightMS(), 100);
  }

  componentDidMount = () => {
    this.setHeightMS();
    window.addEventListener("resize", this.debounceMSHeight);

    var keys;

    this.props.project.fields.links.fields.map((link, key) => {
      keys = Object.keys(link);
    });

    this.setState({
      links: keys,
    })

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceMSHeight);
  }

  render() {
    return <div className="MusicShow flex items-center justify-between p3 mt2">
        <div className="col-12-dh md-col-8-dh lg-col-4-dh flex justify-center flex-column">
          <Image src={this.props.project.fields.artwork.fields.file.url} alt={this.props.project.fields.artwork.fields.file.title} />

          <div className="full-width mt1">
            <div className="MusicShow__details-container flex justify-center items-center flex-column">
              <div className="flex justify-between full-width">
                <h3 className="MusicShow__headline color-white m0 body-serif full-width">
                  {this.props.project.fields.title}
                </h3>

                <h3 className="MusicShow__subheadline color-white body-serif full-width text-right">
                  by {this.props.project.fields.artist}
                </h3>
              </div>

              <div className="flex justify-between full-width mt1">
                <h3 className="color-white  body-serif  text-lowercase">
                  {this.props.project.fields.releaseDate}
                </h3>

                <h3 className="color-white  body-serif  text-lowercase">
                  {this.props.project.fields.role}
                </h3>
              </div>
            </div>

            <div className="MusicShow__links-container mt2">
              {this.state.links.map((link, key) => {
                return (
                  <div className="color-white  body-serif flex justify-between full-width mb1" key={key}>
                    <span>{key}</span>
                    <a className="" href={this.props.project.fields.links.fields[0][link]} target="_blank" rel="noopener noreferrer" key={key}>
                      {link}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <GoHomeBack destination="/music/" cta="go back" white={true} />
      </div>;
  }
}
