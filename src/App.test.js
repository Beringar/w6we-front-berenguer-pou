import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("then it shoul display the 'This is going to be a ROBOTS app'", () => {
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const heading = screen.getByRole("heading", {
        name: /Beringar Robots Catalogue/i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
