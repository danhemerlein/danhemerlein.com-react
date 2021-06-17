import Footer from "components/base/Footer";
// base components
import Header from "components/base/Header";
import NotFoundIcon from "components/base/icons/NotFound";
import Loading from "components/other/Loading";
import About from "components/pages/About";
import Blog from "components/pages/Blog";
import Code from "components/pages/Code";
// pages
import Index from "components/pages/Index";
import Moodboard from "components/pages/Moodboard";
import Music from "components/pages/Music";
import MusicProject from "components/pages/MusicProject";
import NewHomePage from "components/pages/NewHomePage";
import NotFound from "components/pages/NotFound";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { getMoodboardContent } from "./store/actions/moodboard";
import { getMusicProjectsContent } from "./store/actions/musicProjects";
import { bodySerif } from "./styles/utilities";
import { spacing } from "./utils";

const AppContainer = styled.div`
  padding: ${spacing[1]};
  ${bodySerif}
  overflow: hidden;
`;

function App({
  moodboardLoading,
  moodboard,
  musicProjectsLoading,
  musicProjects,
  showNewHomepage,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadContent = async () => {
      await dispatch(getMoodboardContent());
      await dispatch(getMusicProjectsContent());
    };

    loadContent();
  }, [dispatch]);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("/");

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  let musicPageRoutes;

  if (!musicProjectsLoading && musicProjects.length) {
    musicPageRoutes = musicProjects.map((project) => {
      const handle = `/music/${project.fields.handle}`;
      return (
        <Route
          path={handle}
          key={project}
          render={(props) => <MusicProject {...props} project={project} />}
        />
      );
    });
  }

  function usePageViews() {
    const location = useLocation();
    setCurrentRoute(location.pathname);

    useEffect(() => {
      if (currentRoute !== location.pathname && mobileNavOpen) {
        toggleMobileNav();
      }
    }, [location]);
  }

  const loading = moodboardLoading && musicProjectsLoading;
  const content = moodboard.length && musicProjects.length;

  console.log(musicProjects);
  console.log("app showNewHomepage", showNewHomepage);

  function SwitchComp() {
    usePageViews();

    return (
      <Switch>
        <Route
          exact
          path="/"
          component={showNewHomepage ? NewHomePage : Index}
        />

        <Route exact path="/about" component={About} />

        <Route exact path="/code" component={Code} />

        <Route
          exact
          path="/music"
          render={() => <Music projects={musicProjects} />}
        />

        <Route
          exact
          path="/moodboard"
          render={() => <Moodboard images={moodboard} />}
        />

        <Route exact path="/blog" render={() => <Blog />} />

        {musicPageRoutes}

        <Route render={() => <NotFound icon={<NotFoundIcon />} />} />
      </Switch>
    );
  }

  if (loading === false && !content) {
    return null;
  }
  if (loading === true && !content) {
    return <Loading />;
  }
  return (
    <AppContainer>
      <Router>
        <Header
          toggleMobileNav={toggleMobileNav}
          mobileNavOpen={mobileNavOpen}
          showNewHomepage={showNewHomepage}
          currentRoute={currentRoute}
        />
        <SwitchComp />
        <Footer />
      </Router>
    </AppContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    moodboardLoading: state.moodboard.loading,
    musicProjectsLoading: state.musicProjects.loading,
    moodboard: state.moodboard.content,
    musicProjects: state.musicProjects.content,
    showNewHomepage: state.siteSettings.showNewHomepage,
  };
};

export default connect(mapStateToProps)(App);
