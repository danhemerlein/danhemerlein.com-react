import FullScreenHeight from "components/other/FullScreenHeight";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer, P } from "styles/elements";
import { anchorColor } from "../../../styles/utilities";
import { remHelper } from "../../../utils";

const PageContainer = styled(FlexContainer)`
  height: 100%;
  flex-direction: column;
`;

const SVGContainer = styled.div`
  svg {
    height: 100%;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  margin-top: ${remHelper[16]};
`;

const StyledP = styled(P)`
  margin-bottom: ${remHelper[4]};
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
        <SVGContainer>{icon}</SVGContainer>

        <TextContainer>
          <StyledP textCenter>This is a 404 error</StyledP>
          <StyledP textCenter>Please check the url in your browser</StyledP>
          <StyledP textCenter>
            You might want to&nbsp;
            <StyledLink to="/">return home</StyledLink>
          </StyledP>
        </TextContainer>
      </PageContainer>
    </FullScreenHeight>
  );
};

export default NotFound;
