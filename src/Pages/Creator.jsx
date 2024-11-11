import React from 'react';

const Creator = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-20 bg-gradient-to-b from-gray-50 to-gray-200 py-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full m-4 transition-transform transform hover:scale-105 duration-300">
        <div className="relative">
          <img
            src="https://www.shutterstock.com/image-photo/happy-office-laptop-business-man-600nw-2417739747.jpg"
            alt="avatar"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
            <img
              src="https://www.shutterstock.com/image-photo/happy-office-laptop-business-man-600nw-2417739747.jpg"
              alt="avatar"
              className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-md"
            />
          </div>
        </div>
        <div className="px-6 py-8 mt-6 bg-gradient-to-t from-gray-50 to-white rounded-b-lg">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Creator Name
          </h2>
          <p className="text-center text-gray-500 mt-2 font-medium">Creator Gmail</p>
          <p className="text-center text-gray-500 mt-2 font-medium">Creator Number</p>
          <p className="text-center text-gray-500 mt-2 font-medium">Creator Role</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
