// @vitest-environment happy-dom

import { screen, fireEvent } from "@testing-library/react";

import store from "@/store";
import userService from "@/services/user";
import { server } from "%/mocks/server";
import { setupApp } from "%/utils";

describe("filter functionality", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
    store.dispatch(userService.endpoints.getUsers.initiate());
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should show <aside> on search", () => {
    setupApp();

    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(nameInput, { target: { value: "Nedra Fritsch" } });

    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });
});
