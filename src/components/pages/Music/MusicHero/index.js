import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { anchorColor, SlideWideLeft, SlideWideRight } from "styles/utilities";

const Hero = styled(FlexContainer)`
  width: 100%;
  height: 50vh;
  font-family: "lack_italic";
`;

const StyledLink = styled.a`
  text-align: center;
  ${anchorColor({
    color: "black",
  })};
`;

const HeadlineTwo = styled.h2`
  font-size: 2rem;
  animation: ${SlideWideRight} 2.5s;
  color: ${({ theme }) => theme.light.black};
`;

const HeadlineThree = styled.h3`
  font-size: 1.25rem;
  animation: ${SlideWideLeft} 2.5s;
  color: ${({ theme }) => theme.light.black};
`;

const MusicHero = () => {
  return (
    <Hero direction="column" justify="center" items="center">
      <StyledLink
        href="http://www.youngandnauseo.us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HeadlineTwo>young & nauseous</HeadlineTwo>
        <HeadlineThree>out now</HeadlineThree>
      </StyledLink>
    </Hero>
  );
};

export default MusicHero;
