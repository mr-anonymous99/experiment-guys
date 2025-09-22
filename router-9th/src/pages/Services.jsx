import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaCode className="text-indigo-600 w-12 h-12 mb-6 mx-auto" />,
    description:
      'Modern and scalable websites and web applications built with the latest technologies.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPaintBrush className="text-pink-500 w-12 h-12 mb-6 mx-auto" />,
    description:
      'Beautiful and user-friendly interfaces to improve user experience and engagement.',
  },
  {
    title: 'Mobile Development',
    icon: <FaMobileAlt className="text-green-500 w-12 h-12 mb-6 mx-auto" />,
    description:
      'Cross-platform mobile applications with high performance and great user experience.',
  },
  {
    title: 'Cloud Integration',
    icon: <FaCloud className="text-purple-600 w-12 h-12 mb-6 mx-auto" />,
    description:
      'Deploy, manage, and scale your applications using secure cloud infrastructure.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 py-16 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-indigo-900 mb-14 text-center max-w-3xl">
        Our Expertise, Tailored For You
      </h2>

      <div className="grid gap-10 max-w-6xl w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, icon, description }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {icon}
            <h3 className="text-xl font-semibold text-indigo-800 mb-3 text-center">{title}</h3>
            <p className="text-gray-700 text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
