import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from 'components/base/Image';

import './MusicPage.scss'
import cx from "classnames";

export default class MusicPage extends Component {

  componentDidMount() {
    console.log(this.props.projects);
  }

  render() {
    const heroStyle = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + this.props.comingSoonImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundSize: 'cover',
      overflow: 'hidden',
    };
    return <div className="MusicPage mt2 flex flex-wrap items-center justify-center">
        <div className="MusicPage__hero full-width">
          <div className="MusicPage__container relative full-height full-width">
            <a href="https://www.minikitmusic.com" target="_blank" rel="noopener noreferrer">
              <div style={heroStyle} className="flex justify-between relative">
                <h3 className="MusicPage__hero-text--headline text-white body-serif absolute">
                  minikit
                </h3>
                <h3 className="MusicPage__hero-text--sub-headline text-white body-serif absolute bg-black">
                  '400 Coffees' available everywhere now
                </h3>
              </div>
            </a>
          </div>
        </div>
        <div className="MusicPage__projects-container px3 pt3 flex items-center justify-center">
          {this.props.projects.map((project, key) => {
            let longArtist = false;
            var projectHandle = project.fields.title
              .replace(/[^a-zA-Z0-9 ]/g, "")
              .replace(/ /g, "-")
              .toLowerCase();
            if (project.fields.artist.length > 30) {
              longArtist = true;
            }
            return <div key={key} className="MusicPage__project flex col-12 md-col-4 lg-col-3">
              <div className="MusicPage__container flex relative mx2">
                <Link to={`/music/${projectHandle}`} className="">
                      <Image src={project.fields.artwork.fields.file.url} alt={project.fields.artwork.fields.file.title} />
                      <div className="MusicPage__overlay bg-white color-black flex justify-center flex-column items-center absolute left-0 top-0 right-0 bottom-0 full-width full-height">
                        <h3 className="MusicPage__title body-serif m0">
                          {project.fields.title}
                        </h3>
                        <h4 className={cx(
                            "MusicPage__artist body-serif m0",
                            {
                              rem: longArtist === true
                            }
                          )}>
                          by {project.fields.artist}
                        </h4>
                        <h5 className="MusicPage__role body-serif bold m0 text-lowercase">
                          {project.fields.role}
                        </h5>
                      </div>
                  </Link>
                </div>
              </div>;
          })}
        </div>
        <Link to="/" className="go-home body-serif">
          Go Home
        </Link>
      </div>;
  }
}
