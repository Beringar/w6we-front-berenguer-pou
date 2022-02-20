import { actionsTypes } from "../actions/actionsTypes";

const robotsReducers = (currentRobots = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionsTypes.loadRobots:
      newState = action.robots ? [...action.robots] : [...currentRobots];
      break;
    default:
      newState = [...currentRobots];
  }
  return newState;
};

export default robotsReducers;
