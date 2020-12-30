import React, { useState, useEffect }                           from "react";
import { BrowserRouter as Router, Route, Switch, useLocation }  from "react-router-dom";
import { connect, useDispatch }                                 from "react-redux";

import { getMoodboardContent }                                  from "../../store/actions/moodboard";
import { getMusicProjectsContent }                              from "../../store/actions/musicProjects";

import Header                                                   from "components/base/Header";
import Footer                                                   from "components/base/Footer";

import Index                                                    from "components/pages/Index";
import Code                                                     from "components/pages/Code";
import Music                                                    from "components/pages/Music";
import MusicProject                                             from "components/pages/MusicProject";
import Moodboard                                                from "components/pages/Moodboard";
import About                                                    from "components/pages/About";
import NotFound                                                 from "components/pages/NotFound";
// import Contact                                                  from "components/pages/Contact";

import NotFoundIcon                                             from "components/base/icons/NotFound";

import "./Site.scss";

function Site(props) {

  const { moodboardLoading, moodboard } = props;
  const { musicProjectsLoading, musicProjects } = props;

  const dispatch = useDispatch();

  useEffect(() => {

    const loadContent = async () => {
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

  const loading = moodboardLoading && musicProjectsLoading;
  const content = moodboard.length && musicProjects.length;

  function SwitchComp() {
    usePageViews();

    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/code" component={Code} />
        <Route exact path="/music" render={() => <Music projects={musicProjects} />} />
        <Route exact path="/moodboard" component={Moodboard} />
        {musicPageRoutes}
        <Route render={() => <NotFound icon={<NotFoundIcon />} />} />
        {/* <Route exact path="/keep-in-touch" render={() => <Contact />} /> */}
      </Switch>
    )
  }

  if (loading === false && !content) {
    return null;
  } else if (loading === true && !content) {
    return <div className="p2">loading...</div>;
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

const mapStateToProps = (state) => {
  return {
    moodboardLoading:     state.moodboard.loading,
    musicProjectsLoading: state.musicProjects.loading,
    moodboard:            state.moodboard.content,
    musicProjects:        state.musicProjects.content,
  }
}

export default connect(mapStateToProps)(Site);
