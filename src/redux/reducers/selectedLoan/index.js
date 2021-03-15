import * as constants from "../../constants";

export const initialState = {
  loan: null,
};

export const selectedLoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SELECTED_LOAN: {
      return {
        ...state,
        loan: action.payload.loan,
      };
    }
    default:
      return state;
  }
};
