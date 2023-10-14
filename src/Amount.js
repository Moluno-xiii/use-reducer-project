import React from 'react'

const Amount = ({loan, balance}) => {
  return (
    <div className='amount'>
        <p>Balance : {balance}</p>
        <p>Loan : {loan}</p>
    </div>
  )
}

export default Amount