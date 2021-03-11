import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import currentLoansReducer from "./current-loans";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools();

export default createStore(
  combineReducers({
    currentLoans: currentLoansReducer,
  }),
  composeEnhancer()
);
