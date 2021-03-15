export const convertLoansToCurrencies = (loans) => {
  const totalAmount = loans
    .reduce((acc, loan) => {
      let string = loan.available.split(",").join("");
      let number = (acc += parseInt(string));

      return number;
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `£${totalAmount}`;
};

export const convertToNumber = (numberStr) => {
  if (numberStr) {
    return parseInt(numberStr.split(",").join(""));
  }
  return 0;
};

export const convertToAmount = (number) =>
  number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const secondsToDays = (seconds) => Math.floor(seconds / 86400);
