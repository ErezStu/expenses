import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import eyeLogo from "../../assets/eye-solid.svg";

import "./AuthForm.css";

const AuthForm = ({ islogin, url }) => {
  const AUTH_URL = `${url}/api/users`;

  const [showPass, setShowPass] = useState(false);

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const navigation = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${AUTH_URL}/${islogin ? "login" : "register"}`,
        {
          name: user.name.toLowerCase(),
          email: user.email.toLowerCase(),
          password: user.password,
        }
      );
      if (!islogin) {
        await axios.post(`${AUTH_URL}/login`, {
          email: user.email.toLowerCase(),
          password: user.password,
        });
      }

      if (res) {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userID", res.data.userID);
        navigation("/");
        toast.success(`ברוך/כה הבא/ה לאפליקציית ההוצאות`);
      } else {
        toast.error("משהו השתבש, אנא נסה/י מאוחר יותר");
      }
    } catch (err) {
      toast.error("אחד מהשדות לא נכונים, אנא נסה/י שוב");
    }
  };

  return (
    <form className="expenses-auth__form" onSubmit={submitHandler}>
      {!islogin && (
        <input
          className="expenses-auth__input name_input"
          type="text"
          placeholder="שמך"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      )}
      <input
        className="expenses-auth__input email_input"
        type="email"
        placeholder="אימייל"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <div className="password_input_container">
        <img
          className="password_input_eye"
          src={eyeLogo}
          alt="eye"
          onClick={() => setShowPass(!showPass)}
        />
        <input
          className="expenses-auth__input password_input"
          type={!showPass ? "password" : "text"}
          placeholder="סיסמא"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="expenses-auth__btn">
        {islogin ? "התחבר/י" : "הרשם/י"}
      </button>
    </form>
  );
};

export default AuthForm;
