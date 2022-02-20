import { loadRobotsAction, loadRobotAction } from "../actions/actionsCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots.robots));
};

export const loadRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_HEROKKU_API_URL}${id}`);
  const robot = await response.json();
  dispatch(loadRobotAction(robot));
};
