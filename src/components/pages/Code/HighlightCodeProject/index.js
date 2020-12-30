import React from "react";
import "./styles.scss";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components'

const HighlightCodeProject = (props) => {
  const { project, gradientRotation, gradientStart, gradientEnd } = props;

  const HighlightCodeProject = styled.div`
    border: 1px solid #000;
    max-width: 60rem;
    margin-top: 1rem;
    padding: 2rem;
    width: 100%;
    background: linear-gradient(${gradientRotation}, ${gradientStart}, ${gradientEnd})};
  `
  return (
    <HighlightCodeProject>
      <div className="HighlightCodeProject flex flex-col items-center justify-center">
        <h4 className="HighlightCodeProject__title m0">
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

    </HighlightCodeProject>
  )

}

export default HighlightCodeProject
