import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { remHelper } from "utils";
import ProjectContent from "../ProjectContent";
import ProjectTitle from "../ProjectTitle";

const Container = styled.div`
  border: 1px solid #000;
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
    <Container
      gradientRotation={gradientRotation}
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      <FlexContainer direction="column" justify="center" items="center">
        <ProjectTitle title={title} />

        <h4 className="mt_5">({timelineLaunchDate})</h4>
      </FlexContainer>
      <ProjectContent description={description} />
    </Container>
  );
};

export default HighlightCodeProject;
