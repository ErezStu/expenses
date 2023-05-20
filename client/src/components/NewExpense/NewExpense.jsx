import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddNewExpense, url }) => {
  const [canEditing, setCanEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };

    onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!canEditing && (
        <button onClick={() => setCanEditing(!canEditing)}>הוספת קניה</button>
      )}
      {canEditing && (
        <ExpenseForm
          url={url}
          onSaveExpenseData={saveExpenseDataHandler}
          setCanEditing={setCanEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
