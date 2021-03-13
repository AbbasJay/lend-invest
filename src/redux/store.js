import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { currentLoansReducer } from "./current-loans/reducers";

export const store = createStore(
  combineReducers({
    currentLoans: currentLoansReducer,
  }),
  composeWithDevTools()
);

export default store;
