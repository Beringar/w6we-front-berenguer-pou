import { actionsTypes } from "../actions/actionsTypes";

const robotReducers = (robot = {}, action = {}) => {
  let newRobot;

  if (action.type === actionsTypes.loadRobot) {
    newRobot = { ...action.robot };
  } else {
    newRobot = { ...robot };
  }

  return newRobot;
};

export default robotReducers;
