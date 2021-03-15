import * as constants from "../../constants";

export const initialState = {
  loans: [],
};

export const currentLoansReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_CURRENT_LOANS: {
      return {
        ...state,
        loans: action.payload.currentLoans.loans,
      };
    }

    case constants.SET_INVESTED_AMOUNT: {
      const newLoans = [...state.loans];

      const loanIndex = newLoans.findIndex(
        (loan) => loan.id === action.payload.loanId
      );
      newLoans[loanIndex].available = action.payload.investAmount;

      return {
        ...state,
        loans: newLoans,
      };
    }
    default:
      return state;
  }
};
