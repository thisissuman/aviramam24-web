import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../src/constant/env";
import { addUser } from "../src/utils/userSlice";
import EditProfile from "./EditProfile";
import ProfileCard from "./ProfileCard";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/profile/view`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok && response.status === 401) {
        nav("/login");
        return;
      }

      const userData = await response.json();
      dispatch(addUser(userData));
    } catch (error) {
      console.error("Network error:", error);
      nav("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          isEditing ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {user && <ProfileCard user={user.user} onEditClick={toggleEdit} />}
      </div>
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          isEditing ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {user && <EditProfile user={user.user} onSave={toggleEdit} />}
      </div>
    </div>
  );
};

export default ProfilePage;