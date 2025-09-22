import React from "react";

const team = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Lead Web Developer",
    bio: "Alice has built scalable web apps for clients like TechCorp and InnovateX.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    portfolio: "https://alicejohnson.dev",
  },
  {
    id: 2,
    name: "Mark Stevens",
    role: "UI/UX Designer",
    bio: "Mark crafts beautiful, user-friendly interfaces featured on CreativeHub and PixelPerfect.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    portfolio: "https://markstevens.design",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Mobile App Developer",
    bio: "Sophia specializes in smooth iOS & Android apps with clients like AppMasters and MobileGo.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    portfolio: "https://sophialeeapps.com",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
          About Our Team
        </h1>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
          We are a passionate group of professionals committed to delivering top-notch web and app solutions. Here’s a little about the people behind the magic.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {team.map(({ id, name, role, bio, image, portfolio }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition cursor-default"
            >
              <img
                src={image}
                alt={name}
                className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
              />
              <h2 className="text-2xl font-semibold text-indigo-700 mb-1">{name}</h2>
              <p className="text-indigo-500 font-medium mb-3">{role}</p>
              <p className="text-gray-600 mb-4">{bio}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
              >
                View Portfolio 
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
