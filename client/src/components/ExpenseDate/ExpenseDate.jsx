import "./ExpenseDate.css";

const ExpenseDate = ({ expense }) => {
  const expenseFormattingDate = new Date(expense.date);
  const month = expenseFormattingDate.toLocaleString("he-il", {
    month: "long",
  });
  // const year = expenseFormattingDate.getFullYear();
  const day = expenseFormattingDate.toLocaleString("en-us", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      {/* <div className="expense-date__year">{year}</div> */}
    </div>
  );
};

export default ExpenseDate;
