import * as React from "react";
import logoLight from "../assets/lg-light.png"; 
import logoDark from "../assets/lg-dark.png";  

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => (
  <div className={`text-center rounded-2xl shadow-md pl-4 pr-4 ${isDarkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}>
    <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="mb-2 w-40 h-30 rounded-2xl" />
    <div className="flex justify-center space-x-8">
      <p className="cursor-pointer hover:text-yellow-500">Home</p>
      <p className="cursor-pointer hover:text-yellow-500">About Us</p>
      <p className="cursor-pointer hover:text-yellow-500">Portfolio</p>
      <p className="cursor-pointer hover:text-yellow-500">Career</p>
      <p className="cursor-pointer hover:text-yellow-500">Contact Us</p>
    </div>
    <div className="flex justify-end mt-4 rounded">
      <button className="cursor-pointer hover:text-yellow-500 mb-4" onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
    <div>
    <hr className={`border-t-2 ${isDarkMode ? "border-white" : "border-black"}`} />
    </div>
  </div>
  
);

export default Header;