import { actionsTypes } from "../actions/actionsTypes";

const robotsReducers = (currentRobots = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionsTypes.loadRobots:
      newState = action.robots ? [...action.robots] : [...currentRobots];
      break;
    case actionsTypes.deleteRobot:
      newState = action.id
        ? [...currentRobots].filter((robot) => robot.id !== action.id)
        : [...currentRobots];
      break;
    default:
      newState = [...currentRobots];
  }
  return newState;
};

export default robotsReducers;
