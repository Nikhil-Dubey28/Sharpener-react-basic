import React, { useState } from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItems = ({ expense }) => {

  const [title, setTitle] = useState(expense.title)  
console.log(title)
  const handleClick = () => {
setTitle('updated!!')
  }

  return (
    <Card className='expense-item'>
      {/* <h1>Expenses</h1> */}
      <ExpenseDate date={expense.date} />
      <ExpenseDetails title={title} amount={expense.amount} />
      <button onClick={() => handleClick()}>Change Title</button>


    </Card>
  )
}

export default ExpenseItems