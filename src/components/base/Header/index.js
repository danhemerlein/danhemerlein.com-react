import Menu from "components/navigation/Menu";
import MobileNav from "components/navigation/MobileNav";
import MobileNavOverlay from "components/navigation/MobileNavOverlay";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { spacing } from "../../../utils";
import "./Header.scss";

const HeadlineContainer = styled(FlexContainer)`
  width: 50%;
`;

const SubHeadline = styled.h2`
  padding: 0 ${spacing[0.25]};
`;

const Header = ({ mobileNavOpen, toggleMobileNav }) => {
  return (
    <header className="Header relative">
      <MobileNavOverlay
        navOpen={mobileNavOpen}
        clickHandler={toggleMobileNav}
      />

      <MobileNav clickHandler={toggleMobileNav} navOpen={mobileNavOpen} />

      <FlexContainer id="header">
        <HeadlineContainer direction="column">
          <h1>
            <Link to="/">dan hemerlein</Link>
          </h1>
          <SubHeadline>
            <Link to="/code">web engineer</Link>
            <span>&nbsp;/&nbsp;</span>
            <Link to="/music">music producer</Link>
          </SubHeadline>
        </HeadlineContainer>

        <HeadlineContainer justify="flex-end" items="center">
          <nav className="Header__desktop-nav" role="navigation">
            <Link to="/about">about</Link>
          </nav>

          <Menu clickHandler={toggleMobileNav} />
        </HeadlineContainer>
      </FlexContainer>
    </header>
  );
};

export default Header;
