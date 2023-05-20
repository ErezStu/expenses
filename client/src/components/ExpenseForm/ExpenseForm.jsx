import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { useGetToken, useGetUserID } from "../../hooks/hooks";

import "./ExpenseForm.css";
import ExpenseCategory from "../ExpenseCategory/ExpenseCategory";

const ExpenseForm = ({ onSaveExpenseData, setCanEditing, url }) => {
  const userID = useGetUserID();
  const token = useGetToken();

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
    enteredCategory: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const expnseData = {
        title: userInput.enteredTitle,
        price: +userInput.enteredPrice,
        date: new Date(userInput.enteredDate),
        category: userInput.enteredCategory,
      };

      if (
        userInput.enteredTitle === "" ||
        userInput.enteredPrice === "" ||
        userInput.enteredDate === "" ||
        userInput.enteredCategory === ""
      )
        return toast(".לא מילאת את אחד השדות");
      else
        await axios.post(
          `${url}/api/expenses/${userID}`,
          {
            title: expnseData.title,
            price: expnseData.price,
            date: expnseData.date,
            category: expnseData.category,
          },
          {
            headers: { authorization: token },
          }
        );

      onSaveExpenseData(expnseData);

      setUserInput({
        enteredTitle: "",
        enteredPrice: "",
        enteredDate: "",
        enteredCategory: "",
      });

      setCanEditing(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const cancelForm = () => {
    setCanEditing(false);
  };

  return (
    <form className="new-expense__form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>שם המוצר</label>
          <input
            type="text"
            onChange={(e) =>
              setUserInput({ ...userInput, enteredTitle: e.target.value })
            }
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>מחיר</label>
          <input
            type="number"
            step="0.01"
            onChange={(e) =>
              setUserInput({ ...userInput, enteredPrice: e.target.value })
            }
            value={userInput.enteredPrice}
          />
        </div>
        <div className="new-expense__control">
          <label>קטגוריה</label>
          <ExpenseCategory userInput={userInput} setUserInput={setUserInput} />
        </div>
        <div className="new-expense__control">
          <label>תאריך</label>
          <input
            type="date"
            min="2019-01-05"
            onChange={(e) =>
              setUserInput({ ...userInput, enteredDate: e.target.value })
            }
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions_wrapper">
        <button className="new-expense__actions_submit" type="submit">
          הוסף קניה
        </button>
        <button
          className="new-expense__actions_cancel"
          type="button"
          onClick={cancelForm}
        >
          ביטול
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
