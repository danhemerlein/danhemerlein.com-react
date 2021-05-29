import GoHomeBack from "components/base/GoHomeBack";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getMusicPageContent } from "../../../store/actions/musicPage";
import MusicHero from "./MusicHero";
import "./MusicPage.scss";
import MusicSort from "./MusicSort";
import ProjectPreview from "./ProjectPreview";

const Music = (props) => {
  const { musicPageLoading, musicPage, projects } = props;

  const [sort, setSort] = useState("default");
  const [activeProjects, setActiveProjects] = useState(projects);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadContent = async () => {
      await dispatch(getMusicPageContent());
    };

    loadContent();
  }, [dispatch]);

  function handleChange(event) {
    console.log(sort);
    setSort(event.target.value);

    if (event.target.value === "") {
      const sorted = props.projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      setActiveProjects(sorted);
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
      const sorted = props.projects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });

      const filtered = sorted.filter(function (project) {
        return project.fields[event.target.value];
      });

      setActiveProjects(filtered);
    }
  }

  const content = projects.length && musicPage.length;

  if (musicPageLoading === false && !content) {
    return null;
  }
  if (musicPageLoading === true && !content) {
    return <div className="p2">loading...</div>;
  }

  return (
    <div className="Music flex flex-wrap items-center justify-center my1">
      <MusicHero />

      <div
        className="Music__projects-container px3 pt3 flex items-center
        justify-center flex-col flex-wrap md:flex-row"
      >
        <MusicSort handleChange={handleChange} />

        {activeProjects.map((project) => {
          return <ProjectPreview project={project} key={project} />;
        })}

        <div className="w100 flex justify-center mb3">
          <GoHomeBack destination="/" cta="go back" white />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicPageLoading: state.musicPage.loading,
    musicPage: state.musicPage.content,
  };
};

export default connect(mapStateToProps)(Music);
