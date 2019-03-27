import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Header.scss'
import cx from 'classnames';

import MobileNav from 'components/MobileNav';
import Menu from 'components/Menu';

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
       navActive: false
    }
  }

toggleNav = () => {
  this.setState({
    navActive: !this.state.navActive
  })
  document.getElementById("switch").classList.add('hide')
  document.getElementById("header").classList.add('hide')
}

closeNav = () => {
  this.setState({
    navActive: false
  })
  document.getElementById("switch").classList.remove('hide')
  document.getElementById("header").classList.remove('hide')
}

listItemClickHandler = () => {
  this.setState({
    navActive: false
  })
  window.location.reload()
  document.getElementById("header").classList.remove('hide')
}

  render() {
    return (
      <div className="Header">
        <div className={cx('App__mobile-nav-container full-width relative',
          { 'hide': this.state.navActive === false }, { 'show': this.state.navActive === true })}>
          <MobileNav
            clickHandler={this.closeNav}
            listItemClickHandler={this.listItemClickHandler}
          />
        </div>
        <div id="header" className="flex">
          <div className="Header__title col-6">
            <h1 className="heading-serif m0"><Link to="/">{this.props.title}</Link></h1>
            <h2 className="xs-hide heading-serif m0"><Link to="/code">{this.props.subTitle}</Link> / <Link to="/music">{this.props.subTitleTwo}</Link></h2>
          </div>
          <div className="flex justify-end items-center col-6">
            <nav className="Header__desktop-nav" role="navigation">
              <ul className="list-style-none p0">
                <li className="body-serif inline-block"><Link to="/keep-in-touch">keep in touch</Link></li>
                <li className="body-serif inline-block ml2"><Link to="/about">about</Link></li>
              </ul>
            </nav>
            <div className="Header__mobile-nav flex">
              <Menu clickHandler={this.toggleNav} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
