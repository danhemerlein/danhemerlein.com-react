import React, { Component } from "react";

import cx from 'classnames';
import './ScrollToTop.scss';

export default class ScrollToTop extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
      showScroll: false
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let y = window.pageYOffset

    if (y > 300) {
      this.setState({ showScroll: true });
    }
    else {
      this.setState({ showScroll: false });
    }
  }

  render() {
    if (this.state.showScroll) {
      return (
        <div className={cx('ScrollToTop')}>
            <button
              className={cx('ScrollToTop__button p1 z2 fixed overflow-hidden flex items-center justify-center center')}
              onClick={() => { this.scrollToTop(); }}>
              <span className="pointer body-serif py2 px1 block">to top</span>
            </button>
        </div>
      )
    }
    else {
      return null
    }
  }
}
