import React from 'react';

const Section1 = () => {
  return (
    <div className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6' >
      <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
        <img
          src="https://www.orbitmedia.com/wp-content/uploads/2023/06/Blog-Best-Practices-Main-Image-1400.jpg"
          alt="Blog"
          className='w-full h-56 object-cover'
        />
        <div className='p-4'>
          <h1 className='text-lg font-semibold text-gray-800'>Blog Title</h1>
          <p className='text-sm text-gray-600 mt-2'>Blog Caption</p>
          <div className='flex items-center mt-4'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHavAqEKhY8MRX7NntKRnkGqFTk42uJT_TuA&s"
              alt="admin Photo"
              className='w-10 h-10 rounded-full object-cover border border-gray-300'
            />
            <div className='ml-3'>
              <p className='text-sm font-medium text-gray-800'>Admin Name</p>
              <p className='text-xs text-gray-500'>New</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

