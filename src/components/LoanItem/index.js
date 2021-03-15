import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showInvestModal, setSelectedLoan } from "../../redux/actions";

import "./styles.css";

export const LoanItem = ({ loan }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showInvestModal());
    dispatch(setSelectedLoan(loan));
  };

  return (
    <div className={"loan-item"}>
      <div>
        <h3>{loan.title}</h3>
        <div className={"loan-details"}>
          <span>{`Amount: £${loan.amount}`}</span>
          <span>{`Annual return: ${loan.annualised_return}%`}</span>
          <span>{`Loan to value: ${loan.ltv}%`}</span>
        </div>
      </div>

      <div className={"invest-container"}>
        <div className={"invest-text"}>{loan.invested && "Invested"}</div>
        <div>
          <button className={"invest-button"} onClick={handleClick}>
            INVEST
          </button>
        </div>
      </div>
    </div>
  );
};
