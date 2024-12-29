import React, { useState } from "react";
import { IoMdMenu, IoMdClose, IoIosCall } from "react-icons/io";
import logo from "../src/assets/logo.png";
import aviramam24 from "../src/assets/aviramam24.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "../src/utils/userSlice";
import { BASE_URL } from "../src/constant/env";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  console.log(userData.user);

  const logouthandler = async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST", // Change to POST since backend uses post route
        credentials: "include", // Important for sending cookies
      });

      if (response.ok) {
        dispatch(removeUser());
        nav("/login");
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <>
      {/* Top bar */}
      {userData?.user && (
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block font-bold">
            Book your slot today
          </p>
          <div className="inline-flex gap-5 items-center">
            <p className="cursor-pointer">Click Here 👆</p>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1 flex items-center">
          {/* Logo */}
          <Link to="/">
            <img
              height={80}
              width={80}
              src={logo}
              alt="Logo"
              className="mr-3"
            />
          </Link>
          <img
            src={aviramam24}
            alt="Aviraman24"
            className="h-[100px] w-[100px] md:h-[20px] md:w-[200px]"
          />
          {/* Contact Info */}
          <div className="hidden md:flex px-10 items-center">
            <IoIosCall className="h-5 w-5 text-black" />
            <p className="text-orange-600 pl-3">
              Call Us: <span className="text-black">9876543210</span>
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-none gap-4">
          {/* Dropdown Menu for Mobile */}
          {userData?.user && (
            <div className="dropdown md:hidden">
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <IoMdClose className="h-6 w-6" />
                ) : (
                  <IoMdMenu className="h-6 w-6" />
                )}
              </button>
              {menuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Programme</a>
                  </li>
                  <li>
                    <a>In Media</a>
                  </li>
                  <li>
                    <a>Testimonial</a>
                  </li>
                  <li>
                    <a>Fees</a>
                  </li>
                </ul>
              )}
            </div>
          )}

          {/* Links for Desktop */}
          {userData?.user && (
            <ul className="hidden md:flex gap-6 items-center text-black/60 font-semibold">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Programme</a>
              </li>
              <li>
                <a>In Media</a>
              </li>
              <li>
                <a>Testimonial</a>
              </li>
              <li>
                <a>Fees</a>
              </li>
            </ul>
          )}

          {/* Profile Dropdown */}
         {userData?.user &&  <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-99 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link onClick={logouthandler}>Logout</Link>
              </li>
              <li>
                <Link to="/profile/view">Profile</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>}
        </div>
      </nav>
    </>
  );
};

export default Header;
