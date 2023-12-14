import React from 'react'

const ExpenseDate = ({date}) => {
  return (
    <p>{date.toISOString()}</p>
  )
}

export default ExpenseDate