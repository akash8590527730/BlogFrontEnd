import React from "react";

function Trending() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4 ml-6">Trending</h1>
      <marquee>
        <div className="w-64 h-96 p-4 bg-white border border-gray-400 rounded-lg shadow-md mx-2 inline-block">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyyVR_JM9jVYdpeIhy1lijUK-flJPwq0uk-cz8evw2as_LkNcjDFPQvbDIp5Emm3GYXw&usqp=CAU"
              alt="blog"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              Category
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-b-lg h-36 flex flex-col justify-between">
            <h1
              className="text-lg font-bold mb-2 overflow-hidden text-ellipsis"
              style={{ whiteSpace: "nowrap" }}
            >
              Blog Title
            </h1>
            <div className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png"
                alt="author_avatar"
                className="w-10 h-10 rounded-full"
              />
              <p className="ml-3 text-gray-400 text-sm">Admin Name</p>
            </div>
          </div>
        </div>
      </marquee>
    </div>
  );
}

export default Trending;
