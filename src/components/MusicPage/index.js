import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from 'components/base/Image';
import GoHomeBack from "components/base/GoHomeBack";

import './MusicPage.scss'
import cx from "classnames";

export default class MusicPage extends Component {

  render() {
    const heroStyle = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + this.props.comingSoonImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundSize: 'cover',
      overflow: 'hidden',
    };
    return (
      <div className="MusicPage flex flex-wrap items-center justify-center">
        <div className="MusicPage__hero full-width">
          <div className="relative full-height full-width">
            <a
              href="https://www.minikitmusic.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            var projectHandle = project.fields.title
              .replace(/[^a-zA-Z0-9 ]/g, "")
              .replace(/ /g, "-")
              .toLowerCase();

            return (
              <div
                key={key}
                data-wrote={project.fields.wrote}
                data-produced={project.fields.produced}
                data-performed={project.fields.performed}
                className="MusicPage__project flex col-12-dh  md-col-4-dh  lg-col-3-dh"
              >
                <div className="MusicPage__container flex relative">
                  <Link to={`/music/${projectHandle}`} className="">
                    <Image
                      src={project.fields.artwork.fields.file.url}
                      alt={project.fields.artwork.fields.file.title}
                    />
                    <div className="MusicPage__overlay bg-white color-black flex justify-center flex-column items-center absolute left-0 top-0 right-0 bottom-0 full-width full-height">
                      <h3 className="MusicPage__title body-serif">
                        {project.fields.title}
                      </h3>
                      <h4
                        className={cx("MusicPage__artist body-serif")}
                      >
                        by {project.fields.artist}
                      </h4>
                      <h5 className="MusicPage__role body-serif bold text-lowercase">
                        {project.fields.role}
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="full-width flex justify-center mb3">
            <GoHomeBack destination="/" cta="go back" white={true} />
          </div>
        </div>
      </div>
    );
  }
}
