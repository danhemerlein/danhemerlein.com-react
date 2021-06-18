import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";

const StyledSmall = styled.small`
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FlexContainer as="footer" items="center" justify="flex-end">
      <StyledSmall>© Dan Hemerlein 2021</StyledSmall>
    </FlexContainer>
  );
};

export default Footer;
