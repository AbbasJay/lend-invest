import React from "react";
import { useSelector } from "react-redux";

import { LoanItem } from "../../components/LoanItem";
import { convertToCurrency } from "../../utilities";

import "./styles.css";

export const CurrentLoans = () => {
  const loans = useSelector((state) => state.currentLoans.loans);

  const renderedLoans = loans.map((loan) => (
    <LoanItem key={loan.id} loan={loan} />
  ));

  const totalAmount = convertToCurrency(loans);

  return (
    <>
      <h1>Current Loans</h1>
      <div className={"loans-container"}>{renderedLoans}</div>
      <div className={"amount-container"}>
        Total amount available for investments:
        <b className={"total-amount"}>{totalAmount}</b>
      </div>
    </>
  );
};
