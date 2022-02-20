import { loadRobotsAction } from "../actions/actionsCreators";
import robotsReducers from "./robotsReducers";

describe("Given a robotsReducer", () => {
  describe("When it's called with an action type loadRobots and provide an array of robots", () => {
    test("Then it should return a new state with all the robots that came inside the action", () => {
      const currentState = [];
      const robots = [
        { id: 1, text: "robot1" },
        { id: 2, text: "robot2" },
      ];
      const action = loadRobotsAction(robots);
      const expectedNewState = [...robots];

      const newState = robotsReducers(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
  describe("When it's called with an action type loadRobots and provide no robots", () => {
    test("Then it should return a new state equal to currentState", () => {
      const currentState = [];
      const action = loadRobotsAction();
      const expectedNewState = [];

      const newState = robotsReducers(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
