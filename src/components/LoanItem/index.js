import React from "react";
import { useDispatch } from "react-redux";

import {
  showInvestModal,
  setSelectedLoan,
} from "../../redux/current-loans/actions";

import "./styles.css";

export const LoanItem = ({ loan }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showInvestModal());
    dispatch(setSelectedLoan(loan));
  };

  return (
    <div className={"loan-item"} key={loan.id}>
      <div>
        <h3>{loan.title}</h3>
        <div className={"loan-details"}>
          <span>{`Amount: £${loan.amount}`}</span>
          <span>{`Annual return: ${loan.annualised_return}%`}</span>
          <span>{`Loan to value: ${loan.ltv}%`}</span>
        </div>
      </div>

      <div className={"invest-container"}>
        <div className={"invest-text"}>{}</div>
        <div>
          <button className={"invest-button"} onClick={() => handleClick(loan)}>
            INVEST
          </button>
        </div>
      </div>
    </div>
  );
};
