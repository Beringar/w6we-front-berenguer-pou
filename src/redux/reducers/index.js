import { combineReducers } from "redux";
import robotsReducers from "./robotsReducers";
import robotReducers from "./robotReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  robots: robotsReducers,
  robot: robotReducers,
  user: userReducers,
});

export default rootReducer;
