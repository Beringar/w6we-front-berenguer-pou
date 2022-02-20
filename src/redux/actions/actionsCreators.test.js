import { loadRobotsAction } from "./actionsCreators";
import { actionsTypes } from "./actionsTypes";

describe("Given an ActionsCreator set", () => {
  describe("When the function loadRobotsAction is called", () => {
    test("Then it should return an object with type load-robots and the array passed", () => {
      const loadRobotsType = actionsTypes.loadRobots;
      const mockObject = [
        { robot: { test: "test" } },
        { robot: { test: "test" } },
      ];
      const expectedAction = { type: loadRobotsType, robots: mockObject };

      const action = loadRobotsAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });
});
