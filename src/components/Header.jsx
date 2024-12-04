import React from "react";
import logoLight from "../assets/lg-light.png";
import logoDark from "../assets/lg-dark.png";
import { NavLink } from "react-router-dom";

const Header = ({ isDarkMode, toggleTheme }) => (
  <div className={`text-center rounded-2xl shadow-md pl-4 pr-4 ${isDarkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}>
    <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="mb-2 w-40 h-30 rounded-2xl" />
    <div className="flex justify-center space-x-8">
      <NavLink 
        to="/" 
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-yellow-500" : (isDarkMode ? "text-white" : "text-black")
        }>
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-yellow-500" : (isDarkMode ? "text-white" : "text-black")
        }>
        About Us
      </NavLink>

      <NavLink 
        to="/portfolio" 
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-yellow-500" : (isDarkMode ? "text-white" : "text-black")
        }>
        Portfolio
      </NavLink>

      <NavLink 
        to="/career" 
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-yellow-500" : (isDarkMode ? "text-white" : "text-black")
        }>
        Career
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-yellow-500" : (isDarkMode ? "text-white" : "text-black")
        }>
        Contact Us
      </NavLink>
    </div>

    <div className="flex justify-end mt-4 rounded">
      <button 
        className="cursor-pointer hover:text-yellow-500 mb-4" 
        onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>

    <div>
      <hr className={`border-t-2 ${isDarkMode ? "border-white" : "border-black"}`} />
    </div>
  </div>
);

export default Header;
