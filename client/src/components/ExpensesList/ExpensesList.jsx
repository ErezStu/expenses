import { HashLoader } from "react-spinners";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesSubtotal from "../ExpensesSubtotal/ExpensesSubtotal";

import "./ExpensesList.css";

const ExpensesList = ({
  filteredMonth,
  onDeleteExpenseData,
  filteredYearExpenses,
  loading,
  filteredMonthExpenses,
}) => {
  return !loading ? (
    <>
      <div className="expenses-list">
        <ExpensesSubtotal filteredYearExpenses={filteredYearExpenses} />
        {filteredMonthExpenses.length === 0 ? (
          <p className="expenses-list__fallback">{`לא ביצעת קניות ב${filteredMonth}`}</p>
        ) : (
          filteredMonthExpenses.map((expense) => (
            <ExpenseItem
              deleteExpenseHandler={onDeleteExpenseData}
              key={expense._id}
              expense={expense}
            />
          ))
        )}
        {filteredMonthExpenses.length !== 0 && (
          <ExpensesSubtotal
            filteredMonth={filteredMonth}
            filteredMonthExpenses={filteredMonthExpenses}
          />
        )}
      </div>
    </>
  ) : (
    <HashLoader color="#c22929" cssOverride={{ margin: "0 auto" }} />
  );
};

export default ExpensesList;
