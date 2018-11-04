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
        <div className="AboutPage flex justify-center">
          <div className="max-width-3 bg-grey">
            <div>
              <div>
                <div className="relative"> 
                  <Image style={{ width: '100%', height: '40vh' }} src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/30698354_10214023220188598_182126009422708736_o.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=9bd8cfecd6670e6d9a0dde5d74067ab8&oe=5C894E0C"/>
                  <div className="AboutPage__main-image flex items-end absolute z-0 circle">
                    <Image style={{ width: '25%', height: '100%',border: '.5rem solid white' }} src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/17504954_10210839845326216_5969521138393214803_o.jpg?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=f878b5d73b27ff697dd7b5ab605507f1&oe=5C742482" />
                    <h3 className="color-white ml2 pb2">Dan Hemerlein</h3>
                  </div>
                </div>
                <div className="flex justify-end bg-white">
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
                <div className="flex flex-column col-4">
                  <div className="bg-white my2">
                    8 items for you to review
                  </div>
                  <div className="flex flex-column bg-white">
                    <span>
                      Intro
                    </span>
                    <span>
                      Hi, I'm Dan.  Welcome to the 'about' section of my website, which I have styled to look like a facebook profile :]
                    </span>
                    <span>
                      <div>
                        Lives in <span className="color-blue">Brooklyn, New York</span>
                      </div>
                      <div>
                        From <span className="color-blue">Ardsley, New York</span>
                      </div>
                      <div>
                        Works at <span className="color-blue">Freelance Front End Web Developer</span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-8">
                  DANASDNASDKOASDNAKLSDNALSKDN
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