import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthForm from "../../components/AuthForm/AuthForm";
import { useGetToken } from "../../hooks/hooks";

import "./Auth.css";

const Auth = ({ url }) => {
  const [islogin, setIsLogin] = useState(true);

  const token = useGetToken();

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      // navigate("/");
      window.location.reload("/");
    }
  }, [token, navigate]);

  return (
    <div className="expenses-auth">
      <h1 className="expenses-auth__title">{islogin ? "התחברות" : "הרשמה"}</h1>
      <AuthForm islogin={islogin} url={url} />
      <div className="expenses-auth__switch_form">
        {!islogin ? "רשום/ה כבר?" : "לא רשום/ה עדיין?"}{" "}
        <span onClick={() => setIsLogin(!islogin)}>
          לחץ/י כאן {islogin ? "להרשמה" : "להתחברות"}
        </span>
      </div>
    </div>
  );
};

export default Auth;
