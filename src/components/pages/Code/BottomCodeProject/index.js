import React from "react";
import "./styles.scss";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BottomCodeProject = (props) => {
  const { project } = props;

  return (
    <div className="BottomCodeProject p2 mt1 w100">
    <div className="flex justify-center items-center md:items-start flex-col">
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

    <div className="BottomCodeProject__content mt2">
      {project.fields.description.content.map((node, key) => documentToReactComponents(node))}
    </div>
  </div>
  )
}

export default BottomCodeProject
