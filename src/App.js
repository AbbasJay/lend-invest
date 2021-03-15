import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import currentLoansData from "./assets/current-loans.json";
import { setCurrentLoans } from "./redux/actions";

import { CurrentLoans } from "./pages/CurrentLoans";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setCurrentLoans(currentLoansData));
    setLoading(false);
  }, []);

  return loading ? <div>loading...</div> : <CurrentLoans />;
};

export default App;
