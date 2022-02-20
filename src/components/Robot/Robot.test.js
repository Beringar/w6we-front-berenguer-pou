import { screen, render } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it is rendered with a robot", () => {
    test("Then it should render the name of the robot", () => {
      const robot = {
        id: 4,
        name: "testing robot",
        imageUrl: "",
        speed: 3,
        resistance: 4,
      };
      render(<Robot robot={robot} />);

      const robotName = screen.getByRole("heading", { name: /testing robot/i });

      expect(robotName).toBeInTheDocument();
    });
  });
});
