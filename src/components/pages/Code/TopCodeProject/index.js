import React from "react";
import styled from "styled-components";
import { FlexContainer, P } from "styles/elements";
import { above, blackBorder } from "styles/utilities";
import { remHelper } from "utils";
import ProjectContent from "../ProjectContent";
import ProjectTitle from "../ProjectTitle";

const isEven = (i) => {
  return i % 2 === 0;
};

const CodeProject = styled.div`
  border: ${blackBorder};
  max-width: 60rem;
  margin-top: ${remHelper[16]};
  padding: ${remHelper[32]};
  width: 100%;
  font-family: "custon_serif";
`;

const StyledImg = styled.img`
  margin: 0rem auto ${remHelper[16]} auto;
  width: 25%;

  ${above.tablet`
    margin: unset;
    width: 16%;
  `};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;

  ${above.tablet`
    ${({ index }) =>
      index &&
      `
        flex-direction: ${isEven(index) ? "row" : "row-reverse"};
      `};
    `}
`;

const StyledP = styled(P)`
  margin-top: ${remHelper[8]};
`;

const StyledAnchor = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.light.black};

  &:visited {
    color: ${({ theme }) => theme.light.black};
  }
`;

const TopCodeProject = ({ project, index }) => {
  const {
    link,
    title,
    timelineLaunchDate,
    image,
    description,
  } = project.fields;

  return (
    <CodeProject>
      <TitleContainer index={index}>
        <FlexContainer direction="column" items="center" justify="center">
          <StyledAnchor href={link} target="_blank" rel="noopener noreferrer">
            <ProjectTitle title={title} />
          </StyledAnchor>

          <StyledP>({timelineLaunchDate})</StyledP>
        </FlexContainer>

        <StyledImg src={image.fields.file.url} alt={image.fields.file.title} />
      </TitleContainer>

      <ProjectContent description={description} />
    </CodeProject>
  );
};

export default TopCodeProject;
