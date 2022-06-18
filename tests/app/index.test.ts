// @vitest-environment happy-dom

import { screen } from "@testing-library/react";

import { setupApp } from "%/utils";

describe("initial", () => {
  test("should have name input", () => {
    setupApp();

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  });
  test("should have company input", () => {
    setupApp();

    expect(
      screen.getByPlaceholderText(/company - autocomplete/i)
    ).toBeInTheDocument();
  });

  test("shouldn't have job title input", () => {
    setupApp();

    expect(screen.queryByPlaceholderText(/job title/i)).not.toBeInTheDocument();
  });
  test("shouldn't have area input", () => {
    setupApp();

    expect(screen.queryByDisplayValue(/area/i)).not.toBeInTheDocument();
  });
});
