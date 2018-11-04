import React, { Component } from 'react';

import './AboutPage.scss';

import Header from '../Header';
import Footer from '../Footer';
import Image from '../base/Image';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="flex justify-center">
          <div className="max-width-3">
            <div>
              <Image style={{ width: '100%', height: '50vh' }} src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/30698354_10214023220188598_182126009422708736_o.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=9bd8cfecd6670e6d9a0dde5d74067ab8&oe=5C894E0C"/>
              <div className="flex justify-end">
                <div className="col-8">
                  <ul className="list-style-none p0 flex justify-around">
                    <li className="inline-block">
                      <span>Timeline</span>
                    </li>
                    <li className="inline-block">
                      <span>About Me</span>
                    </li>
                    <li className="inline-block">
                      <span>Friends <span>1,316</span></span>
                    </li>
                    <li className="inline-block">
                      <span>Photo Journal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default AboutPage;