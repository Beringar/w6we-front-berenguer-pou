import { actionsTypes } from "./actionsTypes";

export const loadRobotsAction = (robots) => ({
  type: actionsTypes.loadRobots,
  robots,
});

export const loadRobotAction = (robot) => ({
  type: actionsTypes.loadRobot,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: actionsTypes.deleteRobot,
  id,
});

export const createRobotAction = (robot) => ({
  type: actionsTypes.createRobot,
  robot,
});

export const updateRobotAction = (robot) => ({
  type: actionsTypes.createRobot,
  robot,
});

export const checkUserStatusAction = (user) => ({
  type: actionsTypes.checkUserStatus,
  user,
});

export const userLoginAction = (user) => ({
  type: actionsTypes.userLogin,
  user,
});
