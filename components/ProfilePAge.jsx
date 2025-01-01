// components/ProfilePage.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../src/constant/env";
import { addUser } from "../src/utils/userSlice";
import EditProfile from "./EditProfile";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.user);

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

  return user && <EditProfile user={user} />;
};

export default ProfilePage;