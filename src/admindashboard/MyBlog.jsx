import React from 'react';
import { Link } from 'react-router-dom';

const MyBlog = () => {
  return (
    <div className="container mx-auto my-12 p-4">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:ml-20 lg:ml-40 xl:ml-60">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyyVR_JM9jVYdpeIhy1lijUK-flJPwq0uk-cz8evw2as_LkNcjDFPQvbDIp5Emm3GYXw&usqp=CAU"
            alt="blogImg"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="text-sm text-gray-600">
              "Category"
            </span>
            <h4 className="text-xl font-semibold my-2">
              "Title"
            </h4>
            <div className="flex justify-between mt-4">
            <Link to={`/blog/update/:id`}>
                <button
                  className="text-blue-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
                >
                  UPDATE
                </button>
            </Link>
              <button
                className="text-red-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:underline"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;

