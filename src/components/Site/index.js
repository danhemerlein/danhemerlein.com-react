import React, { useState, useEffect }                           from "react";
import { BrowserRouter as Router, Route, Switch, useLocation }  from "react-router-dom";
import { connect, useDispatch }                                 from "react-redux";

import { getAboutPageContent }                                  from "../../store/actions/aboutPage";
import { getMoodboardContent }                                  from "../../store/actions/moodboard";
import { getMusicProjectsContent }                              from "../../store/actions/musicProjects";

import get                                                      from "utils/get";

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

  const { codeProjects, musicPage } = props;

  const { aboutPageLoading, aboutPage } = props;
  const { moodboardLoading, moodboard } = props;
  const { musicProjectsLoading, musicProjects } = props;

  console.log(musicProjects);

  const dispatch = useDispatch();

  useEffect(() => {

    const loadContent = async () => {
      await dispatch(getAboutPageContent());
      await dispatch(getMoodboardContent());
      await dispatch(getMusicProjectsContent());
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

  const loading = aboutPageLoading && moodboardLoading && musicProjectsLoading;
  const content = aboutPage.length && moodboard.length && musicProjects.length;

  function SwitchComp() {
    usePageViews();
    if (loading === false && !content) {
      return null;
    } else if (loading === true && !content) {
      return <div>loading...</div>;
    } else {
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
                // heroImageDesktop={get(
                //   props.site,
                //   "fields.musicProjectsComingSoon",
                //   {}
                // )}
                // heroImageMobile={get(
                //   props.site,
                //   "fields.musicProjectsHeroMobile",
                //   {}
                // )}
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
                // images={get(props.site, "fields.moodboard", {})}
              />
            )}
          />
          {musicPageRoutes}
          <Route render={() => <NotFound icon={<NotFoundIcon />} />} />
        </Switch>
      )
    }
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

// export default Site;

const mapStateToProps = (state) => {
  return {
    aboutPageLoading: state.aboutPage.loading,
    moodboardLoading: state.moodboard.loading,
    musicPorjectsLoading: state.musicProjects.loading,
    aboutPage: state.aboutPage.content,
    moodboard: state.moodboard.content,
    musicProjects: state.musicProjects.content,
  }
}

export default connect(mapStateToProps)(Site);
