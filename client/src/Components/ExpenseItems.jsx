import React from 'react'
import './ExpenseItems.css'

const ExpenseItems = ({expense}) => {

  return (
    <div className='expense-item'>
        {/* <h1>Expenses</h1> */}
        <p>{expense.date.toISOString()}</p>
        <div className='expense-item__description'>
            <h2>{expense.title}</h2>
            <div className='expense-item__price'>
              <p>${expense.amount}</p>
            </div>
            
        </div>

    </div>
  )
}

export default ExpenseItems