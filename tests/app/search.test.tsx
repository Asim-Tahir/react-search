// @vitest-environment happy-dom

import { screen, fireEvent } from "@testing-library/react";

import store from "@/store";
import userService from "@/services/user";
import { server } from "%/mocks/server";
import { setupApp } from "%/utils";

describe("search functionality", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
    store.dispatch(userService.endpoints.getUsers.initiate());
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should name input works correctly", () => {
    setupApp();

    const nameInput = screen.getByPlaceholderText(/name/i);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue("");

    fireEvent.change(nameInput, { target: { value: "Nedra Fritsch" } });

    expect(nameInput).toHaveValue("Nedra Fritsch");

    expect(screen.findAllByRole("article")).resolves.toHaveLength(1);
  });

  test("should company input works correctly", () => {
    setupApp();

    const companyInput = screen.getByPlaceholderText(/company - autocomplete/i);
    expect(companyInput).toBeInTheDocument();
    expect(companyInput).toHaveValue("");

    fireEvent.change(companyInput, {
      target: { value: "Beahan, Gaylord and Grimes" },
    });

    expect(companyInput).toHaveValue("Beahan, Gaylord and Grimes");

    expect(screen.findAllByRole("article")).resolves.toHaveLength(1);
  });
});
