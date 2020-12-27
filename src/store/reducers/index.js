import aboutPageReducer            from "./aboutPage";

import { combineReducers }  from "redux";

const rootReducer = combineReducers({
  aboutPage:          aboutPageReducer,
});

export default rootReducer;
