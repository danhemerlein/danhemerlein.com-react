import aboutPageReducer            from "./aboutPage";
import moodboardReducer            from "./moodboard";

import { combineReducers }  from "redux";

const rootReducer = combineReducers({
  aboutPage:          aboutPageReducer,
  moodboard:          moodboardReducer,
});

export default rootReducer;
