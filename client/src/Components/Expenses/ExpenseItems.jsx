import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItems = ({ expense }) => {

  return (
    <Card className='expense-item'>
      {/* <h1>Expenses</h1> */}
      <ExpenseDate date={expense.date} />
      <ExpenseDetails title={expense.title} amount={expense.amount} />



    </Card>
  )
}

export default ExpenseItems