import ExpenseItems from "./Components/Expenses/ExpenseItem"
import NewExpense from "./Components/NewExpense/NewExpense"
import Expenses from "./Components/Expenses/Expenses"

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
      <Expenses items={expenses} />
    </>
  )
}

export default App
