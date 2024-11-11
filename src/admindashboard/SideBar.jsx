import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaHome, FaPen, FaUser, FaBlog, FaSignOutAlt } from 'react-icons/fa';

const SideBar = ({ setComponent }) => {
  const navigateTo = useNavigate();

  const handleComponents = (value) => {
    setComponent(value);
  };

  const gotoHome = () => {
    navigateTo("/");
  };

  return (
    <div className="w-64 h-full shadow-lg fixed top-0 left-0 bg-gray-800 p-6 flex flex-col items-center">
      <div className="text-center mb-6">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-gray-700 shadow-md"
          src="https://www.shutterstock.com/image-photo/happy-office-laptop-business-man-600nw-2417739747.jpg"
          alt="Author"
        />
        <p className="text-lg font-semibold text-white">AUTHOR NAME</p>
      </div>
      <ul className="space-y-4 w-full">
        <li>
          <button
            onClick={() => handleComponents("My Blogs")}
            className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-200"
          >
            <FaBlog className="mr-3" /> MY BLOGS
          </button>
        </li>
        <li>
          <button
            onClick={() => handleComponents("Create Blog")}
            className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-200"
          >
            <FaPen className="mr-3" /> CREATE BLOGS
          </button>
        </li>
        <li>
          <button
            onClick={gotoHome}
            className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-200"
          >
            <FaHome className="mr-3" /> MY HOME
          </button>
        </li>
        <li>
          <button
            onClick={() => handleComponents("My Profile")}
            className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-200"
          >
            <FaUser className="mr-3" /> MY PROFILE
          </button>
        </li>
        <li>
          <button
            className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-red-500 transition-colors duration-200"
          >
            <FaSignOutAlt className="mr-3" /> LOGOUT
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
