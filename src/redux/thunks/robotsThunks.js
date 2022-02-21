import {
  loadRobotsAction,
  loadRobotAction,
  deleteRobotAction,
  createRobotAction,
  updateRobotAction,
} from "../actions/actionsCreators";

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

export const deleteRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}${id}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    dispatch(deleteRobotAction(id));
  }
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(robot),
    }
  );
  const newRobot = await response.json();
  dispatch(createRobotAction(newRobot));
};

export const updateRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}update`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(robot),
    }
  );
  const newRobot = await response.json();
  dispatch(updateRobotAction(newRobot));
};
