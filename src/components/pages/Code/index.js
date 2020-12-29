import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { getCodeProjectsContent } from "../../../store/actions/codeProjects";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GoHomeBack from "components/base/GoHomeBack";
import TopCodeProject from './TopCodeProject';
import HighlightCodeProject from './HighlightCodeProject';
import cx from "classnames";

import './Code.scss'

const Code = (props) => {

  const { codeProjectsLoading, codeProjects } = props;

  // console.log(codeProjects);

  const topLinks = codeProjects.topLinks;
  const listLinks = codeProjects.listLinks;
  const bottomLinks = codeProjects.bottomLinks;
  const highlight  = codeProjects.highlight;

  console.log(highlight)

  // TODO
  // ADD THE HIGHLIGHT PROJECT!!

  // console.log(codeProjects);
  const codeProjectsLength = Object.keys(codeProjects).length;

  const dispatch = useDispatch();

  useEffect(() => {

    const loadContent = async () => {
      await dispatch(getCodeProjectsContent());
    }

    loadContent();

  }, [dispatch]);

  if (codeProjectsLoading === false && !codeProjectsLength) {
    return null;
  } else if (codeProjectsLoading === true && !codeProjectsLength) {
    return <div className="p2">loading...</div>;
  } else {
    return (
      <div className="Code flex items-center justify-center flex-col">

        {topLinks.map((project, key) => {
          return (
            <TopCodeProject project={project} index={key} key={key} />
          )
        })}

        {highlight.map((project, key) => {
          return (
            <HighlightCodeProject project={project} index={key} key={key} />
          )
        })}

        <div className="Code__list-link-container  full-width  flex  flex-col  items-center body-serif">
          <p className="px2  full-width">
            In my spare time, I enjoy developing, hosting and maintaining
            websites for my musician friends. Below are few recent selections.
          </p>

          <div className="Code__list-links-container flex col-12 md-col-8-dh">
            {listLinks.map((project, key) => {
              return (
                <div key={key} className="Code__list-link col-12 md-col-6-dh">
                  <div className="Code__title-container flex">
                    <a
                      href={project.fields.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <h4 className="Code__list-link-title m0 body-serif">
                        {project.fields.title}
                      </h4>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Code__list-link-container  w100  flex  flex-col  items-center  mt2">
          <p className="px2  w100">
            Below are a few{" "}
            <span className="Code__markdown bg-solitude">just for fun</span>{" "}
            projects I've done:
          </p>
          <div className="mt2">
            {bottomLinks.map((project, key) => {
              return (
                <div
                  key={key}
                  className={cx(
                    "Code__project Code__project-bottom p2 w100"
                  )}
                >
                  <div className="Code__title-container flex">
                    <a
                      href={project.fields.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4 className="Code__title m0 ">
                        {project.fields.title}
                      </h4>
                    </a>
                    <h4 className="Code__timeline ">
                      ({project.fields.timelineLaunchDate})
                    </h4>
                  </div>

                  <div className=" mt2">
                    {documentToReactComponents(
                      project.fields.description.content[0]
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt2">
          <GoHomeBack destination="/" cta="go home" white={false} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    codeProjectsLoading:  state.codeProjects.loading,
    codeProjects:         state.codeProjects.content,
  }
}

export default connect(mapStateToProps)(Code);
