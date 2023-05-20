import { useState } from "react";

import ExpensesChart from "../ExpensesChart/ExpensesChart";
import ExpensesYearFilter from "../ExpensesYearFilter/ExpensesYearFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

import "./Expenses.css";
import ExpensesMonthFilter from "../../ExpensesMonthFilter/ExpensesMonthFilter";

const currentDate = new Date();
const currentYear = currentDate.getFullYear().toString();
const currentMonth = currentDate.toLocaleString("he-il", {
  month: "long",
});
const Expenses = ({ expenses, onDeleteExpense, loading }) => {
  const [filteredYear, setFilteredYear] = useState(currentYear);
  const [filteredMonth, setFilteredMonth] = useState(currentMonth);

  const filterChangeYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterChangeMonthHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredYearExpenses = expenses.filter((expense) => {
    const expenseFormattingDate = new Date(expense.date);
    return expenseFormattingDate.getFullYear().toString() === filteredYear;
  });

  const filteredMonthExpenses = filteredYearExpenses.filter((expense) => {
    const expenseFormattingDate = new Date(expense.date);

    return (
      expenseFormattingDate.toLocaleString("he-il", {
        month: "long",
      }) === filteredMonth
    );
  });

  const deletedExpenseHandler = (deletedExpenseData) => {
    onDeleteExpense(deletedExpenseData);
  };

  return (
    <div className="expenses">
      <div className="expenses__filters">
        <ExpensesYearFilter
          selected={filteredYear}
          onChangeYearFilter={filterChangeYearHandler}
        />
        <ExpensesMonthFilter
          selected={filteredMonth}
          onChangeMonthFilter={filterChangeMonthHandler}
        />
      </div>
      <ExpensesChart
        filteredMonth={filteredMonth}
        expenses={filteredYearExpenses}
      />
      <ExpensesList
        loading={loading}
        filteredMonth={filteredMonth}
        filteredYearExpenses={filteredYearExpenses}
        filteredMonthExpenses={filteredMonthExpenses}
        onDeleteExpenseData={deletedExpenseHandler}
      />
    </div>
  );
};

export default Expenses;
