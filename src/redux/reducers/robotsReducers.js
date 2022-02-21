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
    case actionsTypes.createRobot:
      newState = action.robot
        ? [...currentRobots, { ...action.robot }]
        : [...currentRobots];
      break;
    case actionsTypes.updateRobot:
      newState = currentRobots.map((robot) =>
        robot.id === action.robot.id
          ? {
              ...action.robot,
            }
          : { ...robot }
      );
      break;
    default:
      newState = [...currentRobots];
  }
  return newState;
};

export default robotsReducers;
