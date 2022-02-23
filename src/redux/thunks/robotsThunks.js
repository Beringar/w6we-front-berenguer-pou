import {
  loadRobotsAction,
  loadRobotAction,
  deleteRobotAction,
  createRobotAction,
  updateRobotAction,
} from "../actions/actionsCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots/`
  );
  const robots = await response.json();
  dispatch(loadRobotsAction(robots.robots));
};

export const loadRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots/${id}`
  );
  const robot = await response.json();
  dispatch(loadRobotAction(robot));
};

export const deleteRobotThunk = (id, token) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots/${id}`,
    {
      method: "DELETE",
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/json",
      }),
    }
  );
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};

export const createRobotThunk = (robot, token) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots/create`,
    {
      method: "POST",
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(robot),
    }
  );
  const newRobot = await response.json();
  dispatch(createRobotAction(newRobot));
};

export const updateRobotThunk = (robot, token) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}robots/update`,
    {
      method: "PUT",
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(robot),
    }
  );
  const newRobot = await response.json();
  dispatch(updateRobotAction(newRobot));
};
