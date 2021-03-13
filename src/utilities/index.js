export const convertToCurrency = (loans) => {
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
