import { actionsTypes } from "../actions/actionsTypes";

const userReducers = (currentUser = {}, action = {}) => {
  let newUser;
  if (action.type === actionsTypes.setUser) {
    newUser = { ...action.user };
  } else {
    newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducers;
