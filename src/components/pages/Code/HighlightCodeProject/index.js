import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { blackBorder } from "styles/utilities";
import { remHelper } from "utils";
import LaunchDate from "../LaunchDate";
import ProjectContent from "../ProjectContent";
import ProjectTitle from "../ProjectTitle";

const HighlightProject = styled.div`
  border: ${blackBorder};
  max-width: 60rem;
  margin-top: ${remHelper[16]};
  padding: ${remHelper[32]};
  width: 100%;

  ${({ gradientRotation, gradientStart, gradientEnd }) =>
    gradientRotation &&
    gradientStart &&
    gradientEnd &&
    `
      background: linear-gradient(${gradientRotation}, ${gradientStart}, ${gradientEnd})};
    `};
`;

const HighlightCodeProject = ({
  project,
  gradientRotation,
  gradientStart,
  gradientEnd,
}) => {
  const { title, timelineLaunchDate, description } = project.fields;
  return (
    <HighlightProject
      gradientRotation={gradientRotation}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      <FlexContainer direction="column" justify="center" items="center">
        <ProjectTitle title={title} />

        <LaunchDate launchDate={timelineLaunchDate} />
      </FlexContainer>
      <ProjectContent description={description} />
    </HighlightProject>
  );
};

export default HighlightCodeProject;
