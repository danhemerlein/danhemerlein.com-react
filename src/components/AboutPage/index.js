import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ScrollToTop from 'components/ScrollToTop'
import Image from 'components/base/Image';

import './AboutPage.scss';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="AboutPage my2 flex flex flex-column justify-center">
          <div className="col-12">
            <div className="flex justify-center items-center">
              <div className="col-12 md-col-6 lg-col-4">
                <Image src={this.props.image.fields.file.url} alt={this.props.image.fields.title}/>
              </div>
            </div>
            <p className="m0 p4 body-serif">{this.props.text}</p>
          </div>
          <ScrollToTop scrollStepInPx="75" delayInMs="10" />
        </div>
          <Link to="/" className="go-home block full-width center body-serif">Go Home</Link>
      </div>
    );
  }
}

export default AboutPage;
