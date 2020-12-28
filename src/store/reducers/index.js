import aboutPageReducer            from "./aboutPage";
import moodboardReducer            from "./moodboard";
import musicProjectsReducer        from "./musicProjects";

import { combineReducers }  from "redux";

const rootReducer = combineReducers({
  aboutPage:          aboutPageReducer,
  moodboard:          moodboardReducer,
  musicProjects:      musicProjectsReducer,
});

export default rootReducer;
