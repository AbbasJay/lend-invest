import React from "react";

export const LoanItem = ({ loan }) => {
  return <div key={loan.id}>{loan.available}</div>;
};
