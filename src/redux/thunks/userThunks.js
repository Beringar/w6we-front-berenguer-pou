import { setUserAction } from "../actions/actionsCreators";

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const newUser = await response.json();
  dispatch(setUserAction(newUser));
};
