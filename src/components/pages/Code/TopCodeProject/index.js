import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import styled from "styled-components";
import "./styles.scss";

const TopCodeProject = ({ project, index }) => {
  function isEven(i) {
    return i % 2 === 0;
  }

  const TitleContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;

    @media (min-width: 720px) {
      flex-direction: ${isEven(index) ? "row" : "row-reverse"};
    }
  `;

  return (
    <div className="TopCodeProject mt1 p2 w100 body-serif">
      <TitleContainer>
        <div className="flex flex-col items-center justify-center">
          <a
            className="TopCodeProject__a"
            href={project.fields.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="TopCodeProject__title m0">{project.fields.title}</h4>
          </a>

          <h4 className="mt_5">({project.fields.timelineLaunchDate})</h4>
        </div>

        <img
          className="TopCodeProject__img col-3 md:col-2"
          src={project.fields.image.fields.file.url}
          alt={project.fields.image.fields.file.title}
        />
      </TitleContainer>

      <div className="TopCodeProject__content mt2">
        {project.fields.description.content.map((node) =>
          documentToReactComponents(node)
        )}
      </div>
    </div>
  );
};

export default TopCodeProject;
