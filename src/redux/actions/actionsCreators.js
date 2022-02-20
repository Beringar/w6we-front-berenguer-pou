import { actionsTypes } from "./actionsTypes";

export const loadRobotsAction = (robots) => ({
  type: actionsTypes.loadRobots,
  robots,
});
