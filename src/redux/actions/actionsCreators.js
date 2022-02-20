import { actionsTypes } from "./actionsTypes";

export const loadRobotsAction = (robots) => ({
  type: actionsTypes.loadRobots,
  robots,
});

export const loadRobotAction = (robot) => ({
  type: actionsTypes.loadRobot,
  robot,
});
