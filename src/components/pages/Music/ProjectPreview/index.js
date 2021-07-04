import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above } from "styles/utilities";
import { remHelper } from "utils";
import DesktopOverlay from "./DesktopOverlay";
import "./styles.scss";

const Container = styled(FlexContainer)`
  width: 100%;
  margin-bottom: ${remHelper[16]};

  ${above.tablet`
    width: 50%;
    margin-bottom; ${remHelper[32]};
  `}

  ${above.desktop`
    width: 25%;
  `};
`;

const Inner = styled(FlexContainer)`
  position: relative;
  flex-direction: column;

  ${above.tablet`
    flex-direction: row;
    margin: 0 ${remHelper[16]}
  `}

  &:hover div {
    opacity: 0.95;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProjectPreview = ({ project }) => {
  const { handle, artwork, title, artist, role } = project.fields;

  return (
    <Container>
      <Inner>
        <Link to={`/music/${handle}`}>
          <StyledImg
            src={artwork.fields.file.url}
            alt={artwork.fields.file.title}
          />
          <DesktopOverlay title={title} artist={artist} role={role} />
        </Link>

        <div className="ProjectPreview__mobile-details flex justify-between items-center md:none mt1">
          <div>
            <h4 className="ProjectPreview__title">
              <Link to={`/music/${handle}`}>{title}</Link>
            </h4>
            <h3 className="ProjectPreview__artist">
              <Link to={`/music/${handle}`}>by {artist}</Link>
            </h3>
          </div>
        </div>
      </Inner>
    </Container>
  );
};

export default ProjectPreview;
