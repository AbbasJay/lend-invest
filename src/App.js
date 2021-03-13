import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import currentLoansData from "./assets/current-loans.json";
import { setCurrentLoans } from "./redux/current-loans/actions";

import { CurrentLoans } from "./pages/CurrentLoans";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    dispatch(setCurrentLoans(currentLoansData));
    setLoding(false);
  }, [dispatch]);

  return loading ? <div>loading...</div> : <CurrentLoans />;
};

export default App;
