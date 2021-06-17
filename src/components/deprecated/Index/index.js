import CodeIcon from "components/base/icons/Code";
import ContactIcon from "components/base/icons/Contact";
import MoodboardIcon from "components/base/icons/Moodboard";
import MusicIcon from "components/base/icons/Music";
import FullScreenHeight from "components/other/FullScreenHeight";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  above,
  SlideLeft,
  SlideRight,
  SlideWideLeft,
  SlideWideRight,
} from "../../../styles/utilities";
import { spacing } from "../../../utils";
import HomeBox from "./HomeBox";

export default function Index() {
  return (
    <FullScreenHeight>
      <IndexContainer>
        <RowContainer index={0}>
          <CodeLinkContainer>
            <Link to="/code">
              <HomeBox header="code" icon={<CodeIcon />} />
            </Link>
          </CodeLinkContainer>

          <MusicLinkContainer>
            <Link to="/music">
              <HomeBox header="music" icon={<MusicIcon />} />
            </Link>
          </MusicLinkContainer>
        </RowContainer>

        <RowContainer index={1}>
          <MoodboardLinkContainer>
            <Link to="/moodboard">
              <HomeBox header="moodboard" icon={<MoodboardIcon />} />
            </Link>
          </MoodboardLinkContainer>

          <AboutLinkContainer>
            <Link to="about">
              <HomeBox header="about" icon={<ContactIcon />} />
            </Link>
          </AboutLinkContainer>
        </RowContainer>
      </IndexContainer>
    </FullScreenHeight>
  );
}

const LinkContainer = styled.div`
  width: 100%;
  height: 100%;

  ${above.tablet`
    width: 50%;
  `}
`;

const CodeLinkContainer = styled(LinkContainer)`
  ${above.tablet`
    animation: ${SlideRight} 2s;
    margin-right: 1rem;
  `}
`;

const MusicLinkContainer = styled(LinkContainer)`
  margin-top: ${spacing[1]};

  ${above.tablet`
    animation: ${SlideLeft} 2s;
    margin-top: 0;
  `}
`;

const MoodboardLinkContainer = styled(LinkContainer)`
  margin-top: ${spacing[1]};

  ${above.tablet`
    animation: ${SlideWideRight} 2.5s;
    margin-right: 1rem;
    margin-top: 0;
  `}
`;

const AboutLinkContainer = styled(LinkContainer)`
  margin-top: ${spacing[1]};

  ${above.tablet`
    animation: ${SlideWideLeft} 2.5s;
    margin-top: 0;
  `}
`;

const IndexContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  ${above.tablet`
    flex-direction: row;
    ${({ index }) => index === 0 && `margin-bottom: ${spacing[1]}`};
  `};
`;
