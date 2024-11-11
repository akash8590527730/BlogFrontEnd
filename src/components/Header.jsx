import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {
  const [show,setShow]=useState(false)
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
    <div className="flex justify-between items-center container mx-auto py-4 px-6">
      {/* Logo Section */}
      <div className="font-semibold text-2xl">
        Max<span className="text-blue-500">Blog</span>
      </div>

      {/* Desktop Menu */}
      <div>
        <ul className="flex space-x-8">
          <li><Link to="/" className="text-gray-300 hover:text-blue-500 transition duration-300">HOME</Link></li>
          <li><Link to="/blogs" className="text-gray-300 hover:text-blue-500 transition duration-300">BLOGS</Link></li>
          <li><Link to="/creator" className="text-gray-300 hover:text-blue-500 transition duration-300">CREATORS</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-blue-500 transition duration-300">ABOUT</Link></li>
          <li><Link to="/contact" className="text-gray-300 hover:text-blue-500 transition duration-300">CONTACT</Link></li>
        </ul>
        
      </div>
      <div className="flex space-x-4">
        <Link 
          to="/dashboard" 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
        >
          DASHBOARD
        </Link>
        <Link 
          to="/login" 
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 font-medium"
        >
          LOGIN
        </Link>
      </div>
    </div>


  </nav>
  )
}

export default Header
