import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { getMusicPageContent }  from "../../../store/actions/musicPage";

import Hero from "./MusicHero/"
import Sort from "./MusicSort/"
import ProjectPreview from "./ProjectPreview/"

import GoHomeBack from "components/base/GoHomeBack";

import "./MusicPage.scss";

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
      <div className="Music flex flex-wrap items-center justify-center my1">

        <Hero />

        <div className="Music__projects-container px3 pt3 flex items-center
        justify-center flex-col flex-wrap md:flex-row">

          <Sort handleChange={handleChange} />

          {activeProjects.map((project, key) => {
            return (
              <ProjectPreview project={project} key={key} />
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

