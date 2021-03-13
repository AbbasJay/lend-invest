import * as constants from "../constants";

export const setCurrentLoans = (currentLoans) => ({
  type: constants.SET_CURRENT_LOANS,
  payload: { currentLoans },
});
