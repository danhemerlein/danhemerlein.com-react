import React, { Component } from "react";

// import debounce from "utils/debounce";

import Image from 'components/base/Image';
import GoHomeBack from 'components/base/GoHomeBack';

import './MusicShow.scss'

export default class MusicShow extends Component {

  constructor(props) {
    super(props)

    this.state = {
      linkKeys: ["spotify", "bandcamp", "apple", "tidal", "amazon", "deezer", "napster", "google play", "soundcloud"],
      links: []
    };
  }

  componentDidMount = () => {

    let k = [];

    for (let key of this.state.linkKeys) {
      let o = {
        title: '',
        link: ''
      };

      if (key === "google play") {
        // o["google play"] = this.props.project.fields["googlePlay"];
        o.title = "google play";
        o.link = this.props.project.fields["googlePlay"];

        if (this.props.project.fields[key] !== undefined) {
          k.push(o);
        }

      } else {
        o.title = key;
        o.link = this.props.project.fields[key];
        if (this.props.project.fields[key] !== undefined) {
          k.push(o)
        }
      }
    }
    this.setState({ links: k });
  }

  render() {

    const renderArtistATag = () => {
      if (this.props.project.fields.artistWebsite !== undefined) {
        return <div className="MusicShow__artist-link">
              <h3 className="MusicShow__subheadline color-white body-serif full-width text-right">
            by <a href={this.props.project.fields.artistWebsite} target="_blank" rel="noopener noreferrer">
                {this.props.project.fields.artist}
            </a>
              </h3>
          </div>;
      } else {
        return <h3 className="MusicShow__subheadline color-white body-serif full-width text-right">
            by {this.props.project.fields.artist}
          </h3>;
      }
    };

    return <div className="MusicShow flex items-center justify-between flex-column">
        <div className="col-12-dh md-col-8-dh lg-col-4-dh flex justify-center flex-column">
          <Image src={this.props.project.fields.artwork.fields.file.url} alt={this.props.project.fields.artwork.fields.file.title} />

          <div className="full-width mt1">
            <div className="MusicShow__details-container flex justify-center items-center flex-column">
              <div className="flex justify-between full-width">
                <h3 className="MusicShow__headline color-white m0 body-serif">
                  {this.props.project.fields.title}
                </h3>
                {renderArtistATag()}
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
                let hasLink = false;
                if (link.link !== undefined) {
                  hasLink = true;
                }
                if (hasLink) {
                  return (
                    <div className="color-white  body-serif flex justify-between full-width mb1" key={key}>
                      <span>{key}</span>
                      <a className="" href={link.link} target="_blank" rel="noopener noreferrer" key={key}>
                        {link.title}
                      </a>
                    </div>
                  );
                } else {

                  return null;
                }

              })}
            </div>

          </div>
        </div>
        <GoHomeBack destination="/music/" cta="go back" white={true} />
      </div>;
  }
}
