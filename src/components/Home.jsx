import React from 'react'
import Hero from '../Home/Section1'
import Trending from '../Home/Trending'
import Creators from '../Home/Section3'
const Home = () => {
  return (
    <div>
   <div
  style={{
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.pinimg.com/736x/99/a6/82/99a682eb21e538e84d365b3bd08b3d4f.jpg) no-repeat center',
    backgroundSize: 'cover',
    width: '100%' // Set height to cover the viewport height
  }}
  className="py-32 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
>
  <h1 className="pb-6 text-3xl sm:text-4xl font-semibold tracking-wide shadow-md">
    Search for Blogs
  </h1>
  <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
    <div className="relative z-30 text-base text-black">
      <input
        type="text"
        value=""
        placeholder="Search blogs by keyword"
        className="mt-2 shadow-lg focus:outline-none rounded-2xl py-3 px-6 block w-full transition duration-300 ease-in-out transform hover:scale-105"
      />
      <div className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
    </div>
  </div>
</div>



     <Hero/>
     <Trending/>
     <Creators/>
    </div>
  )
}

export default Home
