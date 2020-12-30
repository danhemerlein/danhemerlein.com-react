import React from "react";
import { Link } from "react-router-dom";

import './Header.scss'
import cx from 'classnames';

import Menu                   from 'components/navigation/Menu';
import MobileNav              from 'components/navigation/MobileNav';
import MobileNavOverlay       from "components/navigation/MobileNavOverlay";

const Header = (props) => {
  return (
    <header className="Header relative">
      <MobileNavOverlay
        navOpen={props.mobileNavOpen}
        clickHandler={props.toggleMobileNav}
      />
      <div
        className={cx("Header__mobile-nav", {
          "Header__mobile-nav--active": props.mobileNavOpen,
        })}
      >
        <MobileNav clickHandler={props.toggleMobileNav} />
      </div>
      <div id="header" className="flex body-serif">
        <div className="Header__title col-6">
          <h1 className="m0">
            <Link to="/">dan hemerlein</Link>
          </h1>
          <h2 className="Header__sub-headline m0">
            <Link to="/code">font-end engineer</Link> /{" "}
            <Link to="/music">music producer</Link>
          </h2>
        </div>
        <div className="flex justify-end items-center col-6">
          <nav className="Header__desktop-nav" role="navigation">
            <ul className="list-style-none p0">
              <li className="inline-block ml2">
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>

          <div className="Header__mobile-nav-toggle">
            <Menu clickHandler={props.toggleMobileNav} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
