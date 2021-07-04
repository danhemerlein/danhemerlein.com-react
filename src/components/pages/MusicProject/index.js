import GoHomeBack from "components/base/GoHomeBack";
import React from "react";
import { usePalette } from "react-palette";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above, fullBleed } from "styles/utilities";
import { remHelper } from "utils";
import ProjectDetails from "./ProjectDetails";
import ProjectLink from "./ProjectLink";

const Project = styled(FlexContainer)`
  position: relative;
  height: 100%;
  padding: ${remHelper[16]};
  margin: ${remHelper[16]} 0;
  ${fullBleed({ space: 1.6, right: true, left: true })};
  justify-content: space-between;

  ${({ lightMuted, muted }) =>
    lightMuted &&
    muted &&
    `background-image: linear-gradient(45deg, ${lightMuted}, ${muted})`};

  ${above.tablet`
    justify-content: center;
  `}
`;

const Inner = styled(FlexContainer)`
  width: 100%;
  flex-direction: column;

  ${above.tablet`
    width: 66%
  `}

  ${above.desktop`
    flex-direction: row;
  `}
`;

const StyledImg = styled.img`
  width: 100%;

  ${above.desktop`
    width: 50%;
    margin-right: ${remHelper[8]};
  `}
`;

const DetailsContainer = styled.div`
  width: 100%;
  margin-bottom: ${remHelper[16]};

  ${above.desktop`
    width: 50%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    margin-left: ${remHelper[8]};
  `}
`;

const LinksContainer = styled.div`
  margin-top: ${remHelper[16]};
  color: ${({ theme }) => theme.light.white};
`;

const MusicProject = ({ project }) => {
  const { artwork, links } = project.fields;

  const { data } = usePalette(`https:${artwork.fields.file.url}`);

  return (
    <Project
      items="center"
      direction="column"
      lightMuted={data.lightMuted}
      muted={data.muted}
    >
      <Inner>
        <StyledImg
          src={artwork.fields.file.url}
          alt={artwork.fields.file.title}
        />

        <DetailsContainer>
          <ProjectDetails project={project} />

          <LinksContainer>
            {links.map((link, key) => {
              return <ProjectLink mapKey={key} link={link} />;
            })}
          </LinksContainer>
        </DetailsContainer>
      </Inner>

      <GoHomeBack destination="/music/" cta="go back" white />
    </Project>
  );
};

export default MusicProject;
