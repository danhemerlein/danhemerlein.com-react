import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "utils/get";

import HomePage from 'components/HomePage';
import AboutPageNew from 'components/AboutPageNew';
import Code from 'components/Code';
import MusicPage from 'components/MusicPage';
import Contact from 'components/Contact';
import Moodboard from 'components/Moodboard';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NotFound from 'components/NotFound';
import MusicShow from 'components/MusicShow';
import Tunes from 'components/Tunes';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, soemthing went wrong!</h1>;

  console.log(model);
  let site = [];
  let musicProjects = [];
  for (let i = 0; i < model.length; i++) {
    const element = model[i];
    if ("subTitle" in element.fields) {
      site = element;
    }
    if ("releaseDate" in element.fields) {
      musicProjects.push(element);
    }
  }

  musicProjects = musicProjects.sort((a, b) => {
    return a.fields.order - b.fields.order;
  });

  const musicPageRoutes = musicProjects.map((project, key) => {
    var projectHandle = project.fields.title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, '-').toLowerCase();
    const handle = `/music/${projectHandle}`;

    return (
      <Route
        path={handle}
        key={key}
        render={props => (
          <MusicShow
            {...props}
            project={project}
          />
        )}
      />
    )
  })

  return (
    <div>
      <Router>
        <div className="px3 pt3">
          <header>
            <Header
              title={get(site, "fields.title", {})}
              subTitle={get(site, "fields.subTitle", {})}
              subTitleTwo={get(site, "fields.subTitleTwo", {})}
            />
          </header>
          <div id="switch">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/about"
                render={() => (
                  <AboutPageNew
                    image={get(site, "fields.aboutImage", {})}
                    text={get(site, 'fields.aboutText', {})}
                  />
                )}
              />
              <Route
                exact
                path="/code"
                render={() => (
                  <Code
                    projects={get(site, "fields.codeProjects.fields", {})}
                  />
                )}
              />
              <Route
                exact
                path="/music"
                render={() => (
                  <MusicPage
                    projects={musicProjects}
                    comingSoonImage={get(
                      site,
                      "fields.musicProjectsComingSoon",
                      {}
                    )}
                  />
                )}
              />
              <Route
                exact
                path="/keep-in-touch"
                render={() => (
                  <Contact
                    cta={get(site, "fields.contactHeadline", {})}
                    ctaTwo={get(site, "fields.contactHeadlineTwo", {})}
                  />
                )}
              />
              <Route
                exact
                path="/moodboard"
                render={() => (
                  <Moodboard images={get(site, "fields.moodboard", {})} />
                )}
              />
              {/* <Route
                path="/music/:id"
                render={props => (
                  <MusicShow
                    {...props}
                    projects={get(site, "fields.musicProjects.fields", {})}
                    images={get(site, "fields.musicProjectImages", {})}
                  />
                )}
              /> */}

              {musicPageRoutes}

              <Route
                exact
                path="/tunes-test"
                render={() => (
                  <Tunes
                    tunes={get(site, "fields.tunes", {})}
                  />
                )}
              />
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
