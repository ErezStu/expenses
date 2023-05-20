import "./ExpensesYearFilter.css";

const ExpensesYearFilter = ({ onChangeYearFilter, selected }) => {
  const dropdownChangeHandler = (e) => {
    onChangeYearFilter(e.target.value);
  };

  return (
    <div className="expenses-year__filter">
      <div className="expenses-year__filter_control">
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesYearFilter;
