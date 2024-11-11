import React from 'react'

const Detail = () => {
  return (
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Blog post header */}
        <div className="py-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Blog Post Title</h1>
          <p className="text-gray-500 text-sm">
            Published on <time dateTime="2022-04-05">April 5, 2022</time>
          </p>
        </div>

        {/* Featured image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyyVR_JM9jVYdpeIhy1lijUK-flJPwq0uk-cz8evw2as_LkNcjDFPQvbDIp5Emm3GYXw&usqp=CAU"
          alt="Featured image"
          className="w-full h-auto rounded-lg shadow-lg mb-8"
        />

        {/* Blog post content */}
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto space-y-4 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius fringilla augue, vel vestibulum nisl
            mattis vel. Praesent porttitor pharetra purus eu tincidunt.
          </p>
          <p>
            Nullam vitae sapien non est suscipit blandit quis sit amet ipsum. Aliquam euismod accumsan nunc, in convallis
            felis luctus in. Sed rhoncus metus a elit rutrum aliquam.
          </p>
          <p>
            Integer ullamcorper leo nulla, nec commodo metus vehicula eget. Duis vel vestibulum tellus, eget mattis quam.
            Nullam euismod libero sed nibh tristique, vel eleifend risus sagittis. In hac habitasse platea dictumst. Sed
            dapibus magna at arcu euismod, a pulvinar turpis tristique. Suspendisse imperdiet velit nec lectus rutrum
            varius.
          </p>
        </div>
      </div>
    </div>
  


  )
}

export default Detail
