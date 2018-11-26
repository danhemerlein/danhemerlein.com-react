import React, { Component } from "react";

import './ScrollToTop.scss'

export default class ScrollToTop extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
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
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <div className="ScrollToTop">
        <button
          className='scroll'
          onClick={() => { this.scrollToTop(); }}>
          <span>To Top</span>
        </button>
      </div>
    )
  }
}
