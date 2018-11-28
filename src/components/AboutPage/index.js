import React, { Component } from 'react';
import get from "../../utils/get";
import shuffle from "../../utils/shuffle"

import ScrollToTop from '../ScrollToTop'
import Image from '../base/Image';

import './AboutPage.scss';

class AboutPage extends Component {
  render() {
    const text = get(this, "props.text", []);
    return (
      <div className="AboutPage my2 flex flex-column items-center justify-center">
        <div className="col-4">
          <Image src={this.props.image.fields.file.url} alt={this.props.image.fields.title}/>
        </div>
        <div className="body-serif center">
          {shuffle(text).map((item, key) => {
            return <div className="AboutPage__item full-width">{item}</div>
          })}
        </div>
        <ScrollToTop scrollStepInPx="75" delayInMs="10" />
      </div>
    );
  }
}

export default AboutPage;
