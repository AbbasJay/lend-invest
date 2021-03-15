import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { currentLoansReducer } from "./current-loans/reducers/currentLoans";
import { selectedLoanReducer } from "./current-loans/reducers/selectedLoan";
import { uiReducer } from "./current-loans/reducers/ui";

export const store = createStore(
  combineReducers({
    currentLoans: currentLoansReducer,
    selectedLoan: selectedLoanReducer,
    ui: uiReducer,
  }),
  composeWithDevTools()
);

export default store;
