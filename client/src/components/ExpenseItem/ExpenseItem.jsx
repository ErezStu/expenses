import ExpenseDate from "../ExpenseDate/ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = ({ expense, deleteExpenseHandler }) => {
  return (
    <div className="expense-item">
      <button
        onClick={() => deleteExpenseHandler(expense._id)}
        className="expense-item__delete_button"
      >
        מחק שורה
      </button>
      <p className="expense-item__price">₪ {expense.price}</p>
      <div className="expense-item__title_wrapper">
        <h3 className="expense-item__title">{expense.title}</h3>
      </div>
      <ExpenseDate expense={expense} />
    </div>
  );
};

export default ExpenseItem;
