import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 py-16 px-6 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-8 text-center">
            Get in Touch
          </h2>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message here..."
                className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
                required
              />
            </div>

            <div className="flex justify-center space-x-6">
              <button
                type="submit"
                onClick={() => alert("Contact info submitted!")}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
              >
                Send Message
              </button>

              <button
                type="button"
                onClick={() => navigate("/services")}
                className="px-8 py-3 bg-indigo-100 text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
              >
                Check Services
              </button>
            </div>
          </form>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Contact;
