import * as constants from "../../constants";

export const initialState = {
  investModal: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_INVEST_MODAL: {
      return {
        ...state,
        investModal: true,
      };
    }
    case constants.HIDE_INVEST_MODAL: {
      return {
        ...state,
        investModal: false,
      };
    }
    default:
      return state;
  }
};
