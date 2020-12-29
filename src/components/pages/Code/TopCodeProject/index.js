import React from "react";
import "./styles.scss";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components'

const TopCodeProject = (props) => {
  const { project, index } = props;

  function isEven (index) {
    return index % 2 === 0;
  }

  console.log(isEven(index));

  const TitleContainer = styled.div`
    display: flex;
    flex-direction: ${isEven(index) ? "row" : "row-reverse"};
    justify-content: space-evenly;
  `
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
            <h4 className="TopCodeProject__title m0">
              {project.fields.title}
            </h4>
          </a>

          <h4 className="mt_5">
            ({project.fields.timelineLaunchDate})
          </h4>
        </div>

        <img className="TopCodeProject__img col-3 md:col-2" src={project.fields.image.fields.file.url} alt={project.fields.image.fields.file.title} />

      </TitleContainer>

      <div className="mt2">
        {documentToReactComponents(
          project.fields.description.content[0]
        )}
      </div>
    </div>
  )
}

export default TopCodeProject
