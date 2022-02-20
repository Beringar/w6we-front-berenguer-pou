import { loadRobotsAction } from "../actions/actionsCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};
