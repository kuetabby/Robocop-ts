import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as registerServiceWorker from "./serviceWorker";
import "tachyons";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const stores: any = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker.unregister();
