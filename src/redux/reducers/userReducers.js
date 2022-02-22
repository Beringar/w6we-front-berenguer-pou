import { actionsTypes } from "../actions/actionsTypes";

const userReducers = (
  currentUser = { username: null, name: null, token: null },
  action = {}
) => {
  let newUser;
  if (action.type === actionsTypes.setUser) {
    newUser = { ...action.user };
  } else {
    newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducers;
