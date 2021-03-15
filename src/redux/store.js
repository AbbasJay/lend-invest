import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { currentLoansReducer } from "./reducers/currentLoans";
import { selectedLoanReducer } from "./reducers/selectedLoan";
import { uiReducer } from "./reducers/ui";

const store = createStore(
  combineReducers({
    currentLoans: currentLoansReducer,
    selectedLoan: selectedLoanReducer,
    ui: uiReducer,
  }),
  composeWithDevTools()
);

export default store;
