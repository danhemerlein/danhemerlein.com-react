import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import {
  anchorColor,
  SlideWideLeft,
  SlideWideRight,
} from "../../../../styles/utilities";

const Hero = styled(FlexContainer)`
  width: 100%;
  height: 50vh;
`;

const StyledLink = styled.a`
  ${anchorColor({
    color: "black",
  })};
`;

const HeadlineTwo = styled.h2`
  font-size: 2rem;
  animation: ${SlideWideRight} 2.5s;
  color: black;
`;

const HeadlineThree = styled.h3`
  font-size: 1.25rem;
  animation: ${SlideWideLeft} 2.5s;
  color: black;
`;

const MusicHero = () => {
  return (
    <Hero
      direction="column"
      justify="center"
      items="center"
      className="lack-italic"
    >
      <StyledLink
        href="http://www.youngandnauseo.us"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center"
      >
        <HeadlineTwo>young & nauseous</HeadlineTwo>
        <HeadlineThree>out now</HeadlineThree>
      </StyledLink>
    </Hero>
  );
};

export default MusicHero;
