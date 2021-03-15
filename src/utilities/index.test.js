import { convertLoansToCurrencies } from "./";

const mockLoans = [
  {
    available: "8,250",
  },
  {
    available: "14,250",
  },
  {
    available: "2,250",
  },
];

describe("utilities", () => {
  describe("convertLoansToCurrencies function", () => {
    it("should take in comma seperated strings and return the sum in currency format", () => {
      const convertedNumber = convertLoansToCurrencies(mockLoans);
      expect(convertedNumber).toEqual("£24,750");
    });
  });
});
