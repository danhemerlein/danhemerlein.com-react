import React from "react";
import "./styles.scss";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BottomCodeProject = (props) => {
  const { project } = props;

  return (
    <div className="BottomCodeProject Code__project Code__project-bottom p2 mt1 w100">
    <div className="Code__title-container flex">
      <a
        href={project.fields.link}
        target="_blank"
        rel="noopener noreferrer"
        className="BottomCodeProject__a"
      >
        <h4 className="BottomCodeProject__title m0">
          {project.fields.title}
        </h4>
      </a>
      <h4 className="mt_5">
        ({project.fields.timelineLaunchDate})
      </h4>
    </div>

    <div className="mt2">
      {documentToReactComponents(
        project.fields.description.content[0]
      )}
    </div>
  </div>
  )
}

export default BottomCodeProject
