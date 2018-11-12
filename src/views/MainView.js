import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Code from '../components/Code';
import MusicPage from '../components/MusicPage';
import Contact from '../components/Contact';
import Moodboard from '../components/Moodboard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, soemthing went wrong!</h1>;
  return (
    <div>
      <Router>
        <div>
          <header>
            <Header
              title={model.fields.title}
              subTitle={model.fields.subTitle}
              subTitleTwo={model.fields.subTitleTwo}
            />
          </header>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dansbook" component={AboutPage} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/music" component={MusicPage} />
          <Route exact path="/keepintouch" component={Contact} />
          <Route exact path="/moodboard" render={()=> <Moodboard images={model.fields.moodboard}/>} />
          <Route component={NotFound} />
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default MainView;
