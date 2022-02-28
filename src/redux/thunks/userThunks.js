import { setUserAction } from "../actions/actionsCreators";
import jwtDecode from "jwt-decode";

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
  const token = await response.json();
  const { id, name } = await jwtDecode(token.token);
  localStorage.setItem("userToken", token.token);
  dispatch(setUserAction({ id, name }));
};
