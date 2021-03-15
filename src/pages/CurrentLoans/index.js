import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { hideInvestModal } from "../../redux/current-loans/actions";

import { InvestInModal } from "../../components/InvestInLoanModal";

import { LoanItem } from "../../components/LoanItem";
import { convertToCurrency } from "../../utilities";

import "./styles.css";

export const CurrentLoans = () => {
  const dispatch = useDispatch();

  const loans = useSelector((state) => state.currentLoans.loans);
  const investModal = useSelector((state) => state.ui.investModal);

  const totalAmount = convertToCurrency(loans);

  const renderedLoans = loans.map((loan) => (
    <LoanItem key={loan.id} loan={loan} />
  ));

  const handleClick = () => dispatch(hideInvestModal());

  return (
    <>
      {investModal && (
        <>
          <div
            className={"invest-modal-background"}
            onClick={() => handleClick()}
          ></div>
          <div className={"invest-modal-container"}>{<InvestInModal />}</div>
        </>
      )}
      <div className={"heading"}>Current Loans</div>
      <div className={"loans-container"}>{renderedLoans}</div>
      <div className={"amount-container"}>
        Total amount available for investments:
        <b className={"total-amount"}>{totalAmount}</b>
      </div>
    </>
  );
};
