import CloseIcon from "components/base/icons/Close";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "styles/elements";
import { spacing } from "../../../utils";
import "./MobileNav.scss";

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

  ${({ navOpen }) =>
    navOpen &&
    `
      transform: translateX(0);
      position: fixed;
  `};
`;

const MobileNav = ({ clickHandler, navOpen }) => {
  return (
    <Nav navOpen={navOpen}>
      <FlexContainer items="flex-end" justify="flex-end">
        <div className="MobileNav__close-icon pointer">
          <CloseIcon clickHandler={clickHandler} />
        </div>
      </FlexContainer>
      <nav role="navigation">
        <FlexContainer
          as="ul"
          items="center"
          justify="center"
          direction="column"
        >
          <li>
            <Link to="/code">code</Link>
          </li>
          <li>
            <Link to="/music">music</Link>
          </li>
          <li>
            <Link to="/moodboard">moodboard</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>

          <hr className="MobileNav__hr" />

          <li>
            <a
              href="https://github.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>

          <li>
            <a
              href="https://workingnotworking.com/58170-dan"
              target="_blank"
              rel="noopener noreferrer"
            >
              working not working
            </a>
          </li>

          <li className="MobileNav__list-item">
            <a
              href="https://www.are.na/dan-hemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              are.na
            </a>
          </li>

          <li>
            <a
              href="https://medium.com/@danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
          </li>
        </FlexContainer>
      </nav>
    </Nav>
  );
};

export default MobileNav;
