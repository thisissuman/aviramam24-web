import React, { useEffect } from "react";
import FeesAndCharges from "./FeesAndCharges";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import InMediaSection from "./InMediaSection";
import Services from "./Services";
import TestimonialSection from "./TestiMonialSection";
import { Outlet } from "react-router";
import { BASE_URL } from "../src/constant/env";
import { addUser } from "../src/utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const Body = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  const fetchUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/profile/view`, {
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401) {
          nav("/login");
        }
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
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <InMediaSection />
      <TestimonialSection />
      <FeesAndCharges />
      <Footer />
    </div>
  );
};

export default Body;
