import { areasSelector, companySelector } from "@/store/search/selectors";
import userService from "@/services/user";
import store from "@/store";
import { server } from "%/mocks/server";

describe("Search Store Selectors", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
    store.dispatch(userService.endpoints.getUsers.initiate());
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("areasSelector()", () => {
    test("should select area fields", () => {
      expect(areasSelector(store.getState())).toEqual([
        { id: "1", value: "Markets" },
        { id: "2", value: "Integration" },
      ]);
    });
  });

  describe("companySelector()", () => {
    test("should select company fields", () => {
      expect(companySelector(store.getState())).toEqual([
        { id: "1", value: "Quigley, Mosciski and Daniel" },
        { id: "2", value: "Beahan, Gaylord and Grimes" },
      ]);
    });
  });
});
