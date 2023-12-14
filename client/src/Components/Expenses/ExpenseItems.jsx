import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItems = ({ expense }) => {

  const handleClick = () => {
console.log('clicked')
  }

  return (
    <Card className='expense-item'>
      {/* <h1>Expenses</h1> */}
      <ExpenseDate date={expense.date} />
      <ExpenseDetails title={expense.title} amount={expense.amount} />
      <button onClick={() => handleClick()}></button>


    </Card>
  )
}

export default ExpenseItems