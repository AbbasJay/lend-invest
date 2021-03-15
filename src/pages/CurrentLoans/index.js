import React from "react";
import { useSelector } from "react-redux";

import { InvestInModal } from "../../components/InvestInLoanModal";

import { LoanItem } from "../../components/LoanItem";
import { convertLoansToCurrencies } from "../../utilities";

import "./styles.css";

export const CurrentLoans = () => {
  const loans = useSelector((state) => state.currentLoans.loans);
  const investModal = useSelector((state) => state.ui.investModal);

  const totalAmount = convertLoansToCurrencies(loans);

  const renderedLoans = loans.map((loan) => (
    <LoanItem key={loan.id} loan={loan} />
  ));

  return (
    <>
      {investModal && <InvestInModal />}
      <div className={"heading"}>Current Loans</div>
      <div className={"loans-container"}>{renderedLoans}</div>
      <div className={"amount-container"}>
        Total amount available for investments:
        <b className={"total-amount"}>{totalAmount}</b>
      </div>
    </>
  );
};
