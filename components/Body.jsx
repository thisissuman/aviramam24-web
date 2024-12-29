import React, { useEffect } from "react";
import FeesAndCharges from "./FeesAndCharges";
import Hero from "./Hero";
import InMediaSection from "./InMediaSection";
import Services from "./Services";
import TestimonialSection from "./TestiMonialSection";
import { BASE_URL } from "../src/constant/env";
import { addUser } from "../src/utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const userData = useSelector((state) => state.user);
  const fetchUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/profile/view`, {
        method: "GET",
        credentials: "include",
      });
      console.log(response.status);
      if (!response.ok && response.status === 401) {
        nav("/login");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const user = await response.json();
      dispatch(addUser(user));
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    fetchUser();
    /* if (!userData) {
    } */
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <InMediaSection />
      <TestimonialSection />
      <FeesAndCharges />
    </div>
  );
};

export default Body;
