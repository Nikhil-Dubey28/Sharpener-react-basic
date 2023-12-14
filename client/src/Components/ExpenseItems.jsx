import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItems = ({expense}) => {

  return (
    <div className='expense-item'>
        {/* <h1>Expenses</h1> */}
        <ExpenseDate date = {expense.date}/>
        <ExpenseDetails title = {expense.title} amount = {expense.amount}/>
            
        

    </div>
  )
}

export default ExpenseItems