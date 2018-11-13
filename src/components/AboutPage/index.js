import React, { Component } from 'react';

import Image from '../base/Image';

import './AboutPage.scss';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="AboutPage">
          <Image src={this.props.image.fields.file.url} />
        </div>
      </div>
    );
  }
}

export default AboutPage;