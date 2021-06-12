import CloseIcon from "components/base/icons/Close";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { spacing } from "../../../utils";
import "./MobileNav.scss";

const Nav = styled.div`
  z-index: 5;
  transform: translateX(226px);
  right: 0;
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
      <div className="flex items-end justify-end">
        <div className="MobileNav__close-icon pointer">
          <CloseIcon clickHandler={clickHandler} />
        </div>
      </div>
      <nav role="navigation">
        <ul className="list-style-none p0 flex items-center justify-center flex-col">
          <li className="MobileNav__list-item  my2">
            <Link to="/code">code</Link>
          </li>
          <li className="MobileNav__list-item   my2">
            <Link to="/music">music</Link>
          </li>
          <li className="MobileNav__list-item   my2">
            <Link to="/moodboard">moodboard</Link>
          </li>
          <li className="MobileNav__list-item   my2">
            <Link to="/about">about</Link>
          </li>
          <li className="MobileNav__list-item   my2">
            <Link to="/">home</Link>
          </li>

          <hr className="MobileNav__hr" />

          <li className="MobileNav__list-item   my2">
            <a
              href="https://github.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>

          <li className="MobileNav__list-item   my2">
            <a
              href="https://workingnotworking.com/58170-dan"
              target="_blank"
              rel="noopener noreferrer"
            >
              working not working
            </a>
          </li>

          <li className="MobileNav__list-item   my2">
            <a
              href="https://www.are.na/dan-hemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              are.na
            </a>
          </li>

          <li className="MobileNav__list-item   my2">
            <a
              href="https://medium.com/@danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
          </li>

          <li className="MobileNav__list-item   my2">
            <a
              href="https://twitter.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>

          <li className="MobileNav__list-item  my2">
            <a
              href="https://www.instagram.com/danhemerlein/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
        </ul>
      </nav>
    </Nav>
  );
};

export default MobileNav;
