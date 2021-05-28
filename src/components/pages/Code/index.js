import GoHomeBack from "components/base/GoHomeBack";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getCodeProjectsContent } from "../../../store/actions/codeProjects";
import BottomCodeProject from "./BottomCodeProject";
import "./Code.scss";
import HighlightCodeProject from "./HighlightCodeProject";
import ListLinkCodeProject from "./ListLinkCodeProject";
import TopCodeProject from "./TopCodeProject";

const Code = (props) => {
  const { codeProjectsLoading, codeProjects } = props;

  const { topLinks, listLinks, bottomLinks, highlight } = codeProjects;

  const codeProjectsLength = Object.keys(codeProjects).length;

  const dispatch = useDispatch();

  useEffect(() => {
    const loadContent = async () => {
      await dispatch(getCodeProjectsContent());
    };

    loadContent();
  }, [dispatch]);

  if (codeProjectsLoading === false && !codeProjectsLength) {
    return null;
  }
  if (codeProjectsLoading === true && !codeProjectsLength) {
    return <div className="p2">loading...</div>;
  }
  return (
    <div className="Code flex items-center justify-center flex-col body-serif my1">
      {topLinks.map((project, key) => {
        return <TopCodeProject project={project} index={key} key={key} />;
      })}

      {highlight.map((project, key) => {
        return (
          <HighlightCodeProject
            project={project}
            index={key}
            key={key}
            gradientRotation="45deg"
            gradientStart="#fff"
            gradientEnd="#ff6ad5"
          />
        );
      })}

      <div className="Code__list-link-container  w100  flex  flex-col  items-center">
        <p className="px2  w100">
          In my spare time, I enjoy developing, hosting and maintaining websites
          for my musician friends. Below are few recent selections.
        </p>

        <div className="Code__list-links-container flex col-12 md:col-8">
          {listLinks.map((project, key) => {
            return (
              <ListLinkCodeProject project={project} index={key} key={key} />
            );
          })}
        </div>
      </div>

      <div className="Code__list-link-container w100 flex flex-col items-center mt2">
        <p className="px2  w100">
          Below are a few{" "}
          <span className="Code__markdown p_25 color-red bg-solitude">
            just for fun
          </span>{" "}
          projects I'm working on in various states of completion:
        </p>

        <div className="mt2">
          {bottomLinks.map((project, key) => {
            return (
              <BottomCodeProject project={project} index={key} key={key} />
            );
          })}
        </div>
      </div>

      <div className="mt2">
        <GoHomeBack destination="/" cta="go home" white={false} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    codeProjectsLoading: state.codeProjects.loading,
    codeProjects: state.codeProjects.content,
  };
};

export default connect(mapStateToProps)(Code);
