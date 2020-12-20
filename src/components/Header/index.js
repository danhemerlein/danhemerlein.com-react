import React from "react";
import { Link } from "react-router-dom";

import './Header.scss'
import cx from 'classnames';

import MobileNav from 'components/MobileNav';
import Menu from 'components/Menu';
import NavOverlay from "components/NavOverlay";

const Header = (props) => {
  return (
    <div className="Header relative">
      <NavOverlay
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
            <Link to="/code">web engineer</Link> /{" "}
            <Link to="/music">music producer</Link>
          </h2>
        </div>
        <div className="flex justify-end items-center col-6">
          <nav className="Header__desktop-nav" role="navigation">
            <ul className="list-style-none p0">
              {/* <li className="inline-block">
                <Link to="/keep-in-touch">keep in touch</Link>
              </li> */}

              <li className="inline-block ml2">
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>

          <div className="Header__mobile-nav-toggle flex">
            <Menu clickHandler={props.toggleMobileNav} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
