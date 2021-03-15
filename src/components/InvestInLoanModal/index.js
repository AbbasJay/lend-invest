import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  secondsToDays,
  convertToNumber,
  convertToAmount,
} from "../../utilities";

import { hideInvestModal, setInvestedAmount } from "../../redux/actions";

import "./styles.css";

export const InvestInModal = () => {
  const dispatch = useDispatch();
  const [investAmount, setInvestAmount] = useState("");
  const [error, setError] = useState("");
  const selectedLoan = useSelector((state) => state.selectedLoan.loan);

  const modalRef = useRef(null);

  const numberOfDays = (seconds) => secondsToDays(seconds);

  const handleClick = (loanId) => {
    const availableNum = convertToNumber(selectedLoan.available);
    const investedAmountNum = convertToNumber(investAmount);

    if (availableNum - investedAmountNum < 0) {
      setError("Amount too high");
      return;
    } else {
      setError("");
    }

    const newInvestAmount = convertToAmount(
      (availableNum - investedAmountNum).toString()
    );

    dispatch(setInvestedAmount(loanId, newInvestAmount));
    dispatch(hideInvestModal());
  };

  const handleChange = (event) => {
    setInvestAmount(event.target.value);
  };

  const closeModal = (event) => {
    if (!modalRef.current.contains(event.target)) {
      dispatch(hideInvestModal());
    }
  };

  return (
    <div className={"invest-modal-background"} onClick={closeModal}>
      <div className={"invest-modal-container"}></div>
      <div className={"invest-modal-content"} ref={modalRef}>
        <h1>Invest in loan</h1>
        <div className={"invest-details"}>
          <div className={"invest-title"}>
            <span>{selectedLoan.title}</span>
          </div>
          <div className={"invest-items"}>
            <span>{`Amount available: £${selectedLoan.available}`}</span>
            <span>{`Loan ends in: ${numberOfDays(
              selectedLoan.term_remaining
            )} days`}</span>
          </div>
          <div className={"invest-amount-text"}>
            <span>Investment amount (£)</span>
          </div>
        </div>
        <div className={"invest-amount-container"}>
          <input
            onChange={(event) => handleChange(event)}
            className={"invest-input"}
          ></input>
          <button
            className={"invest-button"}
            onClick={() => handleClick(selectedLoan.id)}
          >
            INVEST
          </button>
        </div>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};
