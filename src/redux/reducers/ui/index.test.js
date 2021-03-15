import { uiReducer, initialState } from "./";
import { showInvestModal, hideInvestModal } from "../../actions";

let mockInitialState = {
  investModal: false,
};

describe("ui reducer", () => {
  it("should return the initial state", () => {
    expect(uiReducer(initialState, {})).toEqual(mockInitialState);
  });

  it("should handle showInvestModal action", () => {
    const expectedResult = uiReducer(initialState, showInvestModal());
    expect(expectedResult).toEqual({ investModal: true });
  });

  it("should handle hideInvestModal action", () => {
    const expectedResult = uiReducer(initialState, hideInvestModal());
    expect(expectedResult).toEqual({ investModal: false });
  });
});
