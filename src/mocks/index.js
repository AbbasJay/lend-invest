export const mockInitialState = () => ({
  currentLoans: {
    loans: [
      {
        title: "title 1.",
        id: "1",
        available: "8,250",
        annualised_return: "1.5",
        ltv: "48.80",
        amount: "85,754",
      },
      {
        title: "Title 2.",
        id: "2",
        available: "14,250",
        annualised_return: "1.5",
        ltv: "48.80",
        amount: "85,754",
      },
      {
        title: "Title 3.",
        id: "3",
        available: "2,250",
        annualised_return: "1.5",
        ltv: "48.80",
        amount: "85,754",
      },
    ],
  },

  ui: {
    investModal: false,
  },

  selectedLoan: {
    title: "Title 3",
    id: "1",
    available: "8,250",
    term_remaining: "864000",
    annualised_return: "1.5",
    ltv: "48.80",
    amount: "85,754",
  },
});
