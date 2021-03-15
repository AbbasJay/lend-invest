import { currentLoansReducer, initialState } from ".";
import { setCurrentLoans } from "../../actions";

let mockInitialState = {
  loans: [],
};

const currentLoans = {
  loans: [
    {
      id: "1",
      available: "8,250",
    },
    {
      id: "2",
      available: "14,250",
    },
    {
      id: "3",
      available: "2,250",
    },
  ],
};

describe("current loans reducer", () => {
  it("should return the initial state", () => {
    expect(currentLoansReducer(initialState, {})).toEqual(mockInitialState);
  });

  it("should handle setCurrentLoans action", () => {
    const expectedResult = currentLoansReducer(
      initialState,
      setCurrentLoans(currentLoans)
    );

    expect(expectedResult).toEqual(currentLoans);
  });
});
