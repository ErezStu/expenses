import "./ExpenseCategory.css";

const ExpenseCategory = ({ userInput, setUserInput }) => {
  const dropdownChangeHandler = (e) => {
    setUserInput({ ...userInput, enteredCategory: e.target.value });
  };

  return (
    <div className="expense-category__container">
      <div className="expense-category">
        <select
          value={userInput.enteredCategory}
          onChange={dropdownChangeHandler}
        >
          <option value="אוכל">אוכל</option>
          <option value="בית">בית</option>
          <option value="תחביב">תחביב</option>
          <option value="בניין">בניין</option>
          <option value="רכב">רכב</option>
          <option value="חשמל">חשמל</option>
          <option value="ריהוט">ריהוט</option>
          <option value="מטבח">מטבח</option>
          <option value="שונות">שונות</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseCategory;
