import React from "react";
import { useSelector } from "react-redux";

import { LoanItem } from "../../components/LoanItem";

import "./styles.css";

export const CurrentLoans = () => {
  const loans = useSelector((state) => state.currentLoans.loans);

  const renderedLoans = loans.map((loan) => (
    <LoanItem key={loan.id} loan={loan} />
  ));

  return (
    <>
      <div className={"loans-container"}>{renderedLoans}</div>
    </>
  );
};
