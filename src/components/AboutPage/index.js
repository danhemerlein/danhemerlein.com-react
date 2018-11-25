import React, { Component } from 'react';
import get from "../../utils/get";
import shuffle from "../../utils/shuffle"

import Image from '../base/Image';

import './AboutPage.scss';

class AboutPage extends Component {
  render() {
    const text = get(this, "props.text", []);
    return (
      <div className="AboutPage my2">
        <div className="flex">
          <div className="col-6">
            <Image src={this.props.image.fields.file.url} />
          </div>
          <div className="col-6 body-serif">
            {shuffle(text).map((item, key) => {
              return <div className="AboutPage__item full-width">{item}</div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
