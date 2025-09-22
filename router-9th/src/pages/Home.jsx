import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          A New Era of <span className="text-indigo-600">Web Development</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          We blend innovation and design to create seamless digital experiences that elevate your brand and engage your users.
        </p>
        <button
        onClick={()=>{
            navigate("/services")
        }} 
        className="bg-indigo-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-indigo-700 transition">
          Discover More
        </button>
      </section>

      {/* Features / Highlights Section */}
      <section className="grid gap-10 px-6 max-w-5xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition cursor-default">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Cutting-Edge Technologies</h2>
          <p className="text-gray-600">
            Leveraging the latest tools and frameworks to build fast, scalable, and secure applications.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition cursor-default">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">User-Centric Design</h2>
          <p className="text-gray-600">
            Crafting intuitive and engaging interfaces that make your users' journey effortless and enjoyable.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition cursor-default">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Reliable Support</h2>
          <p className="text-gray-600">
            Dedicated assistance to keep your projects running smoothly and help you grow your digital presence.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center rounded-tl-3xl rounded-tr-3xl max-w-4xl mx-auto mt-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your digital presence?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Partner with us to build the future of your business with innovative web solutions.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-10 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
