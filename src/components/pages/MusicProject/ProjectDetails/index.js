import React from "react";
import styled from "styled-components";
import { FlexContainer, P } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";

const TitleContainer = styled(FlexContainer)`
  margin-top: ${remHelper[16]};

  ${above.tablet`
    margin-top: 0;
  `}
`;

const DateContainer = styled(FlexContainer)`
  margin-top: ${remHelper[16]};
  width: 50%:
`;

const ReleaseDate = styled(P)`
  margin: ${remHelper[8]} 0;

  ${above.tablet`
    margin-top: 0;
  `}
`;

const Title = styled(P)`
  margin: ${remHelper[8]} 0;
`;

const ProjectDetails = ({ project }) => {
  const { artistWebsite, artist, title, releaseDate, role } = project.fields;
  const renderArtistATag = () => {
    if (artistWebsite !== undefined) {
      return (
        <>
          <P white>
            by&nbsp;
            <a href={artistWebsite} target="_blank" rel="noopener noreferrer">
              {artist}
            </a>
          </P>
        </>
      );
    }
    return <P white>by&nbsp;{artist}</P>;
  };

  return (
    <FlexContainer justify="space-between" items="center">
      <TitleContainer direction="column">
        <Title white>{title}</Title>
        {renderArtistATag()}
      </TitleContainer>

      <DateContainer direction="column">
        <ReleaseDate lowecase textRight white>
          {releaseDate.replace(",", "")}
        </ReleaseDate>

        <P lowercase textRight white>
          {role}
        </P>
      </DateContainer>
    </FlexContainer>
  );
};

export default ProjectDetails;
