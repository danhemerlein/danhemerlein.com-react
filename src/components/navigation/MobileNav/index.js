import CloseIcon from "components/base/icons/Close";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { spacing } from "../../../utils";

const Nav = styled.div`
  z-index: 5;
  transform: translateX(-226px);
  left: 0;
  top: 0;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1);
  position: absolute;
  width: 210px;
  height: 100vh;
  display: block;
  overflow-y: scroll;
  background: white;
  display: flex;
  flex-direction: column;
  padding: ${spacing[1]};
  font-family: "custom_serif";

  font-size: 1.6rem;

  ${({ navOpen }) =>
    navOpen &&
    `
      transform: translateX(0);
      position: fixed;
  `};
`;

const ListItem = styled.li`
  margin-bottom: 1.6rem;
`;

const StyledCloseButton = styled.button`
  cursor: pointer;
  padding: none;
  border: 0;
  outline: none;
  background: transparent;
`;

const StyledHR = styled.hr`
  width: 50%;
  border: 1px solid black;
  margin: 1.6rem 0;
`;

const MobileNav = ({ clickHandler, navOpen }) => {
  return (
    <Nav navOpen={navOpen}>
      <FlexContainer items="flex-end" justify="flex-end">
        <StyledCloseButton onClick={clickHandler}>
          <CloseIcon width="2.4rem" height="2.4rem" />
        </StyledCloseButton>
      </FlexContainer>
      <nav role="navigation">
        <FlexContainer
          as="ul"
          items="center"
          justify="center"
          direction="column"
        >
          <ListItem>
            <Link to="/code">code</Link>
          </ListItem>
          <ListItem>
            <Link to="/music">music</Link>
          </ListItem>
          <ListItem>
            <Link to="/moodboard">moodboard</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">about</Link>
          </ListItem>
          <ListItem>
            <Link to="/">home</Link>
          </ListItem>

          <StyledHR className="MobileNav__hr" />

          <ListItem>
            <a
              href="https://github.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </ListItem>

          <ListItem>
            <a
              href="https://workingnotworking.com/58170-dan"
              target="_blank"
              rel="noopener noreferrer"
            >
              working not working
            </a>
          </ListItem>

          <ListItem className="MobileNav__list-item">
            <a
              href="https://www.are.na/dan-hemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              are.na
            </a>
          </ListItem>

          <ListItem>
            <a
              href="https://medium.com/@danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
          </ListItem>
        </FlexContainer>
      </nav>
    </Nav>
  );
};

export default MobileNav;
