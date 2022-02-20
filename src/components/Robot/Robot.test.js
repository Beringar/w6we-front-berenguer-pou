import { screen } from "@testing-library/react";
import Robot from "./Robot";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";

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
      renderWithProviders(
        <BrowserRouter>
          <Robot robot={robot} />
        </BrowserRouter>
      );

      const robotName = screen.getByRole("heading", { name: /testing robot/i });

      expect(robotName).toBeInTheDocument();
    });
  });
});
