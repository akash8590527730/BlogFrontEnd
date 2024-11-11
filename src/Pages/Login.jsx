import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex">
        
        {/* Left Side with Background Image */}
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ775KsSRGY-4M7z4QViBy-Eq4_Ij3q9xCPKwnAgVd2h9dagUx5bzrQeiayUh893YSWlU&usqp=CAU")' }}></div>

        {/* Right Side with Form */}
        <div className="w-full lg:w-1/2 p-8 ">
          {/* Logo Section */}
          <div className="font-semibold text-2xl text-center mb-6">
            Max<span className="text-blue-500">Blog</span>
          </div>

          {/* Form Section */}
          <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

          <form action="">
            {/* Role Selection */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
              <select id="role" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Enter Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Enter Your Password</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm mt-4">
            Not Registered?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register Now
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
