import {
  loadRobotsAction,
  loadRobotAction,
  deleteRobotAction,
  checkUserStatusAction,
} from "./actionsCreators";
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

  describe("When the function loadRobotAction is called", () => {
    test("Then it should return an object with type load-robot and the object passed", () => {
      const loadRobotType = actionsTypes.loadRobot;
      const mockObject = { robot: { test: "test" } };
      const expectedAction = { type: loadRobotType, robot: mockObject };

      const action = loadRobotAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function deleteTodoAction is called", () => {
    test("Then it should return an object with type delete-robot and the id passed", () => {
      const deleteRobotType = actionsTypes.deleteRobot;
      const mockId = 3;
      const expectedAction = { type: deleteRobotType, id: mockId };

      const action = deleteRobotAction(mockId);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function checkUserStatus is called", () => {
    test("Then it should return an object with type check-user-status and the user passed", () => {
      const checkUserStatusType = actionsTypes.checkUserStatus;
      const mockUser = { username: "Paco3", name: "Paco Plaza", token: "xxxx" };
      const expectedAction = { type: checkUserStatusType, user: mockUser };

      const action = checkUserStatusAction(mockUser);
      expect(action).toEqual(expectedAction);
    });
  });
});
