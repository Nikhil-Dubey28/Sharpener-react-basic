import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";



const NewExpense = () => {


  const onSave = (expenseData) => {
    console.log({...expenseData, id : Math.random().toString()});
    }
    
  return (
    <div className="new-expense">
      <ExpenseForm onsave={onSave}/>
    </div>
  );
};

export default NewExpense;