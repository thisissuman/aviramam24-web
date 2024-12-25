import React from "react";
import aviramam24 from "../src/assets/aviramam24.svg"; // Adjusted image path based on your previous code
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src={aviramam24} alt="AVIRAMAM24" width={50} height={50} />
            <span className="ml-2 text-2xl font-bold text-orange-400">
              AVIRAMAM24
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Focusing on resilience coaching and mental health, AVIRAMAM24 is here
            to guide you in your journey of personal growth.
          </p>
          <p className="text-gray-400">Follow Us</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transform hover:scale-110 transition-transform duration-200"
            >
              <FaFacebookF className="text-white hover:text-orange-400 transition-colors duration-200" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transform hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram className="text-white hover:text-orange-400 transition-colors duration-200" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transform hover:scale-110 transition-transform duration-200"
            >
              <FaYoutube className="text-white hover:text-orange-400 transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="h-[3px] w-12 bg-orange-400 mb-4"></div>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-orange-400 transform hover:translate-x-1 transition-transform duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-400 transform hover:translate-x-1 transition-transform duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-orange-400 transform hover:translate-x-1 transition-transform duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#programmes"
                className="hover:text-orange-400 transform hover:translate-x-1 transition-transform duration-200"
              >
                Programmes
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-400 transform hover:translate-x-1 transition-transform duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="h-[3px] w-12 bg-orange-400 mb-4"></div>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-start">
              <FiMapPin className="text-orange-400 mr-2" />
              <span>Block A A-804, Marthahalli, Bangalore, 560037</span>
            </li>
            <li className="flex items-start">
              <FiMail className="text-orange-400 mr-2" />
              <span>contact@aviramam24.com</span>
            </li>
            <li className="flex items-start">
              <FiPhone className="text-orange-400 mr-2" />
              <span>
                +91 9876543210
                <br />
                +91 9876543210
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        <p>Copyright © 2024 AVIRAMAM24. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
