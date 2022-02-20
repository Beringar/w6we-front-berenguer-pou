import { render } from "@testing-library/jest-dom";
import { server } from "./mocks/server.js";
import { Provider } from "react-redux";
import store from "../src/redux/store";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithProviders = (component) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};

export default renderWithProviders;
