import React from "react";
import "./styles.scss";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components'

const HighlightCodeProject = (props) => {
  const { project, index } = props;

  return (
    <div className="HighlightCodeProject mt1 p2 w100 body-serif">
      <div className="flex flex-col items-center justify-center">
        <h4 className="TopCodeProject__title m0">
          {project.fields.title}
        </h4>

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

export default HighlightCodeProject
