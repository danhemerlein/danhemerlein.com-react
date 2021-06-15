import Menu from "components/navigation/Menu";
import MobileNav from "components/navigation/MobileNav";
import MobileNavOverlay from "components/navigation/MobileNavOverlay";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { toggleHomepage } from "../../../store/actions/siteSettings";
import { above, anchorColor } from "../../../styles/utilities";

const StyledHeader = styled.header`
  position: relative;
`;

const StyledLink = styled(Link)`
  ${anchorColor({
    color: "black",
  })};
`;

const HeadlineContainer = styled(FlexContainer)`
  width: 50%;
`;

const SubHeadline = styled.h2`
  display: none;

  ${above.tablet`
    display: block;
  `}
`;

const AboutContainer = styled.nav`
  display: none;

  ${above.tablet`
    display: block;
  `}
`;

const Header = ({ mobileNavOpen, toggleMobileNav }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    return dispatch(toggleHomepage());
  };

  return (
    <StyledHeader>
      <MobileNavOverlay
        navOpen={mobileNavOpen}
        clickHandler={toggleMobileNav}
      />

      <MobileNav clickHandler={toggleMobileNav} navOpen={mobileNavOpen} />

      <FlexContainer id="header">
        <HeadlineContainer direction="column">
          <h1>
            <StyledLink to="/">dan hemerlein</StyledLink>
          </h1>
          <SubHeadline>
            <StyledLink to="/code">web engineer</StyledLink>
            <span>&nbsp;/&nbsp;</span>
            <StyledLink to="/music">music producer</StyledLink>
          </SubHeadline>
        </HeadlineContainer>

        <HeadlineContainer justify="flex-end" items="center">
          <AboutContainer role="navigation">
            <button type="button" onClick={clickHandler}>
              toggle homepage
            </button>
            <StyledLink to="/about">about</StyledLink>
          </AboutContainer>

          <Menu clickHandler={toggleMobileNav} />
        </HeadlineContainer>
      </FlexContainer>
    </StyledHeader>
  );
};

export default Header;
