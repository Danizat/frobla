import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { HashRouter } from "react-router-dom";

import "./index.css";
import "antd/dist/antd.css";
import App from "./App";

import ArticlesStore from "./stores/articlesStore";

const stores = {
  ArticlesStore,
};

// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
