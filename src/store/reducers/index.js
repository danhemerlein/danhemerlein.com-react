import aboutPageReducer            from "./aboutPage";
import musicPageReducer            from "./musicPage";
import moodboardReducer            from "./moodboard";
import musicProjectsReducer        from "./musicProjects";
import codeProjectsReducer         from "./codeProjects";

import { combineReducers }  from "redux";

const rootReducer = combineReducers({
  aboutPage:          aboutPageReducer,
  musicPage:          musicPageReducer,
  moodboard:          moodboardReducer,
  musicProjects:      musicProjectsReducer,
  codeProjects:       codeProjectsReducer,
});

export default rootReducer;
