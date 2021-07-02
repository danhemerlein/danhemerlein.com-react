import FullScreenHeight from "components/other/FullScreenHeight";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above, anchorColor } from "../../../styles/utilities";
import { remHelper } from "../../../utils";

const PageContainer = styled(FlexContainer)`
  height: 100%;
  flex-direction: column;

  ${above.tablet`
    flex-direction: row;
  `}
`;

const StyledHeadline = styled.div`
  text-align: center;
`;

const SVGContainer = styled.div`
  svg {
    height: 100%;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  margin-bottom: ${remHelper[32]};
`;

const StyledLink = styled(Link)`
  ${anchorColor({
    color: "black",
  })};

  text-decoration: underline;
`;

const NotFound = ({ icon }) => {
  return (
    <FullScreenHeight unsetBreakPoint="none">
      <PageContainer items="center" justify="center">
        <TextContainer>
          <StyledHeadline>This is a 404 error</StyledHeadline>
          <StyledHeadline>Please check the url in your browser</StyledHeadline>
          <StyledHeadline>
            You might want to <StyledLink to="/">return home</StyledLink>
          </StyledHeadline>
        </TextContainer>
        <SVGContainer>{icon}</SVGContainer>
      </PageContainer>
    </FullScreenHeight>
  );
};

export default NotFound;
