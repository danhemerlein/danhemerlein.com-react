import React, { Component } from "react";

import { Router, Route, Switch } from "react-router";
// import { BrowserRouter as Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import get from "utils/get";

import HomePage from "components/HomePage";
import Header from "components/Header";
import Footer from "components/Footer";

import Code from "components/Code";

import MusicPage from "components/MusicPage";

import AboutPageNew from "components/AboutPageNew";

import Contact from "components/Contact";
import Moodboard from "components/Moodboard";
import NotFound from "components/NotFound";
import MusicShow from "components/MusicShow";

import "./Site.scss";

export default class Site extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentRoute: "/",
      mobileNavOpen: false
    }
  }

  toggleMobileNav = () => {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen,
    });
  }

  render() {
    console.log(this.props.site);

    const history = createHistory();
    const unlisten = history.listen((location, action) => {
      // console.log(action, location.pathname, location.state);
      this.setState({
        currentRoute: location.pathname,
      });

      if ((this.state.currentRoute !== location.pathname) && this.state.mobileNavOpen) {
        this.toggleMobileNav();
      }
    });

    const musicPageRoutes = this.props.musicProjects.map((project, key) => {
      var projectHandle = project.fields.title
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/ /g, "-")
        .toLowerCase();
      const handle = `/music/${projectHandle}`;
      return (
        <Route
          path={handle}
          key={key}
          render={(props) => <MusicShow {...props} project={project} />}
        />
      );
    });

    return (
      <div className="Site">
        <Router history={history}>
          <div className="Site__container">
            <header>
              <Header
                toggleMobileNav={this.toggleMobileNav}
                mobileNavOpen={this.state.mobileNavOpen}
              />
            </header>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                  exact
                  path="/about"
                  render={() => (
                    <AboutPageNew
                      image={get(this.props.site, "fields.aboutImage", {})}
                      text={get(this.props.site, "fields.aboutText", {})}
                    />
                  )}
                />
                <Route
                  exact
                  path="/code"
                  render={() => <Code projects={this.props.codeProjects} />}
                />
                <Route
                  exact
                  path="/music"
                  render={() => (
                    <MusicPage
                      projects={this.props.musicProjects}
                      heroImageDesktop={get(
                        this.props.site,
                        "fields.musicProjectsComingSoon",
                        {}
                      )}
                      heroImageMobile={get(
                        this.props.site,
                        "fields.musicProjectsHeroMobile",
                        {}
                      )}
                    />
                  )}
                />
                <Route
                  exact
                  path="/keep-in-touch"
                  render={() => (
                    <Contact />
                  )}
                />
                <Route
                  exact
                  path="/moodboard"
                  render={() => (
                    <Moodboard
                      images={get(this.props.site, "fields.moodboard", {})}
                    />
                  )}
                />

                {musicPageRoutes}

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
}
