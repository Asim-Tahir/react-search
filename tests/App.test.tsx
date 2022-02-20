// @vitest-environment happy-dom

import { render, screen } from "@testing-library/react";
import store from "@/store";

import { Provider } from "react-redux";
import App from "@/App";

describe("App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  test("App render correctly", () => {
    expect(screen.getByPlaceholderText(/job title/i)).toBeInTheDocument();
  });
});
