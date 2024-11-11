import React from 'react'
import { Link } from 'react-router-dom'


const Blogs = () => {
  return (
    <div>
    <div className="container mx-auto my-12 p-4">
      <h1 className="text-2xl font-bold mb-6">All Blogs!!!</h1>
      <p className="text-center mb-8">
  
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
       
            <Link
              to={`/blog/:id`}
             
              className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyyVR_JM9jVYdpeIhy1lijUK-flJPwq0uk-cz8evw2as_LkNcjDFPQvbDIp5Emm3GYXw&usqp=CAU"
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold">Title</h2>
                <p className="text-sm">Category</p>
              </div>
            </Link>
        
      </div>
    </div>
  </div>
  )
}

export default Blogs
