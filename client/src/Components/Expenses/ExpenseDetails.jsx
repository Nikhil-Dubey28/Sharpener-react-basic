import React from 'react'

const ExpenseDetails = ({title,amount}) => {
  return (
    <>
    <div className='expense-item__description'>
    <h2>{title}</h2>
    <div className='expense-item__price'>
      <p>${amount}</p>
    </div>
    </div>
    </>
  )
}

export default ExpenseDetails