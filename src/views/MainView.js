import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "utils/get";

import HomePage from 'components/HomePage';
// import AboutPage from 'components/AboutPage';
import AboutPageNew from 'components/AboutPageNew';
import Code from 'components/Code';
import MusicPage from 'components/MusicPage';
import Contact from 'components/Contact';
import Moodboard from 'components/Moodboard';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NotFound from 'components/NotFound';
import MusicShow from 'components/MusicShow';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, soemthing went wrong!</h1>;
  return (
    <div>
      <Router>
        <div className="px3 pt3">
          <header>
            <Header
              title={get(model, "fields.title", {})}
              subTitle={get(model, "fields.subTitle", {})}
              subTitleTwo={get(model, "fields.subTitleTwo", {})}
            />
          </header>
          <div id="switch">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about"
                render={() =>
                  // <AboutPage
                  //   image={get(model, "fields.aboutImage", {})}
                  //   text={get(model, 'fields.aboutText', {})}
                  // />
                  <AboutPageNew />
                }
              />
              <Route exact path="/code"
                render={() => <Code
                  projects={get(model, "fields.codeProjects.fields", {})}
                />
              } />
              <Route exact path="/music"
                render={() => <MusicPage
                  projects={get(model, "fields.musicProjects.fields", {})}
                  images={get(model, "fields.musicProjectImages", {})}
                  comingSoonImage={get(model, "fields.musicProjectsComingSoon", {})}
                />
              } />
              <Route exact path="/keep-in-touch"
                render={() => <Contact
                  cta={get(model, "fields.contactHeadline", {})}
                  ctaTwo={get(model, "fields.contactHeadlineTwo", {})}
                  />
                }
              />
              <Route exact path="/moodboard"
                render={() => <Moodboard images={get(model, "fields.moodboard", {})} />}
              />
              <Route path="/music/:id"
                render={(props) => <MusicShow
                  {...props}
                  projects={get(model, "fields.musicProjects.fields", {})}
                  images={get(model, "fields.musicProjectImages", {})}
                />
              } />
              <Route component={NotFound} />
            </Switch>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default MainView;
