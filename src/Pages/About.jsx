import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: '500px',
          backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1')"
        }}
        title="Woman holding a mug"
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">About Us</h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Ahmad Sultani
              </a> In
              <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Election
              </a>,
              <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Politics
              </a>
            </p>

            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <h3 className="text-2xl font-bold my-5">#1. What is MaxBlog?</h3>

            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className="bg-gray-200 px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Writing has never been so easy
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="Powered by ChatGPT" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Powered by ChatGPT</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              The cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
              effortlessly tap into the world of AI-generated text.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530442/port-detection.svg" alt="Easy to use" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Easy to use</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Simply input your subject, click the generate button, and the result will appear in seconds just like magick.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="Custom settings" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium">Custom settings</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
              lengths, and formats.
            </p>
          </li>
        
      
         
        </ul>
      </div>
    </div>

            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            
          </div>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="flex justify-center items-center animate-out zoom-in duration-200 delay-300">
        <div className="font-semibold text-center md:text-left">Trusted by</div>
        <div className="flex space-x-2 items-center flex-col md:flex-row">
          <div className="flex -space-x-2 overflow-hidden p-2">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 transform duration-100"
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 transform duration-100"
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 transform duration-100"
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 transform duration-100"
              src="https://randomuser.me/api/portraits/women/6.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 transform duration-100"
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 transform duration-100"
              src="https://randomuser.me/api/portraits/women/9.jpg"
              alt=""
            />
          </div>
          <div>Join 5,000+ other members</div>
        </div>
      </div>
    </div>
  );
};

export default About;
