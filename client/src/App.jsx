import ExpenseItems from "./Components/ExpenseItems"

function App() {
  let expenses = [
    {title: "Food",
     amount: 100,
     date : new Date(2023,11,14)
  },
  {
    title: "Petrol",
     amount: 200,
     date : new Date(2023,11,14)
  },
  {

    title: "Clothing",
       amount: 500,
       date : new Date(2023,11,14)
  }
  ]

  return (
    expenses.map((expense) => {
      return (

        <ExpenseItems expense = {expense}/>
      )
    })
  )
}

export default App
