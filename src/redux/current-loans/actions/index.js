import * as constants from "../constants";

export const setCurrentLoans = (currentLoans) => ({
  type: constants.SET_CURRENT_LOANS,
  payload: { currentLoans },
});

export const showInvestModal = () => ({
  type: constants.SHOW_INVEST_MODAL,
});

export const hideInvestModal = () => ({
  type: constants.HIDE_INVEST_MODAL,
});

export const setSelectedLoan = (loan) => ({
  type: constants.SET_SELECTED_LOAN,
  payload: { loan },
});
