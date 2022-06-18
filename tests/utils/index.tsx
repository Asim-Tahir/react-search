import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "@/store";
import { Search } from "@/context";
import App from "@/App";

export const setupApp = () =>
  render(
    <Provider store={store}>
      <Search.Provider>
        <App />
      </Search.Provider>
    </Provider>
  );
