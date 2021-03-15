import * as constants from "../../constants";

export const initialState = {
  loans: null,
};

export const currentLoansReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_CURRENT_LOANS: {
      return {
        ...state,
        loans: action.payload.currentLoans.loans,
      };
    }
    default:
      return state;
  }
};
