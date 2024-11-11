import React from 'react';

const WriteBlog = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl w-full mx-auto p-8 bg-white border rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Create Blog</h3>
        <form className="space-y-8 overflow-y-auto" style={{ maxHeight: '80vh' }}>
          {/* Category Selection */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-gray-700">Category</label>
            <select
              defaultValue="Category"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-200"
            >
              <option value="">Select Category</option>
              <option value="Devotion">Travel</option>
              <option value="Sports">Sports</option>
              <option value="Coding">Coding</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Title Input */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Enter your blog title"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>

          {/* Blog Image Upload */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-gray-700">Blog Image</label>
            <div className="flex items-center justify-center">
              <img
                src=""
                alt="Preview"
                className="w-full max-w-xs h-28 rounded-md object-cover border border-gray-300 shadow-sm mb-3"
              />
            </div>
            <input
              type="file"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>

          {/* About Textarea */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-gray-700">About</label>
            <textarea
              rows="5"
              placeholder="Write something about your blog"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
