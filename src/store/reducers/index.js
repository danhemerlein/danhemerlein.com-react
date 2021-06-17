import { combineReducers } from "redux";
import aboutPageReducer from "./aboutPage";
import codeProjectsReducer from "./codeProjects";
import moodboardReducer from "./moodboard";
import musicPageReducer from "./musicPage";
import musicProjectsReducer from "./musicProjects";

const rootReducer = combineReducers({
  aboutPage: aboutPageReducer,
  musicPage: musicPageReducer,
  moodboard: moodboardReducer,
  musicProjects: musicProjectsReducer,
  codeProjects: codeProjectsReducer,
  // siteSettings: siteSettingsReducer,
});

export default rootReducer;
