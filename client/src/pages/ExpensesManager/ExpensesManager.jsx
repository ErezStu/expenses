import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Expenses from "../../components/Expenses/Expenses";
import NewExpense from "../../components/NewExpense/NewExpense";
import { useGetUserID, useGetToken } from "../../hooks/hooks";

const ExpensesManager = ({ url }) => {
  const EXPENSES_URL = `${url}/api/expenses`;

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = useGetToken();

  const userID = useGetUserID();

  useEffect(() => {
    const getExpenses = async () => {
      try {
        setLoading(true);
        if (!token) {
          navigate("/auth");
        } else {
          const res = await axios.get(`${EXPENSES_URL}/${userID}`, {
            headers: { authorization: token },
          });
          setExpenses(res.data.expenses);
        }
        setLoading(false);
      } catch (err) {
        toast.error("משהו השתבש אנא נסה/י יותר מאוחר");
        setLoading(false);
      }
    };
    getExpenses();
  }, [navigate, token, userID, EXPENSES_URL]);

  const addExpenseHandler = (newEexpense) => {
    setExpenses((prevExpenses) => {
      return [newEexpense, ...prevExpenses];
    });
    toast.success("ההוצאה נוספה");
  };

  const onDeleteExpenseHandler = async (deletedExpense) => {
    try {
      setLoading(true);
      const ressponse = await axios.delete(
        `${EXPENSES_URL}/${deletedExpense}/${userID}`,
        {
          headers: { authorization: token },
        }
      );
      setExpenses((prevExpenses) => {
        return prevExpenses.filter(
          (expense, i) => expense._id !== deletedExpense
        );
      });
      toast.warning(ressponse.data.message);
      setLoading(false);
    } catch (err) {
      toast.error("משהו השתבש אנא נסה/י יותר מאוחר");
      setLoading(false);
    }
  };

  return (
    <>
      <NewExpense onAddNewExpense={addExpenseHandler} url={url} />
      <Expenses
        loading={loading}
        expenses={expenses}
        onDeleteExpense={onDeleteExpenseHandler}
      />
    </>
  );
};

export default ExpensesManager;
