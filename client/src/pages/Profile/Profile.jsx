import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.css";

const Profile = ({ userInfo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.name) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <div className="expenses__profile_container">
      <h1 className="expenses__profile_title">{userInfo.name}</h1>
      <p>אימייל</p>
      <h4 className="expenses__profile_email">{userInfo.email}</h4>
    </div>
  );
};

export default Profile;
