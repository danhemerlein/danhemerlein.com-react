import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above, blackBorder } from "styles/utilities";
import { remHelper } from "utils";
import LaunchDate from "../LaunchDate";
import ProjectContent from "../ProjectContent";
import ProjectTitle from "../ProjectTitle";

const BottomProject = styled.div`
  border: ${blackBorder};
  width: 100%;
  max-width: 60rem;
  padding: ${remHelper[32]};
  margin-top: ${remHelper[16]};
`;

const Inner = styled(FlexContainer)`
  align-items: center;

  ${above.tablet`
    align-items: flex-start;
  `}
`;

const StyledAnchor = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.light.black};

  &:visited {
    color: ${({ theme }) => theme.light.black};
  }
`;

const BottomCodeProject = ({ project }) => {
  const { link, title, timelineLaunchDate, description } = project.fields;
  return (
    <BottomProject>
      <Inner direction="column" justify="center">
        <StyledAnchor href={link} target="_blank" rel="noopener noreferrer">
          <ProjectTitle title={title} />
        </StyledAnchor>
        <LaunchDate launchDate={timelineLaunchDate} />
      </Inner>

      <ProjectContent description={description} />
    </BottomProject>
  );
};

export default BottomCodeProject;
