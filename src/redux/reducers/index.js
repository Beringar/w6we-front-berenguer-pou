import { combineReducers } from "redux";
import robotsReducers from "./robotsReducers";
import robotReducers from "./robotReducers";

const rootReducer = combineReducers({
  robots: robotsReducers,
  robot: robotReducers,
});

export default rootReducer;
