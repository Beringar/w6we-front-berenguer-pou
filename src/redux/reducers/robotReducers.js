import { actionsTypes } from "../actions/actionsTypes";

const robotReducers = (currentRobot = {}, action = {}) => {
  let newRobot;

  if (action.type === actionsTypes.loadRobot) {
    newRobot = { ...action.robot };
  } else {
    newRobot = { ...currentRobot };
  }

  return newRobot;
};

export default robotReducers;
