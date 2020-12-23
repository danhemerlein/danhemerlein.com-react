import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import get                        from "utils/get";

import Header                     from "components/base/Header";
import Footer                     from "components/base/Footer";

import Index                      from "components/pages/Index";
import Code                       from "components/pages/Code";
import Music                      from "components/pages/Music";
import MusicProject               from "components/pages/MusicProject";
import Moodboard                  from "components/pages/Moodboard";
import About                      from "components/pages/About";
import NotFound                   from "components/pages/NotFound";
import Contact                    from "components/pages/Contact";


import NotFoundIcon               from "components/base/icons/NotFound";

import "./Site.scss";

function Site(props) {

  let [mobileNavOpen, setMobileNavOpen] = useState(false);
  let [currentRoute, setCurrentRoute] = useState("/");

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  }

  const musicPageRoutes = props.musicProjects.map((project, key) => {
    var projectHandle = project.fields.title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, "-")
      .toLowerCase();
    const handle = `/music/${projectHandle}`;
    return (
      <Route
        path={handle}
        key={key}
        render={(props) => <MusicProject {...props} project={project} />}
      />
    );
  });

  function usePageViews() {
    let location = useLocation();
    setCurrentRoute(location.pathname)

    useEffect(() => {
      if (currentRoute !== location.pathname && mobileNavOpen) {
        toggleMobileNav();
      }
    }, [location]);
  }

  function SwitchComp() {
    usePageViews();
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route
          exact
          path="/about"
          render={() => (
            <About
              image={get(props.site, "fields.aboutImage", {})}
            />
          )}
        />
        <Route
          exact
          path="/code"
          render={() => <Code projects={props.codeProjects} />}
        />
        <Route
          exact
          path="/music"
          render={() => (
            <Music
              projects={props.musicProjects}
              heroImageDesktop={get(
                props.site,
                "fields.musicProjectsComingSoon",
                {}
              )}
              heroImageMobile={get(
                props.site,
                "fields.musicProjectsHeroMobile",
                {}
              )}
            />
          )}
        />
        <Route exact path="/keep-in-touch" render={() => <Contact />} />
        <Route
          exact
          path="/moodboard"
          render={() => (
            <Moodboard
              images={get(props.site, "fields.moodboard", {})}
            />
          )}
        />
        {musicPageRoutes}
        <Route render={() => <NotFound icon={<NotFoundIcon />} />} />
      </Switch>
    )
  }

  return (
    <div className="Site">
      <Router>
        <Header
          toggleMobileNav={toggleMobileNav}
          mobileNavOpen={mobileNavOpen}
        />
        <SwitchComp />
        <Footer />
      </Router>
    </div>
  );
}

export default Site;
