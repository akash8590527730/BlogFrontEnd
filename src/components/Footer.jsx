import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-8 bg-gray-800 text-white w-full p-10'>
      <div className='flex flex-col md:flex-row justify-between'>
        {/* Left Section */}
        <div className='space-y-4 w-full md:w-1/4'>
          <div className="font-semibold text-2xl text-blue-400">
            Max<span className="text-blue-500">Blog</span>
          </div>
          <p className="text-gray-300 text-sm">
            Designed and built with all the love in the world by the MaxBlog team with the help of our contribution.
          </p>
          <p className="text-gray-400 text-sm">Code licensed MaxBlog, docs CC BY 3.0</p>
          <p className="text-gray-400 text-sm">Currently v5.3.2</p>
        </div>

        {/* Links Section */}
        <div className='flex flex-col space-y-3'>
          <h5 className="text-xl font-semibold text-gray-200">Links</h5>
          <Link to={'/'} className="text-white hover:text-blue-500 transition duration-300">Home</Link>
          <Link to={'/blogs'} className="text-white hover:text-blue-500 transition duration-300">Blogs</Link>
          <Link to={'/creator'} className="text-white hover:text-blue-500 transition duration-300">Creator</Link>
          <Link to={'/contact'} className="text-white hover:text-blue-500 transition duration-300">Contact</Link>
        </div>

        {/* Resources Section */}
        <div className='flex flex-col space-y-3'>
          <h5 className="text-xl font-semibold text-gray-200">Resources</h5>
          <a href="https://react.dev/" className="text-white hover:text-blue-500 transition duration-300" target='_blank' rel="noopener noreferrer">React</a>
          <a href="https://react-bootstrap.github.io/" className="text-white hover:text-blue-500 transition duration-300" target='_blank' rel="noopener noreferrer">React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" className="text-white hover:text-blue-500 transition duration-300" target='_blank' rel="noopener noreferrer">React Router</a>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className='icons flex justify-center space-x-6 mt-5'>
        <a href="" className="text-white hover:text-blue-500 transition duration-300" target='_blank' rel="noopener noreferrer">
          <i className='fa-brands fa-twitter text-2xl'></i>
        </a>
        <a href="" className="text-white hover:text-blue-500 transition duration-300" target='_blank' rel="noopener noreferrer">
          <i className='fa-brands fa-instagram text-2xl'></i>
        </a>
        <a href="" className="text-white hover:text-blue-500 transition duration-300" target='_blank' rel="noopener noreferrer">
          <i className='fa-brands fa-facebook text-2xl'></i>
        </a>
        <a href="" className="text-white hover:text-blue-500 transition duration-300" target='_blank' rel="noopener noreferrer">
          <i className='fa-brands fa-github text-2xl'></i>
        </a>
      </div>

      {/* Copyright Section */}
      <p className='text-center text-gray-400 mt-8 text-sm'>
        Copyright &copy; 2024, Max Blog. Built with React.
      </p>
    </div>
  )
}

export default Footer;
