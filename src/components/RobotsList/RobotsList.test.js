import { screen } from "@testing-library/react";
import RobotsList from "./RobotsList";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";

describe("Given a RobotsList component", () => {
  describe("When it is rendered with an array of 2 robots", () => {
    test("Then it should show a list with the two robots", () => {
      const robots = [
        {
          id: 4,
          name: "testing robot",
          imageUrl: "",
          speed: 3,
          resistance: 4,
        },
        {
          id: 99,
          name: "testing robot 5",
          imageUrl: "",
          speed: 0,
          resistance: 9,
        },
      ];

      renderWithProviders(
        <BrowserRouter>
          <RobotsList robots={robots} />
        </BrowserRouter>
      );

      const listOfRobots = screen.getAllByRole("listitem").length;

      expect(listOfRobots).toBe(robots.length);
    });
  });
});
