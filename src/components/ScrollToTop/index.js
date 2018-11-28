import React, { Component } from "react";

import './ScrollToTop.scss'

export default class ScrollToTop extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
      showScroll: false
    };

    this.handleScroll = this.handleScroll.bind(this);
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

  handleScroll() {
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
        <div className="ScrollToTop absolute m4">
          <div className="fixed">
            <button
              className='ScrollToTop__button'
              onClick={() => { this.scrollToTop(); }}>
              <span className="body-serif py2 px1 block">to top</span>
            </button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}
