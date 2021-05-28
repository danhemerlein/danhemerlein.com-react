import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import styled from "styled-components";
import "./styles.scss";

const HighlightCodeProject = ({
  project,
  gradientRotation,
  gradientStart,
  gradientEnd,
}) => {
  const Container = styled.div`
    border: 1px solid #000;
    max-width: 60rem;
    margin-top: 1rem;
    padding: 2rem;
    width: 100%;
    background: linear-gradient(${gradientRotation}, ${gradientStart}, ${gradientEnd})};
  `;

  return (
    <Container>
      <div className="HighlightCodeProject flex flex-col items-center justify-center">
        <h4 className="HighlightCodeProject__title m0">
          {project.fields.title}
        </h4>

        <h4 className="mt_5">({project.fields.timelineLaunchDate})</h4>
      </div>

      <div className="HighlightCodeProject__content mt2">
        {project.fields.description.content.map((node, key) =>
          documentToReactComponents(node)
        )}
      </div>
    </Container>
  );
};

export default HighlightCodeProject;
