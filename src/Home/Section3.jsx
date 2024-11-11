import React from 'react'

const Section3 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Popular Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        <div className="">
          <img
            src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg"
            alt="blog"
            className="md:w-56 md:h-56 object-cover border border-black rounded-full mx-auto"
          />
          <div className="text-center mt-3">
            <p>Creator Name</p>
            <p className="text-gray-600 text-xs">Role</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
