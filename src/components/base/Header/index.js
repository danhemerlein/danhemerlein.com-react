import Menu from "components/navigation/Menu";
import MobileNav from "components/navigation/MobileNav";
import MobileNavOverlay from "components/navigation/MobileNavOverlay";
import React from "react";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { above } from "../../../styles/utilities";

const StyledHeader = styled.header`
  position: relative;
  min-height: 17px;

  ${above.tablet`
    min-height: 32px;
  `}
`;

const HeadlineContainer = styled(FlexContainer)`
  width: 50%;
`;

const Header = ({ mobileNavOpen, toggleMobileNav }) => {
  return (
    <StyledHeader>
      <MobileNavOverlay
        navOpen={mobileNavOpen}
        clickHandler={toggleMobileNav}
      />

      <MobileNav clickHandler={toggleMobileNav} navOpen={mobileNavOpen} />

      <FlexContainer>
        <HeadlineContainer justify="flex-end" items="center">
          <Menu clickHandler={toggleMobileNav} />
        </HeadlineContainer>
      </FlexContainer>
    </StyledHeader>
  );
};

export default Header;
