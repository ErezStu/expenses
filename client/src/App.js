import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGetUserID } from "./hooks/hooks";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import ExpensesManager from "./pages/ExpensesManager/ExpensesManager";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const URL = "http://localhost:5000";

const USER_URL = `${URL}/api/users`;

const App = () => {
  const userID = useGetUserID();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get(`${USER_URL}/${userID}`);
        setUserInfo(res.data);
      } catch (err) {
        toast.error("משהו השתבש, אנא נסה/י יותר מאוחר");
      }
    };
    if (userID) {
      getUserInfo();
    }
  }, [userID]);

  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar userInfo={userInfo} />
      <Routes>
        <Route path="/auth" element={<Auth url={URL} />} />
        <Route path="/" element={<ExpensesManager url={URL} />} />
        <Route path="/profile" element={<Profile userInfo={userInfo} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
