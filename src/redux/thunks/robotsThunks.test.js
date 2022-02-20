import { loadRobotsThunk } from "../thunks/robotsThunks";

describe("Given a loadRobots thunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadRobots action", async () => {
      const dispatch = jest.fn();

      await loadRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
