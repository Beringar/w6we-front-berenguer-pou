import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("then it shoul display the 'This is going to be a ROBOTS app'", () => {
      render(<App />);
      const heading = screen.getByRole("heading", {
        name: /this is going to be a ROBOTS app/i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
