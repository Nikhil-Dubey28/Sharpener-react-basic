import ExpenseItems from "./Components/Expenses/ExpenseItems"
import NewExpense from "./Components/NewExpense/NewExpense"

function App() {
  let expenses = [
    {
      title: "Food",
      amount: 100,
      date: new Date(2023, 11, 14)
    },
    {
      title: "Petrol",
      amount: 200,
      date: new Date(2023, 11, 14)
    },
    {

      title: "Clothing",
      amount: 500,
      date: new Date(2023, 11, 14)
    }
  ]

  return (
    <>
    <h2>Lets get started</h2>
      <NewExpense />
   { expenses.map((expense) => {
      return (

        <ExpenseItems expense={expense} />
      )
    })}
    </>
  )
}

export default App
