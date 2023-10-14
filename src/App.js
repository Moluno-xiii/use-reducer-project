
import React, { useReducer } from "react";
import Header from "./Header";
import Amount from "./Amount";
import Buttons from "./Buttons";


const initialState = {
  accountOpen: false,
  balance: 0,
  loan: 0,
};



const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        accountOpen: true,
        balance: 500,
      };

    case "deposit":
      return {
        ...state,
        balance: state.balance + 150,
      };

    case "withdraw":
      if (state.balance >= 50){
      return {
        ...state,
        balance: state.balance - 50,
      };}else {
        return {
          ...state,
          balance : state.balance - state.balance
        }
      }
    case "request loan":
      return {
        ...state,
        loan: state.loan + action.payload,
        balance: action.payload + state.balance
      };
    case "pay loan":
      if (state.loan > 0) {
        return {
          ...state,
          loan: state.loan - 5000,
        };
      } else {
        return {
          ...state,
          loan: 0,
        };
      }
    case "close":
      return {
        ...initialState
      }

    default:
      throw new Error("invalid action");
  }
};
function App() {
  const [{ accountOpen, loan, balance }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const showClose = loan === 0 && balance === 0 && accountOpen ;
  // const showClose = true;

  return (
    <div className="body">
      <Header />
      <Amount loan={loan} balance={balance} />
      <Buttons accountOpen={accountOpen} dispatch={dispatch} close = {showClose}/>
    </div>
  );
}

export default App;
