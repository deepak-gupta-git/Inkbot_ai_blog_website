import React from 'react';
import contactImage from '../public/contact.png'; // Make sure this path is correct

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-black py-32 px-4">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
            Welcome to Contact Us Page
          </h1>
          <p className="text-lg text-gray-300">We’d love to hear from you</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12 items-center">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img src={contactImage} alt="Contact Illustration" className="w-full h-auto rounded-xl shadow-md" />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 bg-white p-10 rounded-lg ">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 " htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hello!"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>
            <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Send a Message</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
