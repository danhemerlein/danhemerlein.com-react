import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from 'react-responsive'
import breakpoints from "../../../utils/breakpoints";

import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

import "./MusicPage.scss";
import cx from "classnames";

const Music = (props) => {

  const isTabletUp = useMediaQuery({
    query: breakpoints.tablet,
  });

  let [sort, setSort] = useState('default');
  let [activeProjects, setActiveProjects] = useState(props.projects);

  function addDateTime(arr) {
    arr.map(function (project) {
      let date = project.fields.releaseDate;

      const months = {
        January: "01",
        February: "02",
        March: "03",
        April: "04",
        May: "05",
        June: "06",
        July: "07",
        August: "08",
        September: "09",
        October: "10",
        November: "11",
        December: "12",
      };

      date = date.replace(",", "").split(" ");
      let year = date[2];
      let day = date[1];
      let month = months[date[0]];
      let dateFormat = year + "-" + month + "-" + day;
      var d = new Date(dateFormat);

      project.fields["releaseDateFormat"] = d;
    });
  }

  function handleChange (event) {
    setSort(event.target.value);

    if (event.target.value === "") {
      const k = props.projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      setActiveProjects(k);

    } else if (event.target.value === "most-recent") {
      addDateTime(props.projects);

      const sorted = props.projects.sort(function (a, b) {
        return b.fields.releaseDateFormat - a.fields.releaseDateFormat;
      });

      setActiveProjects(sorted);

    } else if (event.target.value === "oldest") {
      addDateTime(props.projects);

      const sorted = props.projects.sort(function (a, b) {
        return a.fields.releaseDateFormat - b.fields.releaseDateFormat;
      });

      setActiveProjects(sorted);

    } else {
      const k = props.projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      let j = k.filter(function (project) {
        return project.fields[event.target.value];
      });

      setActiveProjects(j);
    }

  }

  const heroStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: !isTabletUp
        ? "url(" + props.heroImageMobile.fields.file.url + ")"
        : "url(" + props.heroImageDesktop.fields.file.url + ")",
    backgroundColor: !isTabletUp ? "#8C8582" : "#E6D98C",
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflow: "hidden",
  };

  return (
    <div className="Music flex flex-wrap items-center justify-center">
      <div className="Music__hero full-width">
        <div className="relative full-height full-width">
          <a
            href="https://open.spotify.com/artist/0XUXCG6cSY7D6r4KmtCErS?si=bYvY6olVS1ekKR5c2CtBbA"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div
            style={heroStyle}
            className="flex justify-between relative"
          >
            <h3 className="Music__hero-text--headline text-white
            body-serif absolute">
              minikit
            </h3>
            <h3 className="Music__hero-text--sub-headline text-white
            body-serif absolute bg-black">
              '400 Coffees' available everywhere now
            </h3>
          </div>
          </a>
        </div>
      </div>

      <div className="Music__projects-container px3 pt3 flex items-center
      justify-center">
        <div className="Music__select-container full-width flex
        justify-center">
          <div className="flex flex-column">
            <label
              htmlFor="sort"
              className="Music__label  body-serif  text-white"
            >
              sort
            </label>
            <select
              name="sort"
              id="sort"
              onChange={(event) => handleChange(event)}
              className="Music__select"
            >
              <option value="">default</option>
              <option value="most-recent">most recent</option>
              <option value="oldest">oldest</option>
              <option value="wrote">wrote</option>
              <option value="produced">produced</option>
              <option value="performed">perfomed</option>
            </select>
          </div>
        </div>
        {activeProjects.map((project, key) => {
          var projectHandle = project.fields.title
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/ /g, "-")
            .toLowerCase();

          return (
            <div
              key={key}
              className="Music__project flex col-12-dh  md-col-6-dh
              lg-col-3-dh"
            >
              <div className="Music__container flex relative">
                <Link to={`/music/${projectHandle}`}>
                  <Image
                    src={project.fields.artwork.fields.file.url}
                    alt={project.fields.artwork.fields.file.title}
                  />
                  <div className="Music__overlay bg-white color-black flex
                  justify-center flex-column items-center absolute left-0 top-0
                  right-0 bottom-0 full-width full-height p2">
                    <h3 className="Music__title body-serif">
                      {project.fields.title}
                    </h3>
                    <h4 className={cx("Music__artist body-serif")}>
                      by {project.fields.artist}
                    </h4>
                    <h5 className="Music__role body-serif bold
                    text-lowercase">
                      {project.fields.role}
                    </h5>
                  </div>
                </Link>
                <div className="Music__mobile-details-container">
                  <div>
                    <h4 className="Music__title color-white body-serif">
                      <Link to={`/music/${projectHandle}`}>
                        {project.fields.title}
                      </Link>
                    </h4>
                    <h3
                      className={cx(
                        "Music__artist color-white body-serif"
                      )}
                    >
                      <Link to={`/music/${projectHandle}`}>
                        by {project.fields.artist}
                      </Link>
                    </h3>
                  </div>
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
};

export default Music;
