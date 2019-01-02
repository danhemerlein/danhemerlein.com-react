import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from 'components/base/Image';

import './MusicPage.scss'
import cx from "classnames";

export default class MusicPage extends Component {

  render() {
    const comingSoonStyle = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + this.props.comingSoonImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundSize: 'cover',
      overflow: 'hidden',
    };
    return <div className="MusicPage mt2 flex flex-wrap items-center justify-center">
        <div className="MusicPage__coming-soon-block full-width">
          <div className="MusicPage__container relative full-height full-width">
            <a href="https://www.minikitmusic.com" target="_blank" rel="noopener noreferrer">
              <div style={comingSoonStyle} className="flex justify-between">
                <h3 className="MusicPage__coming-soon-text MusicPage__coming-soon-text--title p2 text-white body-serif m0">
                  minikit
                </h3>
                <h3 className="MusicPage__coming-soon-sub-text MusicPage__coming-soon-text--message p2 text-white body-serif m0 flex items-end">
                  coming this winter
                </h3>
              </div>
            </a>
          </div>
        </div>
        {this.props.projects.map((project, key) => {
          let longArtist = false;
          if (project.artist.length > 30) {
            longArtist = true;
          }
          return <div key={key} className="col-12 md-col-4 flex flex-column items-center justify-center">
              <div className="col-11">
                <Link to={`/music/${project.id}`}>
                  <div className="MusicPage__container relative">
                    <div>
                      <Image src={this.props.images[key].fields.file.url} alt={this.props.images[key].fields.title} />
                    </div>
                    <div className="MusicPage__overlay bg-white flex justify-center flex-column items-center absolute left-0 top-0 right-0 bottom-0 full-width full-height">
                      <h3 className="MusicPage__title body-serif m0">
                        {project.title}
                      </h3>
                      <h4 className={cx("MusicPage__artist body-serif m0", { rem: longArtist === true })}>by {project.artist}</h4>
                      <h5 className="MusicPage__role body-serif bold m0">
                        {project.role.toLowerCase()}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>;
        })}
        <Link to="/" className="go-home body-serif">
          Go Home
        </Link>
      </div>;
  }
}
