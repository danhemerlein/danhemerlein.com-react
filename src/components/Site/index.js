import React, { useState, useEffect }                           from "react";
import { BrowserRouter as Router, Route, Switch, useLocation }  from "react-router-dom";
import { connect, useDispatch }                                 from "react-redux";

import { getAboutPageContent }                                  from "../../store/actions/aboutPage";
import { getMusicPageContent }                                  from "../../store/actions/musicPage";
import { getMoodboardContent }                                  from "../../store/actions/moodboard";
import { getMusicProjectsContent }                              from "../../store/actions/musicProjects";
import { getCodeProjectsContent }                               from "../../store/actions/codeProjects";

import Header                                                   from "components/base/Header";
import Footer                                                   from "components/base/Footer";

import Index                                                    from "components/pages/Index";
import Code                                                     from "components/pages/Code";
import Music                                                    from "components/pages/Music";
import MusicProject                                             from "components/pages/MusicProject";
import Moodboard                                                from "components/pages/Moodboard";
import About                                                    from "components/pages/About";
import NotFound                                                 from "components/pages/NotFound";
import Contact                                                  from "components/pages/Contact";

import NotFoundIcon                                             from "components/base/icons/NotFound";

import "./Site.scss";

function Site(props) {

  const { musicPageLoading, musicPage } = props;
  const { aboutPageLoading, aboutPage } = props;
  const { moodboardLoading, moodboard } = props;
  const { musicProjectsLoading, musicProjects } = props;
  const { codeProjectsLoading, codeProjects } = props;

  const dispatch = useDispatch();

  useEffect(() => {

    const loadContent = async () => {
      await dispatch(getAboutPageContent());
      await dispatch(getMusicPageContent());
      await dispatch(getMoodboardContent());
      await dispatch(getMusicProjectsContent());
      await dispatch(getCodeProjectsContent());
    }

    loadContent();

  }, [dispatch]);

  let [mobileNavOpen, setMobileNavOpen] = useState(false);
  let [currentRoute, setCurrentRoute] = useState("/");

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  }

  let musicPageRoutes;

  if (!musicProjectsLoading && musicProjects.length ) {
    musicPageRoutes = musicProjects.map((project, key) => {
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
  }

  function usePageViews() {
    let location = useLocation();
    setCurrentRoute(location.pathname)

    useEffect(() => {
      if (currentRoute !== location.pathname && mobileNavOpen) {
        toggleMobileNav();
      }
    }, [location]);
  }

  const loading = aboutPageLoading && moodboardLoading && musicProjectsLoading && codeProjectsLoading && musicPageLoading;
  const content = aboutPage.length && moodboard.length && musicProjects.length && codeProjects.length && musicPage.length;

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
                content={aboutPage}
              />
            )}
          />
          <Route
            exact
            path="/code"
            render={() => <Code projects={codeProjects.items} />}
          />
          <Route
            exact
            path="/music"
            render={() => (
              <Music
                projects={musicProjects.items}
                heroImageDesktop={musicPage.items[0].fields.heroDesktop}
                heroImageMobile={musicPage.items[0].fields.heroMobile}
              />
            )}
          />
          <Route exact path="/keep-in-touch" render={() => <Contact />} />
          <Route
            exact
            path="/moodboard"
            render={() => (
              <Moodboard
                content={moodboard}
              />
            )}
          />
          {musicPageRoutes}
          <Route render={() => <NotFound icon={<NotFoundIcon />} />} />
        </Switch>
      )
    }

  if (loading === false && !content) {
    return null;
  } else if (loading === true && !content) {
    return <div className="Site">loading...</div>;
  } else {
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
}

// export default Site;

const mapStateToProps = (state) => {
  return {
    aboutPageLoading:     state.aboutPage.loading,
    musicPageLoading:     state.musicPage.loading,
    moodboardLoading:     state.moodboard.loading,
    musicProjectsLoading: state.musicProjects.loading,
    codeProjectsLoading:  state.codeProjects.loading,

    aboutPage:            state.aboutPage.content,
    musicPage:            state.musicPage.content,
    moodboard:            state.moodboard.content,
    musicProjects:        state.musicProjects.content,
    codeProjects:         state.codeProjects.content,
  }
}

export default connect(mapStateToProps)(Site);
