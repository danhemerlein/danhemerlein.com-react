import React from "react";
import { FlexContainer, P } from "styles/elements";

const ProjectDetails = ({ project }) => {
  const { artistWebsite, artist, title, releaseDate, role } = project.fields;
  const renderArtistATag = () => {
    if (artistWebsite !== undefined) {
      return (
        <>
          <P className="w100 my_25">
            by&nbsp;
            <a href={artistWebsite} target="_blank" rel="noopener noreferrer">
              {artist}
            </a>
          </P>
        </>
      );
    }
    return <P className="w100 my_25">by&nbsp;{artist}</P>;
  };

  return (
    <FlexContainer justify="space-between" items="center">
      <div className="flex flex-col mt1 lg:mt0">
        <P>{title}</P>
        {renderArtistATag()}
      </div>

      <FlexContainer direction="column" className="mt1 col-6">
        <P lowecase textRight className="my_25 lg:mt0">
          {releaseDate.replace(",", "")}
        </P>

        <P lowercase textRight>
          {role}
        </P>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProjectDetails;
