import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useGetUserID } from "../../hooks/hooks";

import "./Navbar.css";

const Navbar = ({ userInfo }) => {
  const navigate = useNavigate();

  const userID = useGetUserID();

  const logoutHandler = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userID");
    navigate("/auth");
    toast.success("להתראות");
  };

  return (
    <div className="expenses-navbar">
      <div className="expenses-navbar__left_container">
        {userID ? (
          <div className="expenses-navbar__left_login">
            <button onClick={logoutHandler} className="expense-navbar__logout">
              התנתק
            </button>
          </div>
        ) : (
          <Link className="expenses-navbar__link" to="/auth">
            התחבר
          </Link>
        )}
      </div>
      {userID && (
        <div className="expenses-navbar__right_container">
          <Link to="/profile" className="expenses-navbar__profile">
            {userInfo.name}
          </Link>
          <Link className="expenses-navbar__link" to="/">
            הוצאות
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
