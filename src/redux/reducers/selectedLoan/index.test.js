import { selectedLoanReducer, initialState } from "./";
import { setSelectedLoan } from "../../actions";

let mockInitialState = {
  loan: null,
};

const loan = {
  id: "1",
  available: "8,250",
  title: "mock title",
};

describe("selected loan reducer", () => {
  it("should return the initial state", () => {
    expect(selectedLoanReducer(initialState, {})).toEqual(mockInitialState);
  });

  it("should handle setSelectedLoan action", () => {
    const expectedResult = selectedLoanReducer(
      initialState,
      setSelectedLoan(loan)
    );
    expect(expectedResult.loan).toEqual(loan);
  });
});
