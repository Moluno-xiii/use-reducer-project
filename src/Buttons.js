import React from "react";

const Buttons = ({ accountOpen, dispatch, close, balance, loan }) => {
  const handleStart = () => {
    dispatch({ type: "start" });
  };
  const handleDeposit = () => {
    dispatch({ type: "deposit" });
  };
  const handleWithdraw = () => {
    dispatch({ type: "withdraw" });
  };
  const handleRequestLoan = () => {
    dispatch({type: "request loan", payload : 5000})
  }
  const handlePayLoan = () => {
    dispatch({type: "pay loan"})
  }
  const handleClose = () => {
    dispatch({type: "close"})
  }

  return (
    <div className="btns">
      <button className="btn" onClick={handleStart} disabled={accountOpen}>
        open account
      </button>
      <>
      <button className="btn" disabled={!accountOpen} onClick={handleDeposit} >
        deposit
      </button>
      </>
      <>
      <button className="btn" disabled={!accountOpen || balance === 0} onClick = {handleWithdraw} >
        withdraw
      </button>
      </>
      <>
      <button className="btn" disabled={!accountOpen || loan >= 10000} onClick={handleRequestLoan}>
        request a loan of 5000
      </button>
      </>
      <>
      <button className="btn" disabled={!accountOpen} onClick={handlePayLoan}>
        pay loan
      </button>
      </>
      {close && <button className="btn" disabled={false} onClick={handleClose}>
        close account
      </button>}
    </div>
  );
};

export default Buttons;
