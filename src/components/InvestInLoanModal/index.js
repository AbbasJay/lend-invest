import React from "react";
import { useSelector } from "react-redux";

export const InvestInModal = () => {
  const selectedLoan = useSelector((state) => state.selectedLoan.loan);

  return (
    <div className={"invest-modal-content"}>
      <div>{selectedLoan.amount}</div>
      <div>{selectedLoan.id}</div>
      <div>{selectedLoan.ltv}</div>
      <div>{selectedLoan.title}</div>
    </div>
  );
};
