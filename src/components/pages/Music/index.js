import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect, useDispatch } from "react-redux";

import { getMusicPageContent }  from "../../../store/actions/musicPage";

import Hero from "./MusicHero/"
import Sort from "./MusicSort/"

import Image from "components/base/Image";
import GoHomeBack from "components/base/GoHomeBack";

import "./MusicPage.scss";
import cx from "classnames";

const Music = (props) => {

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


  function handleChange (event) {
    setSort(event.target.value);

    if (event.target.value === "") {
      const k = props.projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      setActiveProjects(k);

    } else if (event.target.value === "most-recent") {

      const sorted = props.projects.sort(function (a, b) {
        return b.fields.releaseDateFormat - a.fields.releaseDateFormat;
      });

      setActiveProjects(sorted);

    } else if (event.target.value === "oldest") {

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

          <Sort handleChange={handleChange} />

          {activeProjects.map((project, key) => {

            return (
              <div
                key={key}
                className="Music__project flex col-12 md:col-6
                lg:col-3 body-serif"
              >
                <div className="Music__container flex relative">
                  <Link to={`/music/${project.fields.handle}`}>
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
                        <Link to={`/music/${project.fields.handle}`}>
                          {project.fields.title}
                        </Link>
                      </h4>
                      <h3
                        className={cx(
                          "Music__artist color-white"
                        )}
                      >
                        <Link to={`/music/${project.fields.handle}`}>
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

