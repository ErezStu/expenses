import "./ExpensesSubtotal.css";

const ExpensesSubtotal = ({
  filteredYearExpenses,
  filteredMonthExpenses,
  filteredMonth,
}) => {
  const yearSubTotal = (filteredYearExpenses) => {
    let amount = 0;
    for (let i = 0; i < filteredYearExpenses?.length; i++) {
      amount += filteredYearExpenses[i].price;
    }
    return amount.toFixed(2);
  };

  const monthSubTotal = (filteredMonthExpenses) => {
    let amount = 0;
    for (let i = 0; i < filteredMonthExpenses?.length; i++) {
      amount += filteredMonthExpenses[i].price;
    }
    return amount.toFixed(2);
  };

  return (
    <div className="expenses-subtotal_summary_container">
      <h3 className="expenses-subtotal_summary">
        {filteredMonthExpenses
          ? monthSubTotal(filteredMonthExpenses)
          : yearSubTotal(filteredYearExpenses)}
      </h3>
      <h3 className="expenses-subtotal_title">
        סכום כולל {filteredMonthExpenses ? `ל${filteredMonth}` : `לשנה זאת`}{" "}
      </h3>
    </div>
  );
};

export default ExpensesSubtotal;
