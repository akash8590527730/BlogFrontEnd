import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 flex">
        {/* Left Side: Form Section */}
        <div className="w-full lg:w-1/2 p-6">
          {/* Logo Section */}
          <div className="font-semibold text-2xl text-center mb-6">
            Max<span className="text-blue-500">Blog</span>
          </div>

          {/* Form Section */}
          <h1 className="text-2xl font-semibold text-center mb-2">Register</h1>

          <form action="">
            {/* Role Selection */}
            <div className="mb-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
              <select id="role" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            {/* Name Input */}
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Enter Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email Input */}
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Enter Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Phone Number Input */}
            <div className="mb-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Enter Your Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Enter Your Password</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Profile Picture Upload */}
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 mr-4">
                <img src="" alt="photo" className="w-full h-full object-cover rounded-full" />
              </div>
              <input
                type="file"
                id="photo"
                className="w-full text-sm text-gray-500 border border-gray-300 rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-500 hover:file:bg-blue-200"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already Registered?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login Now
            </Link>
          </p>
        </div>

        <div className="hidden lg:block w-1/2 bg-cover bg-center rounded-r-lg" 
  style={{ 
    backgroundImage: "url('https://png.pngtree.com/png-vector/20221224/ourmid/pngtree-register-now-banner-design-transparent-background-png-image_6535781.png')",
    minHeight: "500px", // Minimum height for smaller screens
    backgroundSize: "contain", // Contain ensures the image is fully visible within the section
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    backgroundPosition: "center center", // Centers the background image both vertically and horizontally
    borderTopRightRadius: "0.75rem", // Maintain rounded corners
    borderBottomRightRadius: "0.75rem", // Maintain rounded corners
  }} 
/>
      </div>
    </div>
  );
};

export default Register;
