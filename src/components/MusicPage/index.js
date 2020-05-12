import React, { Component } from "react";
import { Link } from "react-router-dom";

import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

import "./MusicPage.scss";
import cx from "classnames";

export default class MusicPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: "default",
      activeProjects: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);

    if (event.target.value === "") {
      this.setState({
        sort: "default",
        activeProjects: this.props.projects,
      });
    } else {
      let k = this.props.projects.filter(function(project) {
        return project.fields[event.target.value];
      });

      this.setState({
        sort: event.target.value,
        activeProjects: k,
      });
    }

  }

  componentDidMount() {
    this.setState({
      activeProjects: this.props.projects,
    });
  }

  render() {
    const heroStyle = {
      width: "100%",
      height: "100%",
      backgroundImage:
        "url(" + this.props.comingSoonImage.fields.file.url + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      overflow: "hidden",
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
          <div className="MusicPage__select-container full-width flex justify-center">
            <div className="flex flex-column">
              <label for="sort" className="MusicPage__label  body-serif">
                sort
              </label>
              <select name="sort" id="sort" onChange={this.handleChange}>
                <option value="">default</option>
                <option value="wrote">wrote</option>
                <option value="produced">produced</option>
                <option value="performed">perfomed</option>
                <option value="most-recent">most recent</option>
                <option value="oldest">oldest</option>
              </select>
            </div>
          </div>
          {this.state.activeProjects.map((project, key) => {
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
                data-released={project.fields.releaseDate}
                className="MusicPage__project flex col-12-dh  md-col-6-dh  lg-col-3-dh"
              >
                <div className="MusicPage__container flex relative">
                  <Link to={`/music/${projectHandle}`}>
                    <Image
                      src={project.fields.artwork.fields.file.url}
                      alt={project.fields.artwork.fields.file.title}
                    />
                    <div className="MusicPage__overlay bg-white color-black flex justify-center flex-column items-center absolute left-0 top-0 right-0 bottom-0 full-width full-height">
                      <h3 className="MusicPage__title body-serif">
                        {project.fields.title}
                      </h3>
                      <h4 className={cx("MusicPage__artist body-serif")}>
                        by {project.fields.artist}
                      </h4>
                      <h5 className="MusicPage__role body-serif bold text-lowercase">
                        {project.fields.role}
                      </h5>
                    </div>
                  </Link>
                  <div className="MusicPage__mobile-details-container">
                    <div>
                      <h4 className="MusicPage__title color-white body-serif">
                        <Link to={`/music/${projectHandle}`}>
                          {project.fields.title}
                        </Link>
                      </h4>
                      <h3
                        className={cx(
                          "MusicPage__artist color-white body-serif"
                        )}
                      >
                        <Link to={`/music/${projectHandle}`}>
                          by {project.fields.artist}
                        </Link>
                      </h3>
                    </div>
                    {/* <div>
                      <h3 className="MusicPage__mobile-details-container-release color-white  body-serif  text-lowercase text-right">
                        {project.fields.releaseDate}
                      </h3>
                      <h3 className="MusicPage__mobile-details-role color-white  body-serif  text-lowercase">
                        {project.fields.role}
                      </h3>
                    </div> */}
                  </div>
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
