import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect, useDispatch } from "react-redux";

import { getMusicPageContent }  from "../../../store/actions/musicPage";

import Hero from "./MusicHero/"
import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

import "./MusicPage.scss";
import cx from "classnames";

const Music = (props) => {

  // const { musicProjectsLoading, musicProjects } = props;
  const { musicPageLoading, musicPage, projects } = props;

  let [sort, setSort] = useState('default');
  let [activeProjects, setActiveProjects] = useState(projects);

  const dispatch = useDispatch();

  useEffect(() => {

    const loadContent = async () => {
      await dispatch(getMusicPageContent());
    }

    loadContent();

  }, [dispatch]);


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

  const content = projects.length && musicPage.length;

  if (musicPageLoading === false && !content) {
    return null;
  } else if (musicPageLoading === true && !content) {
    return <div className="p2">loading...</div>;
  } else {

    return (
      <div className="Music flex flex-wrap items-center justify-center">
        <Hero />

        <div className="Music__projects-container px3 pt3 flex items-center
        justify-center">
          <div className="Music__select-container full-width flex
          justify-center">
            <div className="flex flex-col">
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
                className="Music__project flex col-12 md:col-6
                lg:col-3 body-serif"
              >
                <div className="Music__container flex relative">
                  <Link to={`/music/${projectHandle}`}>
                    <Image
                      src={project.fields.artwork.fields.file.url}
                      alt={project.fields.artwork.fields.file.title}
                    />
                    <div className="Music__overlay bg-white color-black flex
                    justify-center flex-col items-center absolute l0 t0
                    r0 b0 w100 full-height p2">
                      <h3 className="Music__title">
                        {project.fields.title}
                      </h3>
                      <h4 className={cx("Music__artist")}>
                        by {project.fields.artist}
                      </h4>
                      <h5 className="Music__role bold
                      text-lowercase">
                        {project.fields.role}
                      </h5>
                    </div>
                  </Link>
                  <div className="Music__mobile-details-container">
                    <div>
                      <h4 className="Music__title color-white">
                        <Link to={`/music/${projectHandle}`}>
                          {project.fields.title}
                        </Link>
                      </h4>
                      <h3
                        className={cx(
                          "Music__artist color-white"
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
          <div className="w100 flex justify-center mb3">
            <GoHomeBack destination="/" cta="go back" white={true} />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    musicPageLoading:     state.musicPage.loading,
    musicPage:            state.musicPage.content,
  }
}

export default connect(mapStateToProps)(Music);

