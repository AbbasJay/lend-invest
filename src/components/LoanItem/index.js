import React from "react";

import "./styles.css";

export const LoanItem = ({ loan }) => {
  return (
    <div className={"loan-item"} key={loan.id}>
      <div>
        <h3>{loan.title}</h3>
        <div className={"loan-details"}>
          <span>{`Amount: £${loan.amount}`}</span>
          <span>{`Anuual return: ${loan.annualised_return}%`}</span>
          <span>{`Loan to value: ${loan.ltv}%`}</span>
        </div>
      </div>

      <div className={"invest-container"}>
        <div className={"invest-text"}>{}</div>
        <div>
          <button className={"invest-button"}>INVEST</button>
        </div>
      </div>
    </div>
  );
};
