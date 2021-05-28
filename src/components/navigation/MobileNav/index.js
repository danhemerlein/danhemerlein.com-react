import CloseIcon from "components/base/icons/Close";
import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";

const MobileNav = ({ clickHandler }) => {
  return (
    <div className="MobileNav bg-white flex flex-col p1">
      <div className="flex items-end justify-end">
        <div className="MobileNav__close-icon pointer">
          <CloseIcon clickHandler={clickHandler} />
        </div>
      </div>
      <nav role="navigation">
        <ul className="list-style-none p0 flex items-center justify-center flex-col">
          <li className="MobileNav__list-item body-serif my2">
            <Link to="/code">code</Link>
          </li>
          <li className="MobileNav__list-item  body-serif my2">
            <Link to="/music">music</Link>
          </li>
          <li className="MobileNav__list-item  body-serif my2">
            <Link to="/moodboard">moodboard</Link>
          </li>
          <li className="MobileNav__list-item  body-serif my2">
            <Link to="/about">about</Link>
          </li>
          <li className="MobileNav__list-item  body-serif my2">
            <Link to="/">home</Link>
          </li>

          <hr className="MobileNav__hr" />

          <li className="MobileNav__list-item  body-serif my2">
            <a
              href="https://github.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>

          <li className="MobileNav__list-item  body-serif my2">
            <a
              href="https://workingnotworking.com/58170-dan"
              target="_blank"
              rel="noopener noreferrer"
            >
              working not working
            </a>
          </li>

          <li className="MobileNav__list-item  body-serif my2">
            <a
              href="https://www.are.na/dan-hemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              are.na
            </a>
          </li>

          <li className="MobileNav__list-item  body-serif my2">
            <a
              href="https://medium.com/@danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
          </li>

          <li className="MobileNav__list-item  body-serif my2">
            <a
              href="https://twitter.com/danhemerlein"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>

          <li className="MobileNav__list-item  body-serif my2">
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
    </div>
  );
};

export default MobileNav;
