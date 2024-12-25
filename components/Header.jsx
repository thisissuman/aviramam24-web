import React, { useState } from "react";
import { IoMdMenu, IoMdClose, IoIosCall } from "react-icons/io";
import logo from "../src/assets/logo.png";
import aviramam24 from "../src/assets/aviramam24.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <>
      {/* Top bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block font-bold">
          Book your slot today
        </p>
        <div className="inline-flex gap-5 items-center">
          <p className="cursor-pointer">Click Here 👆</p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1 flex items-center">
          {/* Logo */}
          <img height={80} width={80} src={logo} alt="Logo" className="mr-3" />
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

          {/* Links for Desktop */}
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

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
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
                <a
                  href="/login"
                  onClick={() => {
                    localStorage.removeItem("token"); // Adjust the key if needed
                  }}
                >
                  Logout
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
