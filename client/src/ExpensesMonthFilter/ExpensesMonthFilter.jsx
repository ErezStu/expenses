import "./ExpensesMonthFilter.css";

const ExpensesMonthFilter = ({ onChangeMonthFilter, selected }) => {
  const dropdownChangeHandler = (e) => {
    onChangeMonthFilter(e.target.value);
  };

  return (
    <div className="expenses-month__filter">
      <div className="expenses-month__filter_control">
        {/* <label>סנן על פי חודש</label> */}
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="ינואר">ינואר</option>
          <option value="פברואר">פברואר</option>
          <option value="מרץ">מרץ</option>
          <option value="אפריל">אפריל</option>
          <option value="מאי">מאי</option>
          <option value="יוני">יוני</option>
          <option value="יולי">יולי</option>
          <option value="אוגוסט">אוגוסט</option>
          <option value="ספטמבר">ספטמבר</option>
          <option value="אוקטובר">אוקטובר</option>
          <option value="נובמבר">נובמבר</option>
          <option value="דצמבר">דצמבר</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesMonthFilter;
