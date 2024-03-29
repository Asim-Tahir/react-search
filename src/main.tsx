import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@/store";
import { Search } from "@/context";

import "@/assets/css/tailwind.pcss";
import App from "@/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Search.Provider>
        <App />
      </Search.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
