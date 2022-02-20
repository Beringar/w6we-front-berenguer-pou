import {
  loadRobotsThunk,
  loadRobotThunk,
  deleteRobotThunk,
} from "../thunks/robotsThunks";

describe("Given a loadRobots thunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadRobots action", async () => {
      const dispatch = jest.fn();

      await loadRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadRobot thunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadRobot action", async () => {
      const dispatch = jest.fn();
      const idToGet = 3;
      const thunkFunction = loadRobotThunk(idToGet);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteRobot thunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the deleteRobot action", async () => {
      const dispatch = jest.fn();
      const idToRemove = 15;
      const thunkFunction = deleteRobotThunk(idToRemove);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
